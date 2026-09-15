import { CONTENT_STATUSES } from "../../config/statuses.js";
import { CONTENT_TYPE_OPTIONS } from "../../data/contentTypes.js";
import { Button } from "../ui/Button.jsx";
import { FormSection, ImagePickerShell, SelectField, TextAreaField, TextInput } from "../ui/form.jsx";

const statusOptions = Object.entries(CONTENT_STATUSES).map(([value, config]) => ({
  value,
  label: config.label,
}));

export function ArticleForm({ contentType }) {
  return (
    <div className="grid gap-4">
      <FormSection title="Thông tin nội dung">
        <TextInput label="Tiêu đề" placeholder="Nhập tiêu đề" />
        <TextInput label="Slug" placeholder="nhap-slug" />
        <SelectField label="Loại nội dung" options={CONTENT_TYPE_OPTIONS} placeholder={contentType?.label ?? "Chọn loại nội dung"} />
        <TextAreaField label="Mô tả ngắn" placeholder="Nhập mô tả ngắn" rows={3} />
        <ImagePickerShell label="Ảnh đại diện" />
        <TextAreaField label="Nội dung" placeholder="Nhập nội dung" rows={7} />
      </FormSection>
      <FormSection title="SEO và trạng thái">
        <TextInput label="SEO Title" placeholder="Nhập SEO title" />
        <TextAreaField label="SEO Description" placeholder="Nhập SEO description" rows={3} />
        <SelectField label="Status" options={statusOptions} placeholder="Chọn trạng thái" />
      </FormSection>
      <div className="flex justify-end gap-2">
        <Button disabled variant="outline">
          Lưu
        </Button>
      </div>
    </div>
  );
}

export function ProductForm() {
  return (
    <div className="grid gap-4">
      <FormSection title="Thông tin sản phẩm">
        <TextInput label="Tên sản phẩm" placeholder="Nhập tên sản phẩm" />
        <TextInput label="Slug" placeholder="nhap-slug" />
        <SelectField label="Danh mục" options={[]} placeholder="Chọn danh mục" />
        <TextAreaField label="Mô tả ngắn" placeholder="Nhập mô tả ngắn" rows={3} />
        <ImagePickerShell label="Ảnh sản phẩm" />
        <TextAreaField label="Nội dung" placeholder="Nhập nội dung" rows={7} />
      </FormSection>
      <FormSection title="SEO và trạng thái">
        <TextInput label="SEO Title" placeholder="Nhập SEO title" />
        <TextAreaField label="SEO Description" placeholder="Nhập SEO description" rows={3} />
        <SelectField label="Status" options={statusOptions} placeholder="Chọn trạng thái" />
      </FormSection>
      <FormSection title="Related Products">
        <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-semibold text-slate-500">
          Chưa có dữ liệu.
        </div>
      </FormSection>
      <div className="flex justify-end gap-2">
        <Button disabled variant="outline">
          Lưu
        </Button>
      </div>
    </div>
  );
}

export function CategoryForm() {
  return (
    <div className="grid gap-4">
      <FormSection title="Thông tin danh mục">
        <TextInput label="Tên danh mục" placeholder="Nhập tên danh mục" />
        <TextInput label="Slug" placeholder="nhap-slug" />
        <TextAreaField label="Mô tả ngắn" placeholder="Nhập mô tả ngắn" rows={3} />
        <TextInput label="Icon" placeholder="Tên icon hoặc mã icon" />
        <ImagePickerShell label="Ảnh" />
        <TextInput label="Thứ tự" placeholder="Nhập thứ tự" type="number" />
        <SelectField
          label="Trạng thái"
          options={[
            { value: "ACTIVE", label: "Active" },
            { value: "INACTIVE", label: "Inactive" },
          ]}
          placeholder="Chọn trạng thái"
        />
      </FormSection>
      <div className="flex justify-end gap-2">
        <Button disabled variant="outline">
          Lưu
        </Button>
      </div>
    </div>
  );
}

export function BannerForm() {
  return (
    <div className="grid gap-4">
      <FormSection title="Nội dung banner">
        <ImagePickerShell label="Ảnh desktop" />
        <ImagePickerShell label="Ảnh mobile" />
        <TextInput label="Title" placeholder="Nhập title" />
        <TextAreaField label="Description" placeholder="Nhập description" rows={3} />
        <TextInput label="CTA" placeholder="Nhập CTA" />
        <TextInput label="Sort order" placeholder="Nhập thứ tự" type="number" />
        <SelectField
          label="Trạng thái"
          options={[
            { value: "ACTIVE", label: "Active" },
            { value: "INACTIVE", label: "Inactive" },
          ]}
          placeholder="Chọn trạng thái"
        />
      </FormSection>
      <div className="flex justify-end gap-2">
        <Button disabled variant="outline">
          Lưu
        </Button>
      </div>
    </div>
  );
}

export function PartnerForm() {
  return (
    <div className="grid gap-4">
      <FormSection title="Thông tin đối tác">
        <TextInput label="Name" placeholder="Nhập tên đối tác" />
        <ImagePickerShell label="Logo" />
        <TextInput label="Website" placeholder="Nhập website" />
        <TextInput label="Sort order" placeholder="Nhập thứ tự" type="number" />
        <SelectField
          label="Trạng thái"
          options={[
            { value: "ACTIVE", label: "Active" },
            { value: "INACTIVE", label: "Inactive" },
          ]}
          placeholder="Chọn trạng thái"
        />
      </FormSection>
      <div className="flex justify-end gap-2">
        <Button disabled variant="outline">
          Lưu
        </Button>
      </div>
    </div>
  );
}

export function StaffForm() {
  return (
    <div className="grid gap-4">
      <FormSection title="Thông tin nhân viên">
        <TextInput label="Họ tên" placeholder="Nhập họ tên" />
        <TextInput label="Email" placeholder="Nhập email" type="email" />
        <SelectField
          label="Role"
          options={[
            { value: "ADMIN", label: "ADMIN" },
            { value: "STAFF", label: "STAFF" },
          ]}
          placeholder="Chọn role"
        />
        <SelectField
          label="Trạng thái"
          options={[
            { value: "ACTIVE", label: "Active" },
            { value: "INACTIVE", label: "Inactive" },
          ]}
          placeholder="Chọn trạng thái"
        />
      </FormSection>
      <div className="flex justify-end gap-2">
        <Button disabled variant="outline">
          Lưu
        </Button>
      </div>
    </div>
  );
}
