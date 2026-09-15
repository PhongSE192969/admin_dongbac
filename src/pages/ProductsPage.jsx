import { useState } from "react";
import { Eye, Plus } from "lucide-react";
import { ProductForm } from "../components/forms/ManagementForms.jsx";
import { Button } from "../components/ui/Button.jsx";
import { EmptyState } from "../components/ui/EmptyState.jsx";
import { ManagementPageHeader } from "../components/ui/ManagementPageHeader.jsx";
import { ManagementTable } from "../components/ui/ManagementTable.jsx";
import { Modal } from "../components/ui/Modal.jsx";
import { Pagination } from "../components/ui/Pagination.jsx";
import { TableToolbar } from "../components/ui/TableToolbar.jsx";
import { CONTENT_STATUSES } from "../config/statuses.js";

const columns = [
  { key: "name", label: "Tên sản phẩm" },
  { key: "category", label: "Danh mục" },
  { key: "status", label: "Trạng thái" },
  { key: "updatedAt", label: "Ngày cập nhật" },
  { key: "actions", label: "Thao tác" },
];

const statusOptions = Object.entries(CONTENT_STATUSES).map(([value, config]) => ({
  value,
  label: config.label,
}));

export function ProductsPage() {
  const [search, setSearch] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <ManagementPageHeader
        actions={
          <Button icon={Plus} onClick={() => setFormOpen(true)}>
            Thêm sản phẩm
          </Button>
        }
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Sản phẩm" }]}
        description="Quản lý danh sách, biểu mẫu và khu vực xem trước sản phẩm."
        title="Sản phẩm"
      />
      <div className="grid gap-4 p-4 sm:p-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-4">
          <TableToolbar
            filterLabel="Trạng thái"
            filterOptions={statusOptions}
            onSearchChange={setSearch}
            searchValue={search}
          />
          <ManagementTable
            columns={columns}
            emptyAction={
              <Button icon={Plus} onClick={() => setFormOpen(true)} variant="outline">
                Thêm sản phẩm
              </Button>
            }
            emptyDescription="Danh sách sản phẩm sẽ hiển thị sau khi có dữ liệu."
            emptyTitle="Chưa có sản phẩm."
          />
          <Pagination />
        </div>
        <section className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Eye aria-hidden="true" className="h-4 w-4 text-brand-700" />
            <h2 className="text-base font-bold text-slate-950">Chi tiết / preview</h2>
          </div>
          <EmptyState title="Chưa chọn sản phẩm." />
        </section>
      </div>
      <Modal onClose={() => setFormOpen(false)} open={formOpen} title="Thêm sản phẩm">
        <ProductForm />
      </Modal>
    </>
  );
}
