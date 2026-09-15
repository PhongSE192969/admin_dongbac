import { useState } from "react";
import { Plus } from "lucide-react";
import { CategoryForm } from "../components/forms/ManagementForms.jsx";
import { Button } from "../components/ui/Button.jsx";
import { ManagementPageHeader } from "../components/ui/ManagementPageHeader.jsx";
import { ManagementTable } from "../components/ui/ManagementTable.jsx";
import { Modal } from "../components/ui/Modal.jsx";
import { Pagination } from "../components/ui/Pagination.jsx";
import { TableToolbar } from "../components/ui/TableToolbar.jsx";

const columns = [
  { key: "name", label: "Tên danh mục" },
  { key: "slug", label: "Slug" },
  { key: "order", label: "Thứ tự" },
  { key: "status", label: "Trạng thái" },
  { key: "actions", label: "Thao tác" },
];

export function CategoriesPage() {
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <ManagementPageHeader
        actions={
          <Button icon={Plus} onClick={() => setFormOpen(true)}>
            Thêm danh mục
          </Button>
        }
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Sản phẩm", to: "/products" }, { label: "Danh mục" }]}
        description="Quản lý danh mục sản phẩm dành cho ADMIN."
        title="Danh mục"
      />
      <div className="space-y-4 p-4 sm:p-6">
        <TableToolbar onSearchChange={setSearch} searchValue={search} />
        <ManagementTable
          columns={columns}
          emptyAction={
            <Button icon={Plus} onClick={() => setFormOpen(true)} variant="outline">
              Thêm danh mục
            </Button>
          }
          emptyDescription="Danh mục sẽ hiển thị sau khi có dữ liệu."
          emptyTitle="Chưa có danh mục."
        />
        <Pagination />
      </div>
      <Modal onClose={() => setFormOpen(false)} open={formOpen} title="Thêm danh mục">
        <CategoryForm />
      </Modal>
    </>
  );
}
