import { Inbox } from "lucide-react";

export function EmptyState({ action, description, icon: Icon = Inbox, title = "Chưa có dữ liệu." }) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-10 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-700 shadow-sm">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-900">{title}</p>
      {description ? <p className="mt-1 max-w-md text-sm text-slate-500">{description}</p> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
