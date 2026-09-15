import { useState } from "react";
import { Plus } from "lucide-react";
import { StaffForm } from "../components/forms/ManagementForms.jsx";
import { Button } from "../components/ui/Button.jsx";
import { ManagementPageHeader } from "../components/ui/ManagementPageHeader.jsx";
import { ManagementTable } from "../components/ui/ManagementTable.jsx";
import { Modal } from "../components/ui/Modal.jsx";
import { Pagination } from "../components/ui/Pagination.jsx";
import { TableToolbar } from "../components/ui/TableToolbar.jsx";

const columns = [
  { key: "name", label: "Họ tên" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "status", label: "Trạng thái" },
  { key: "actions", label: "Thao tác" },
];

export function StaffPage() {
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <ManagementPageHeader
        actions={
          <Button icon={Plus} onClick={() => setFormOpen(true)}>
            Thêm nhân viên
          </Button>
        }
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Hệ thống" }, { label: "Nhân viên" }]}
        description="Quản lý tài khoản nội bộ do ADMIN tạo."
        title="Nhân viên"
      />
      <div className="space-y-4 p-4 sm:p-6">
        <TableToolbar
          filterLabel="Role"
          filterOptions={[
            { value: "ADMIN", label: "ADMIN" },
            { value: "STAFF", label: "STAFF" },
          ]}
          onSearchChange={setSearch}
          searchValue={search}
        />
        <ManagementTable
          columns={columns}
          emptyAction={
            <Button icon={Plus} onClick={() => setFormOpen(true)} variant="outline">
              Thêm nhân viên
            </Button>
          }
          emptyTitle="Chưa có nhân viên."
        />
        <Pagination />
      </div>
      <Modal onClose={() => setFormOpen(false)} open={formOpen} title="Thêm nhân viên">
        <StaffForm />
      </Modal>
    </>
  );
}
