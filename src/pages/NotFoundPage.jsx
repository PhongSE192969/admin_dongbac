import { Link } from "react-router-dom";
import { SearchX } from "lucide-react";
import { Button } from "../components/ui/Button.jsx";

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-md border border-slate-200 bg-white p-6 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700">
          <SearchX aria-hidden="true" className="h-6 w-6" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-slate-950">404</h1>
        <p className="mt-2 text-sm text-slate-600">Không tìm thấy trang.</p>
        <Button as={Link} className="mt-5" to="/dashboard">
          Về Dashboard
        </Button>
      </div>
    </main>
  );
}
