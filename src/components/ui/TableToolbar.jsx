import { Search } from "lucide-react";
import { SelectField } from "./form.jsx";

export function TableToolbar({ children, filterLabel = "Trạng thái", filterOptions = [], onFilterChange, onSearchChange, searchValue }) {
  return (
    <div className="flex flex-col gap-3 rounded-md border border-slate-200 bg-white p-3 shadow-sm lg:flex-row lg:items-end lg:justify-between">
      <div className="grid flex-1 gap-3 sm:grid-cols-[minmax(0,1fr)_220px]">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Tìm kiếm</span>
          <span className="relative block">
            <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              className="h-10 w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400"
              onChange={(event) => onSearchChange?.(event.target.value)}
              placeholder="Nhập từ khóa"
              type="search"
              value={searchValue}
            />
          </span>
        </label>
        {filterOptions.length ? (
          <SelectField
            label={filterLabel}
            onChange={(event) => onFilterChange?.(event.target.value)}
            options={filterOptions}
          />
        ) : null}
      </div>
      {children ? <div className="flex flex-wrap gap-2">{children}</div> : null}
    </div>
  );
}
