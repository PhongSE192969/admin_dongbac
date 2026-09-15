import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./Button.jsx";

export function Modal({ children, onClose, open, title }) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="presentation">
      <button aria-label="Đóng hộp thoại" className="absolute inset-0 bg-slate-950/45" onClick={onClose} type="button" />
      <section
        aria-modal="true"
        className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-md bg-white shadow-2xl"
        role="dialog"
      >
        <header className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <h2 className="text-lg font-bold text-slate-950">{title}</h2>
          <Button aria-label="Đóng" icon={X} onClick={onClose} size="icon" variant="ghost" />
        </header>
        <div className="max-h-[calc(90vh-64px)] overflow-y-auto p-4">{children}</div>
      </section>
    </div>
  );
}
