import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "../components/ui/Button.jsx";
import { EmptyState } from "../components/ui/EmptyState.jsx";
import { ImagePickerShell } from "../components/ui/form.jsx";
import { ManagementPageHeader } from "../components/ui/ManagementPageHeader.jsx";
import { Modal } from "../components/ui/Modal.jsx";
import { TableToolbar } from "../components/ui/TableToolbar.jsx";

export function MediaPage() {
  const [search, setSearch] = useState("");
  const [uploadOpen, setUploadOpen] = useState(false);

  return (
    <>
      <ManagementPageHeader
        actions={
          <Button icon={Upload} onClick={() => setUploadOpen(true)}>
            Upload
          </Button>
        }
        breadcrumb={[{ label: "Dashboard", to: "/dashboard" }, { label: "Media" }]}
        description="Thư viện media dùng cho hình ảnh và tài nguyên website."
        title="Media"
      />
      <div className="space-y-4 p-4 sm:p-6">
        <TableToolbar
          filterLabel="Loại tệp"
          filterOptions={[
            { value: "IMAGE", label: "Image" },
            { value: "DOCUMENT", label: "Document" },
          ]}
          onSearchChange={setSearch}
          searchValue={search}
        />
        <section className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
          <EmptyState title="Chưa có tệp media." />
        </section>
      </div>
      <Modal onClose={() => setUploadOpen(false)} open={uploadOpen} title="Upload media">
        <ImagePickerShell label="Tệp media" />
      </Modal>
    </>
  );
}
