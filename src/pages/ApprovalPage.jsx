import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "../components/ui/Button.jsx";
import { ManagementPageHeader } from "../components/ui/ManagementPageHeader.jsx";
import { ManagementTable } from "../components/ui/ManagementTable.jsx";
import { Modal } from "../components/ui/Modal.jsx";
import { Pagination } from "../components/ui/Pagination.jsx";
import { TextAreaField } from "../components/ui/form.jsx";

const columns = [
  { key: "type", label: "Loại nội dung" },
  { key: "title", label: "Tiêu đề" },
  { key: "status", label: "Trạng thái" },
  { key: "submittedBy", label: "Người gửi" },
  { key: "actions", label: "Thao tác" },
];

const tabs = ["Tất cả", "Bài viết", "Sản phẩm"];

export function ApprovalPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [rejectOpen, setRejectOpen] = useState(false);

  return (
    <>
      <ManagementPageHeader
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Duyệt nội dung" }]}
        description="Trung tâm duyệt, từ chối, xuất bản và hủy xuất bản nội dung dành cho ADMIN."
        title="Duyệt nội dung"
      />
      <div className="space-y-4 p-4 sm:p-6">
        <section className="rounded-md border border-slate-200 bg-white p-3 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="tablist">
              {tabs.map((tab) => (
                <button
                  aria-selected={activeTab === tab}
                  className={`h-9 rounded-md px-3 text-sm font-bold transition-colors ${
                    activeTab === tab ? "bg-brand-700 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button disabled icon={Check} variant="primary">
                DUYỆT
              </Button>
              <Button icon={X} onClick={() => setRejectOpen(true)} variant="danger">
                TỪ CHỐI
              </Button>
            </div>
          </div>
        </section>
        <ManagementTable
          columns={columns}
          emptyDescription={`Tab đang chọn: ${activeTab}`}
          emptyTitle="Không có nội dung chờ duyệt."
        />
        <Pagination />
      </div>
      <Modal onClose={() => setRejectOpen(false)} open={rejectOpen} title="Từ chối nội dung">
        <div className="grid gap-4">
          <TextAreaField label="Lý do từ chối" placeholder="Nhập lý do từ chối" rows={5} />
          <div className="flex justify-end gap-2">
            <Button disabled variant="danger">
              TỪ CHỐI
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
