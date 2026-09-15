import { Breadcrumb } from "./Breadcrumb.jsx";

export function ManagementPageHeader({ actions, breadcrumb, description, eyebrow, title }) {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-200 bg-white px-4 py-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0 space-y-2">
        {breadcrumb ? <Breadcrumb items={breadcrumb} /> : null}
        {eyebrow ? <p className="text-xs font-bold uppercase tracking-wide text-brand-700">{eyebrow}</p> : null}
        <div>
          <h1 className="text-2xl font-bold leading-tight text-slate-950 sm:text-[28px]">{title}</h1>
          {description ? <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">{description}</p> : null}
        </div>
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap gap-2">{actions}</div> : null}
    </header>
  );
}
