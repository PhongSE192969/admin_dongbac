import { CONTENT_STATUSES } from "../../config/statuses.js";

const toneClasses = {
  slate: "border-slate-200 bg-slate-100 text-slate-700",
  amber: "border-amber-200 bg-amber-50 text-amber-800",
  red: "border-red-200 bg-red-50 text-red-700",
  green: "border-emerald-200 bg-emerald-50 text-emerald-700",
  zinc: "border-zinc-200 bg-zinc-100 text-zinc-700",
};

export function StatusBadge({ status }) {
  const statusConfig = CONTENT_STATUSES[status] ?? {
    label: status,
    tone: "slate",
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${toneClasses[statusConfig.tone]}`}>
      {statusConfig.label}
    </span>
  );
}
