import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogOut, Menu, UserCircle } from "lucide-react";
import { getNavigationItem } from "../../config/navigation.jsx";
import { useAdminApp } from "../../context/AdminAppContext.jsx";
import { Breadcrumb } from "../ui/Breadcrumb.jsx";
import { Button } from "../ui/Button.jsx";

function getPageMeta(pathname) {
  if (pathname === "/403") {
    return { label: "403", path: pathname };
  }

  const item = getNavigationItem(pathname);
  return item ?? { label: "Dashboard", path: "/dashboard" };
}

export function Topbar({ onOpenMobile }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { clearPreviewRole, role } = useAdminApp();

  const pageMeta = useMemo(() => getPageMeta(location.pathname), [location.pathname]);
  const breadcrumb = pageMeta.path === "/dashboard" ? [{ label: "Dashboard" }] : [{ label: "Dashboard", to: "/dashboard" }, { label: pageMeta.label }];

  const handleLogout = () => {
    clearPreviewRole();
    setOpen(false);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6">
      <Button aria-label="Mở menu" className="lg:hidden" icon={Menu} onClick={onOpenMobile} size="icon" variant="outline" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-bold text-slate-950">{pageMeta.label}</p>
        <Breadcrumb items={breadcrumb} />
      </div>
      <div className="relative">
        <button
          aria-expanded={open}
          aria-haspopup="menu"
          className="flex h-10 items-center gap-3 rounded-md border border-slate-200 bg-white px-2 text-left shadow-sm transition-colors hover:bg-slate-50"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-50 text-brand-700">
            <UserCircle aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block text-sm font-bold leading-4 text-slate-900">Tên người dùng</span>
            <span className="mt-0.5 inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-black text-slate-600">{role}</span>
          </span>
        </button>
        {open ? (
          <div
            className="absolute right-0 mt-2 w-56 overflow-hidden rounded-md border border-slate-200 bg-white shadow-panel"
            role="menu"
          >
            <div className="border-b border-slate-100 px-3 py-3">
              <p className="text-sm font-bold text-slate-950">Tên người dùng</p>
              <p className="mt-1 text-xs font-bold uppercase text-brand-700">{role}</p>
            </div>
            <Link
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen(false)}
              role="menuitem"
              to="/profile"
            >
              <UserCircle aria-hidden="true" className="h-4 w-4" />
              Hồ sơ cá nhân
            </Link>
            <button
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50"
              onClick={handleLogout}
              role="menuitem"
              type="button"
            >
              <LogOut aria-hidden="true" className="h-4 w-4" />
              Đăng xuất
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
