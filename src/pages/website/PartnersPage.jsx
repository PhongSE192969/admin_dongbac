import { useState } from "react";
import { Plus } from "lucide-react";
import { PartnerForm } from "../../components/forms/ManagementForms.jsx";
import { Button } from "../../components/ui/Button.jsx";
import { ManagementPageHeader } from "../../components/ui/ManagementPageHeader.jsx";
import { ManagementTable } from "../../components/ui/ManagementTable.jsx";
import { Modal } from "../../components/ui/Modal.jsx";
import { Pagination } from "../../components/ui/Pagination.jsx";
import { TableToolbar } from "../../components/ui/TableToolbar.jsx";

const columns = [
  { key: "name", label: "Name" },
  { key: "logo", label: "Logo" },
  { key: "website", label: "Website" },
  { key: "order", label: "Sort order" },
  { key: "status", label: "Trạng thái" },
  { key: "actions", label: "Thao tác" },
];

export function PartnersPage() {
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <ManagementPageHeader
        actions={
          <Button icon={Plus} onClick={() => setFormOpen(true)}>
            Thêm đối tác
          </Button>
        }
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Website" }, { label: "Đối tác" }]}
        description="Quản lý logo và thông tin đối tác."
        title="Đối tác"
      />
      <div className="space-y-4 p-4 sm:p-6">
        <TableToolbar onSearchChange={setSearch} searchValue={search} />
        <ManagementTable
          columns={columns}
          emptyAction={
            <Button icon={Plus} onClick={() => setFormOpen(true)} variant="outline">
              Thêm đối tác
            </Button>
          }
          emptyTitle="Chưa có đối tác."
        />
        <Pagination />
      </div>
      <Modal onClose={() => setFormOpen(false)} open={formOpen} title="Thêm đối tác">
        <PartnerForm />
      </Modal>
    </>
  );
}
