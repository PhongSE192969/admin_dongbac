import { ManagementPageHeader } from "../components/ui/ManagementPageHeader.jsx";
import { Button } from "../components/ui/Button.jsx";
import { FormSection, TextInput } from "../components/ui/form.jsx";
import { useAdminApp } from "../context/AdminAppContext.jsx";

export function ProfilePage() {
  const { role } = useAdminApp();

  return (
    <>
      <ManagementPageHeader
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Tài khoản" }, { label: "Hồ sơ cá nhân" }]}
        description="Thông tin hồ sơ người dùng nội bộ."
        title="Hồ sơ cá nhân"
      />
      <div className="grid gap-4 p-4 sm:p-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <FormSection title="Thông tin cá nhân">
          <TextInput label="Tên người dùng" placeholder="Nhập tên người dùng" />
          <TextInput label="Email" placeholder="Nhập email" type="email" />
          <TextInput label="Role" placeholder={role} readOnly />
          <div className="flex justify-end">
            <Button disabled variant="outline">
              Lưu
            </Button>
          </div>
        </FormSection>
        <aside className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Role badge</p>
          <p className="mt-3 inline-flex rounded-full bg-brand-50 px-3 py-1 text-sm font-black text-brand-700">{role}</p>
        </aside>
      </div>
    </>
  );
}
