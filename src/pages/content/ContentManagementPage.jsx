import { useState } from "react";
import { Plus } from "lucide-react";
import { ArticleForm } from "../../components/forms/ManagementForms.jsx";
import { Button } from "../../components/ui/Button.jsx";
import { ManagementPageHeader } from "../../components/ui/ManagementPageHeader.jsx";
import { ManagementTable } from "../../components/ui/ManagementTable.jsx";
import { Modal } from "../../components/ui/Modal.jsx";
import { Pagination } from "../../components/ui/Pagination.jsx";
import { TableToolbar } from "../../components/ui/TableToolbar.jsx";
import { CONTENT_STATUSES } from "../../config/statuses.js";

const columns = [
  { key: "title", label: "Tiêu đề" },
  { key: "type", label: "Loại nội dung" },
  { key: "status", label: "Trạng thái" },
  { key: "updatedAt", label: "Ngày cập nhật" },
  { key: "owner", label: "Người phụ trách" },
  { key: "actions", label: "Thao tác" },
];

const statusOptions = Object.entries(CONTENT_STATUSES).map(([value, config]) => ({
  value,
  label: config.label,
}));

export function ContentManagementPage({ config }) {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ManagementPageHeader
        actions={
          <Button icon={Plus} onClick={() => setModalOpen(true)}>
            Thêm nội dung
          </Button>
        }
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Nội dung" }, { label: config.label }]}
        description={config.description}
        title={config.label}
      />
      <div className="space-y-4 p-4 sm:p-6">
        <TableToolbar
          filterLabel="Trạng thái"
          filterOptions={statusOptions}
          onSearchChange={setSearch}
          searchValue={search}
        />
        <ManagementTable
          columns={columns}
          emptyAction={
            <Button icon={Plus} onClick={() => setModalOpen(true)} variant="outline">
              Thêm nội dung
            </Button>
          }
          emptyDescription="Danh sách sẽ hiển thị sau khi có dữ liệu."
          emptyTitle="Chưa có nội dung."
        />
        <Pagination />
      </div>
      <Modal onClose={() => setModalOpen(false)} open={modalOpen} title={`Thêm ${config.label.toLowerCase()}`}>
        <ArticleForm contentType={config} />
      </Modal>
    </>
  );
}
