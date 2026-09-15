import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
import { Button } from "../components/ui/Button.jsx";

export function ForbiddenPage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6">
      <div className="w-full max-w-md rounded-md border border-slate-200 bg-white p-6 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
          <ShieldAlert aria-hidden="true" className="h-6 w-6" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-slate-950">403</h1>
        <p className="mt-2 text-sm text-slate-600">Bạn không có quyền truy cập chức năng này.</p>
        <Button as={Link} className="mt-5" to="/dashboard">
          Về Dashboard
        </Button>
      </div>
    </section>
  );
}
