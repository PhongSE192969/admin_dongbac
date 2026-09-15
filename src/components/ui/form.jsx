import { ImagePlus } from "lucide-react";
import { Button } from "./Button.jsx";

export function Field({ children, description, error, label, required }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-slate-700">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </span>
      {children}
      {description ? <span className="mt-1 block text-xs leading-5 text-slate-500">{description}</span> : null}
      {error ? <span className="mt-1 block text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}

export function TextInput({ label, placeholder = "", required = false, type = "text", ...props }) {
  return (
    <Field label={label} required={required}>
      <input
        className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400"
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </Field>
  );
}

export function TextAreaField({ label, placeholder = "", rows = 4, ...props }) {
  return (
    <Field label={label}>
      <textarea
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm leading-6 text-slate-900 placeholder:text-slate-400"
        placeholder={placeholder}
        rows={rows}
        {...props}
      />
    </Field>
  );
}

export function SelectField({ label, options, placeholder = "Tất cả", ...props }) {
  return (
    <Field label={label}>
      <select className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900" defaultValue="" {...props}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Field>
  );
}

export function CheckboxField({ label, ...props }) {
  return (
    <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
      <input className="h-4 w-4 rounded border-slate-300 text-brand-700" type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
}

export function SwitchField({ checked = false, label, ...props }) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-md border border-slate-200 bg-white p-3 text-sm font-semibold text-slate-700">
      <span>{label}</span>
      <input checked={checked} className="sr-only" type="checkbox" {...props} />
      <span
        aria-hidden="true"
        className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${checked ? "bg-brand-700" : "bg-slate-300"}`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${checked ? "translate-x-6" : "translate-x-1"}`}
        />
      </span>
    </label>
  );
}

export function ImagePickerShell({ label = "Ảnh", supportingText = "Chưa chọn tệp." }) {
  return (
    <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-800">{label}</p>
          <p className="mt-1 text-sm text-slate-500">{supportingText}</p>
        </div>
        <Button icon={ImagePlus} variant="outline">
          Chọn ảnh
        </Button>
      </div>
    </div>
  );
}

export function FormSection({ children, description, title }) {
  return (
    <section className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-bold text-slate-950">{title}</h2>
        {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
      </div>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}
