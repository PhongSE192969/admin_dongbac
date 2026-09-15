import { useState } from "react";
import { Plus } from "lucide-react";
import { BannerForm } from "../../components/forms/ManagementForms.jsx";
import { Button } from "../../components/ui/Button.jsx";
import { ManagementPageHeader } from "../../components/ui/ManagementPageHeader.jsx";
import { ManagementTable } from "../../components/ui/ManagementTable.jsx";
import { Modal } from "../../components/ui/Modal.jsx";
import { Pagination } from "../../components/ui/Pagination.jsx";
import { TableToolbar } from "../../components/ui/TableToolbar.jsx";

const columns = [
  { key: "title", label: "Title" },
  { key: "desktopImage", label: "Ảnh desktop" },
  { key: "mobileImage", label: "Ảnh mobile" },
  { key: "order", label: "Sort order" },
  { key: "status", label: "Trạng thái" },
  { key: "actions", label: "Thao tác" },
];

export function BannersPage() {
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <ManagementPageHeader
        actions={
          <Button icon={Plus} onClick={() => setFormOpen(true)}>
            Thêm banner
          </Button>
        }
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Website" }, { label: "Banner" }]}
        description="Quản lý banner hiển thị trên website."
        title="Banner"
      />
      <div className="space-y-4 p-4 sm:p-6">
        <TableToolbar onSearchChange={setSearch} searchValue={search} />
        <ManagementTable
          columns={columns}
          emptyAction={
            <Button icon={Plus} onClick={() => setFormOpen(true)} variant="outline">
              Thêm banner
            </Button>
          }
          emptyTitle="Chưa có banner."
        />
        <Pagination />
      </div>
      <Modal onClose={() => setFormOpen(false)} open={formOpen} title="Thêm banner">
        <BannerForm />
      </Modal>
    </>
  );
}
