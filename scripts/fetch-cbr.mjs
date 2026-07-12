/**
 * Fetches official CBR data at build time:
 * - Key rate (SOAP KeyRateXML)
 * - Daily currency rates (XML_daily.asp)
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = join(__dirname, "../src/data/cbr.json");

function parseCbrDate(dateStr) {
  const [day, month, year] = dateStr.split(".");
  return `${year}-${month}-${day}`;
}

function parseCbrNumber(value) {
  return Number(value.replace(",", "."));
}

function parseCurrencyXml(xml) {
  const dateMatch = xml.match(/Date="(\d{2}\.\d{2}\.\d{4})"/);
  const date = dateMatch
    ? parseCbrDate(dateMatch[1])
    : new Date().toISOString().slice(0, 10);

  const currencies = [];
  const valuteRegex = /<Valute[^>]*>([\s\S]*?)<\/Valute>/g;
  let match;

  while ((match = valuteRegex.exec(xml)) !== null) {
    const block = match[1];
    const code = block.match(/<CharCode>([^<]+)<\/CharCode>/)?.[1];
    const name = block.match(/<Name>([^<]+)<\/Name>/)?.[1];
    const nominal = block.match(/<Nominal>([^<]+)<\/Nominal>/)?.[1];
    const value = block.match(/<Value>([^<]+)<\/Value>/)?.[1];
    const vunitRate = block.match(/<VunitRate>([^<]+)<\/VunitRate>/)?.[1];

    if (!code || !name || !nominal || !value) continue;

    currencies.push({
      code,
      name,
      nominal: parseCbrNumber(nominal),
      value: parseCbrNumber(value),
      ratePerUnit: parseCbrNumber(vunitRate ?? value),
    });
  }

  return { date, currencies };
}

async function fetchKeyRate() {
  const body = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <MainInfoXML xmlns="http://web.cbr.ru" />
  </soap:Body>
</soap:Envelope>`;

  const response = await fetch("https://www.cbr.ru/DailyInfoWebServ/DailyInfo.asmx", {
    method: "POST",
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      SOAPAction: "http://web.cbr.ru/MainInfoXML",
    },
    body,
  });

  if (!response.ok) {
    throw new Error(`KeyRate request failed: ${response.status}`);
  }

  const xml = await response.text();
  const rateStr = xml.match(/<keyRate[^>]*Date="([^"]+)"[^>]*>([^<]+)<\/keyRate>/i)?.[2]
    ?? xml.match(/<keyRate[^>]*>([^<]+)<\/keyRate>/i)?.[1];
  const dateStr = xml.match(/<keyRate[^>]*Date="(\d{2}\.\d{2}\.\d{4})"/i)?.[1];

  if (!rateStr) {
    throw new Error("KeyRate fields not found");
  }

  return {
    rate: parseCbrNumber(rateStr),
    date: dateStr ? parseCbrDate(dateStr) : new Date().toISOString().slice(0, 10),
  };
}

async function fetchCurrencies() {
  const response = await fetch("https://www.cbr.ru/scripts/XML_daily.asp");

  if (!response.ok) {
    throw new Error(`Currency request failed: ${response.status}`);
  }

  const xml = await response.text();
  return parseCurrencyXml(xml);
}

const FALLBACK = {
  fetchedAt: new Date().toISOString(),
  ratesDate: new Date().toISOString().slice(0, 10),
  keyRate: 21,
  keyRateDate: new Date().toISOString().slice(0, 10),
  currencies: [
    { code: "USD", name: "Доллар США", nominal: 1, value: 90, ratePerUnit: 90 },
    { code: "EUR", name: "Евро", nominal: 1, value: 98, ratePerUnit: 98 },
    { code: "CNY", name: "Юань", nominal: 1, value: 12.5, ratePerUnit: 12.5 },
  ],
  source: "fallback",
};

async function main() {
  mkdirSync(dirname(OUT_PATH), { recursive: true });

  try {
    const [keyRateData, currencyData] = await Promise.all([
      fetchKeyRate(),
      fetchCurrencies(),
    ]);

    const popularCodes = ["USD", "EUR", "CNY", "GBP", "JPY", "KZT", "BYN", "TRY", "AED"];
    const sorted = [
      ...currencyData.currencies.filter((c) => popularCodes.includes(c.code)),
      ...currencyData.currencies.filter((c) => !popularCodes.includes(c.code)),
    ];

    const data = {
      fetchedAt: new Date().toISOString(),
      ratesDate: currencyData.date,
      keyRate: keyRateData.rate,
      keyRateDate: keyRateData.date,
      currencies: sorted,
      source: "cbr.ru",
    };

    writeFileSync(OUT_PATH, JSON.stringify(data, null, 2), "utf-8");
    console.log(
      `CBR data saved: key rate ${data.keyRate}% (${data.keyRateDate}), ${data.currencies.length} currencies (${data.ratesDate})`,
    );
  } catch (error) {
    console.warn("CBR fetch failed, using fallback:", error);
    writeFileSync(OUT_PATH, JSON.stringify(FALLBACK, null, 2), "utf-8");
  }
}

main();
