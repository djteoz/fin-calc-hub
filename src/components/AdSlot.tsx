export function AdSlot() {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  if (!clientId) {
    return null;
  }

  return (
    <div className="my-6 flex min-h-[90px] items-center justify-center">
      <ins
        className="adsbygoogle block w-full"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
