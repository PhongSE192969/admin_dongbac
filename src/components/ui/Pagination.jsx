import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button.jsx";

export function Pagination({ page = 1 }) {
  return (
    <div className="flex flex-col gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
      <span>Trang {page}</span>
      <div className="flex items-center gap-2">
        <Button aria-label="Trang trước" disabled icon={ChevronLeft} size="icon" variant="outline" />
        <Button aria-label="Trang sau" disabled icon={ChevronRight} size="icon" variant="outline" />
      </div>
    </div>
  );
}
