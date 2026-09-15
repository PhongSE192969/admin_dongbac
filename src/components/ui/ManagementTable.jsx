import { EmptyState } from "./EmptyState.jsx";

export function ManagementTable({ columns, emptyAction, emptyDescription, emptyTitle, rows = [] }) {
  return (
    <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
            <tr>
              {columns.map((column) => (
                <th className="whitespace-nowrap px-4 py-3" key={column.key} scope="col">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {rows.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td className="px-4 py-3 text-slate-700" key={column.key}>
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length === 0 ? (
        <div className="border-t border-slate-200 p-4">
          <EmptyState action={emptyAction} description={emptyDescription} title={emptyTitle} />
        </div>
      ) : null}
    </div>
  );
}

export function TableSkeleton({ columns = 4 }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4" aria-hidden="true">
      <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {Array.from({ length: columns }).map((_, index) => (
          <div className="h-3 rounded bg-slate-100" key={index} />
        ))}
      </div>
      <div className="mt-4 space-y-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="h-9 rounded bg-slate-50" key={index} />
        ))}
      </div>
    </div>
  );
}
