import { ManagementPageHeader } from "../../components/ui/ManagementPageHeader.jsx";
import { FormSection, ImagePickerShell, TextInput } from "../../components/ui/form.jsx";
import { Button } from "../../components/ui/Button.jsx";

export function SiteSettingsPage() {
  return (
    <>
      <ManagementPageHeader
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Website" }, { label: "Cấu hình website" }]}
        description="Cấu hình thương hiệu, liên hệ, mạng xã hội và nội dung trang liên hệ."
        title="Cấu hình website"
      />
      <div className="grid gap-4 p-4 sm:p-6 xl:grid-cols-2">
        <FormSection title="THƯƠNG HIỆU">
          <TextInput label="Tên công ty" placeholder="Nhập tên công ty" />
          <TextInput label="Slogan" placeholder="Nhập slogan" />
          <ImagePickerShell label="Logo" />
          <ImagePickerShell label="Favicon" />
        </FormSection>
        <FormSection title="LIÊN HỆ">
          <TextInput label="Phone" placeholder="Nhập phone" />
          <TextInput label="Email" placeholder="Nhập email" type="email" />
          <TextInput label="Website" placeholder="Nhập website" />
          <TextInput label="Office address" placeholder="Nhập office address" />
          <TextInput label="Factory address" placeholder="Nhập factory address" />
          <TextInput label="Tax code" placeholder="Nhập tax code" />
        </FormSection>
        <FormSection title="SOCIAL">
          <TextInput label="Facebook" placeholder="Nhập Facebook" />
          <TextInput label="TikTok" placeholder="Nhập TikTok" />
          <TextInput label="Zalo" placeholder="Nhập Zalo" />
          <TextInput label="LinkedIn" placeholder="Nhập LinkedIn" />
          <TextInput label="YouTube" placeholder="Nhập YouTube" />
          <TextInput label="WhatsApp" placeholder="Nhập WhatsApp" />
        </FormSection>
        <FormSection title="CONTACT PAGE">
          <ImagePickerShell label="Hero image" />
          <TextInput label="Company video" placeholder="Nhập company video" />
          <TextInput label="Map embed" placeholder="Nhập map embed" />
          <div className="flex justify-end">
            <Button disabled variant="outline">
              Lưu cấu hình
            </Button>
          </div>
        </FormSection>
      </div>
    </>
  );
}
