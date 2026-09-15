import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { getVisibleNavigation } from "../../config/navigation.jsx";
import { useAdminApp } from "../../context/AdminAppContext.jsx";
import { Button } from "../ui/Button.jsx";

function Brand({ collapsed }) {
  return (
    <div className="flex h-16 items-center gap-3 border-b border-white/10 px-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white text-sm font-black text-brand-800">
        ĐB
      </div>
      {!collapsed ? (
        <div className="min-w-0">
          <p className="truncate text-sm font-black uppercase text-white">Đông Bắc Sài Gòn</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-100">Quản trị</p>
        </div>
      ) : null}
    </div>
  );
}

function SidebarContent({ collapsed, onCloseMobile }) {
  const { role } = useAdminApp();
  const sections = getVisibleNavigation(role);

  return (
    <div className="flex h-full flex-col">
      <Brand collapsed={collapsed} />
      <nav aria-label="Admin" className="scrollbar-thin min-h-0 flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-5">
          {sections.map((section) => (
            <section key={section.title}>
              {!collapsed ? (
                <h2 className="mb-2 px-2 text-[11px] font-black uppercase tracking-wide text-emerald-100/80">{section.title}</h2>
              ) : null}
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      className={({ isActive }) =>
                        [
                          "group flex h-10 items-center rounded-md px-3 text-sm font-semibold transition-colors",
                          collapsed ? "justify-center" : "gap-3",
                          isActive
                            ? "bg-white text-brand-800 shadow-sm"
                            : "text-emerald-50 hover:bg-white/10 hover:text-white",
                        ].join(" ")
                      }
                      key={item.path}
                      onClick={onCloseMobile}
                      title={collapsed ? item.label : undefined}
                      to={item.path}
                    >
                      <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                      {!collapsed ? <span className="truncate">{item.label}</span> : null}
                    </NavLink>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </nav>
    </div>
  );
}

export function Sidebar({ collapsed, mobileOpen, onCloseMobile, onToggleCollapse }) {
  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-40 hidden bg-brand-900 text-white shadow-xl transition-[width] duration-200 lg:block ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <SidebarContent collapsed={collapsed} />
        <div className="border-t border-white/10 p-3">
          <Button
            aria-label={collapsed ? "Mở rộng sidebar" : "Thu gọn sidebar"}
            className="w-full border-white/15 bg-white/5 text-white hover:bg-white/10"
            icon={collapsed ? ChevronRight : ChevronLeft}
            onClick={onToggleCollapse}
            size={collapsed ? "icon" : "md"}
            variant="ghost"
          >
            {!collapsed ? "Thu gọn" : null}
          </Button>
        </div>
      </aside>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button aria-label="Đóng menu" className="absolute inset-0 bg-slate-950/45" onClick={onCloseMobile} type="button" />
          <aside
            aria-label="Menu quản trị"
            className="absolute inset-y-0 left-0 flex w-[min(84vw,300px)] flex-col bg-brand-900 text-white shadow-2xl"
          >
            <Button
              aria-label="Đóng menu"
              className="absolute right-3 top-3 z-10 text-white hover:bg-white/10"
              icon={X}
              onClick={onCloseMobile}
              size="icon"
              variant="ghost"
            />
            <SidebarContent collapsed={false} onCloseMobile={onCloseMobile} />
          </aside>
        </div>
      ) : null}
    </>
  );
}
