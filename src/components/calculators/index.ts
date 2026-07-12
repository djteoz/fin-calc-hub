import type { ComponentType } from "react";
import { LoanCalculator } from "./LoanCalculator";
import { CompoundInterestCalculator } from "./CompoundInterestCalculator";
import { VatCalculator } from "./VatCalculator";
import { MarginCalculator } from "./MarginCalculator";
import { PercentCalculator } from "./PercentCalculator";
import type { ToolSlug } from "@/lib/tools";

export const calculatorMap: Record<ToolSlug, ComponentType> = {
  kredit: LoanCalculator,
  "slozhny-procent": CompoundInterestCalculator,
  nds: VatCalculator,
  marzha: MarginCalculator,
  procenty: PercentCalculator,
};
