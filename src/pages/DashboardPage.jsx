import { ClipboardList, FileText, Package, UserRoundCheck, Users } from "lucide-react";
import { ManagementPageHeader } from "../components/ui/ManagementPageHeader.jsx";
import { EmptyState } from "../components/ui/EmptyState.jsx";
import { ROLES } from "../config/permissions.js";
import { useAdminApp } from "../context/AdminAppContext.jsx";

function MetricCard({ icon: Icon, label }) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-black text-slate-950">—</p>
          <p className="mt-1 text-xs font-semibold text-slate-500">Chưa có dữ liệu</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-700">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
      </div>
    </article>
  );
}

function SectionShell({ items, title }) {
  return (
    <section className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-bold text-slate-950">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div className="rounded-md border border-slate-200 bg-slate-50 p-3" key={item}>
            <p className="text-sm font-semibold text-slate-700">{item}</p>
            <p className="mt-2 text-sm text-slate-500">Chưa có dữ liệu</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DashboardPage() {
  const { role } = useAdminApp();
  const isAdmin = role === ROLES.ADMIN;

  const metrics = isAdmin
    ? [
        { label: "Bài chờ duyệt", icon: ClipboardList },
        { label: "Sản phẩm chờ duyệt", icon: Package },
        { label: "Khách tư vấn mới", icon: Users },
        { label: "Tổng sản phẩm", icon: Package },
        { label: "Tổng bài viết", icon: FileText },
        { label: "Staff", icon: UserRoundCheck },
      ]
    : [
        { label: "Sản phẩm", icon: Package },
        { label: "Bài viết", icon: FileText },
        { label: "Chờ duyệt", icon: ClipboardList },
        { label: "Khách tư vấn", icon: Users },
      ];

  return (
    <>
      <ManagementPageHeader
        breadcrumb={[{ label: "Dashboard" }]}
        description="Tổng quan vận hành cho hệ thống quản trị nội bộ."
        title="Dashboard"
      />
      <div className="space-y-4 p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard icon={metric.icon} key={metric.label} label={metric.label} />
          ))}
        </div>
        {isAdmin ? (
          <SectionShell items={["Hoạt động gần đây", "Bài chờ duyệt", "Sản phẩm chờ duyệt"]} title="Khu vực quản trị" />
        ) : (
          <SectionShell
            items={["Bài viết của tôi", "Sản phẩm của tôi", "Đang chờ duyệt", "Bị từ chối", "Khách tư vấn mới", "Khách đang xử lý"]}
            title="Công việc của tôi"
          />
        )}
        <EmptyState title="Chưa có dữ liệu dashboard." />
      </div>
    </>
  );
}
