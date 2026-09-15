import { useState } from "react";
import { PanelRightOpen } from "lucide-react";
import { Button } from "../components/ui/Button.jsx";
import { Drawer } from "../components/ui/Drawer.jsx";
import { ManagementPageHeader } from "../components/ui/ManagementPageHeader.jsx";
import { ManagementTable } from "../components/ui/ManagementTable.jsx";
import { Pagination } from "../components/ui/Pagination.jsx";
import { TableToolbar } from "../components/ui/TableToolbar.jsx";
import { FormSection, SelectField, TextAreaField, TextInput } from "../components/ui/form.jsx";
import { LEAD_STATUSES } from "../config/statuses.js";

const columns = [
  { key: "customer", label: "Khách hàng" },
  { key: "phone", label: "Số điện thoại" },
  { key: "email", label: "Email" },
  { key: "source", label: "Nguồn" },
  { key: "status", label: "Trạng thái" },
  { key: "sentAt", label: "Ngày gửi" },
  { key: "owner", label: "Người xử lý" },
  { key: "actions", label: "Action" },
];

const leadStatusOptions = Object.entries(LEAD_STATUSES).map(([value, label]) => ({ value, label }));

export function LeadsPage() {
  const [search, setSearch] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <ManagementPageHeader
        actions={
          <Button icon={PanelRightOpen} onClick={() => setDrawerOpen(true)} variant="outline">
            Mở chi tiết
          </Button>
        }
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Khách hàng" }, { label: "Yêu cầu tư vấn" }]}
        description="Quản lý yêu cầu tư vấn, trạng thái chăm sóc và ghi chú nội bộ."
        title="Yêu cầu tư vấn"
      />
      <div className="space-y-4 p-4 sm:p-6">
        <TableToolbar filterLabel="Trạng thái" filterOptions={leadStatusOptions} onSearchChange={setSearch} searchValue={search} />
        <ManagementTable
          columns={columns}
          emptyDescription="Yêu cầu tư vấn sẽ hiển thị sau khi có dữ liệu."
          emptyTitle="Chưa có khách tư vấn."
        />
        <Pagination />
      </div>
      <Drawer onClose={() => setDrawerOpen(false)} open={drawerOpen} title="Chi tiết yêu cầu tư vấn">
        <div className="grid gap-4">
          <FormSection title="Thông tin khách hàng">
            <TextInput label="Khách hàng" placeholder="Tên khách hàng" />
            <TextInput label="Số điện thoại" placeholder="Số điện thoại" />
            <TextInput label="Email" placeholder="Email" type="email" />
            <TextInput label="Nguồn" placeholder="Nguồn gửi yêu cầu" />
          </FormSection>
          <FormSection title="Chăm sóc khách hàng">
            <SelectField label="Trạng thái" options={leadStatusOptions} placeholder="Chọn trạng thái" />
            <TextAreaField label="Message" placeholder="Nội dung khách gửi" rows={4} />
            <TextAreaField label="Internal notes" placeholder="Ghi chú chăm sóc khách" rows={4} />
          </FormSection>
        </div>
      </Drawer>
    </>
  );
}
