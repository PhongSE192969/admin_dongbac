import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./Button.jsx";

export function Drawer({ children, onClose, open, title }) {
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
    <div className="fixed inset-0 z-50" role="presentation">
      <button aria-label="Đóng ngăn kéo" className="absolute inset-0 bg-slate-950/45" onClick={onClose} type="button" />
      <aside
        aria-modal="true"
        className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-white shadow-2xl"
        role="dialog"
      >
        <header className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <h2 className="text-lg font-bold text-slate-950">{title}</h2>
          <Button aria-label="Đóng" icon={X} onClick={onClose} size="icon" variant="ghost" />
        </header>
        <div className="min-h-0 flex-1 overflow-y-auto p-4">{children}</div>
      </aside>
    </div>
  );
}
