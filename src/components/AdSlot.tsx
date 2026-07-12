export function AdSlot({ label = "Реклама" }: { label?: string }) {
  return (
    <div
      className="flex min-h-[120px] items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400"
      data-ad-slot="placeholder"
    >
      {label} — подключите Google AdSense
    </div>
  );
}
