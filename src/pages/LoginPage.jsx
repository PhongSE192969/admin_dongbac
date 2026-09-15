import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/Button.jsx";
import { ROLES } from "../config/permissions.js";
import { useAdminApp } from "../context/AdminAppContext.jsx";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { activatePreviewRole, isDevPreview, role } = useAdminApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (role) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate, role]);

  const previewAs = (nextRole) => {
    activatePreviewRole(nextRole);
    navigate("/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-md border border-slate-200 bg-white shadow-panel lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-brand-900 px-6 py-8 text-white sm:px-8">
          <div className="flex h-full min-h-64 flex-col justify-between gap-8">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-sm font-black text-brand-800">
                ĐB
              </div>
              <h1 className="mt-6 text-3xl font-black uppercase leading-tight">Đông Bắc Sài Gòn</h1>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-emerald-100">Quản trị hệ thống</p>
            </div>
            <p className="max-w-sm text-sm leading-6 text-emerald-50">Giữ trọn chữ Tín – Kiến tạo hành trình.</p>
          </div>
        </div>
        <div className="px-6 py-8 sm:px-10">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-wide text-brand-700">Đăng nhập</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">Bảng quản trị nội bộ</h2>
          </div>
          <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Email</span>
              <input
                autoComplete="email"
                className="h-11 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-900"
                type="email"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Mật khẩu</span>
              <span className="relative block">
                <input
                  autoComplete="current-password"
                  className="h-11 w-full rounded-md border border-slate-300 px-3 pr-12 text-sm text-slate-900"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"
                  onClick={() => setShowPassword((current) => !current)}
                  type="button"
                >
                  {showPassword ? <EyeOff aria-hidden="true" className="h-4 w-4" /> : <Eye aria-hidden="true" className="h-4 w-4" />}
                </button>
              </span>
            </label>
            <Button className="mt-2 w-full" type="submit">
              ĐĂNG NHẬP
            </Button>
          </form>

          {isDevPreview ? (
            <div className="mt-6 rounded-md border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-900">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                Xem giao diện với vai trò
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <Button onClick={() => previewAs(ROLES.ADMIN)} variant="outline">
                  ADMIN
                </Button>
                <Button onClick={() => previewAs(ROLES.STAFF)} variant="outline">
                  STAFF
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
