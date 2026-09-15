import { useState } from "react";
import { ManagementPageHeader } from "../components/ui/ManagementPageHeader.jsx";
import { ManagementTable } from "../components/ui/ManagementTable.jsx";
import { Pagination } from "../components/ui/Pagination.jsx";
import { TableToolbar } from "../components/ui/TableToolbar.jsx";

const columns = [
  { key: "actor", label: "Người thực hiện" },
  { key: "action", label: "Hành động" },
  { key: "target", label: "Đối tượng" },
  { key: "time", label: "Thời gian" },
  { key: "details", label: "Details" },
];

export function AuditPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <ManagementPageHeader
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Hệ thống" }, { label: "Audit log" }]}
        description="Theo dõi hoạt động hệ thống dành cho ADMIN."
        title="Audit log"
      />
      <div className="space-y-4 p-4 sm:p-6">
        <TableToolbar onSearchChange={setSearch} searchValue={search} />
        <ManagementTable columns={columns} emptyTitle="Chưa có audit log." />
        <Pagination />
      </div>
    </>
  );
}
