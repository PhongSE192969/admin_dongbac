import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1 text-sm text-slate-500">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span className="flex min-w-0 items-center gap-1" key={`${item.label}-${index}`}>
            {item.to && !isLast ? (
              <Link className="truncate hover:text-brand-700" to={item.to}>
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "truncate text-slate-700" : "truncate"}>{item.label}</span>
            )}
            {!isLast ? <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0" /> : null}
          </span>
        );
      })}
    </nav>
  );
}
