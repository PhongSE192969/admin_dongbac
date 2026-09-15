import { ManagementPageHeader } from "../../components/ui/ManagementPageHeader.jsx";
import { FormSection, ImagePickerShell, SelectField, TextAreaField, TextInput } from "../../components/ui/form.jsx";
import { Button } from "../../components/ui/Button.jsx";

export function ManufacturingPage() {
  return (
    <>
      <ManagementPageHeader
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Website" }, { label: "Gia công – Sản xuất" }]}
        description="Nội dung giới thiệu năng lực gia công và sản xuất."
        title="Gia công – Sản xuất"
      />
      <div className="grid gap-4 p-4 sm:p-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="grid gap-4">
          <FormSection title="Nội dung chính">
            <TextInput label="Tiêu đề" placeholder="Nhập tiêu đề" />
            <TextAreaField label="Mô tả ngắn" placeholder="Nhập mô tả ngắn" rows={3} />
            <TextAreaField label="Nội dung" placeholder="Nhập nội dung" rows={10} />
            <SelectField
              label="Trạng thái"
              options={[
                { value: "DRAFT", label: "Bản nháp" },
                { value: "PUBLISHED", label: "Đã xuất bản" },
              ]}
              placeholder="Chọn trạng thái"
            />
          </FormSection>
          <FormSection title="Media">
            <ImagePickerShell label="Ảnh đại diện" />
            <ImagePickerShell label="Video / media" supportingText="Chưa chọn tệp." />
          </FormSection>
        </div>
        <aside className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-base font-bold text-slate-950">Khu vực tài liệu</h2>
          <div className="mt-4 rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-semibold text-slate-500">
            Chưa có dữ liệu.
          </div>
          <Button className="mt-4 w-full" disabled variant="outline">
            Lưu
          </Button>
        </aside>
      </div>
    </>
  );
}
