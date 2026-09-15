import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AdminLayout } from "./components/layout/AdminLayout.jsx";
import { ROLES, hasAnyRole } from "./config/permissions.js";
import { CONTENT_TYPES } from "./data/contentTypes.js";
import { useAdminApp } from "./context/AdminAppContext.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";
import { ContentManagementPage } from "./pages/content/ContentManagementPage.jsx";
import { ProductsPage } from "./pages/ProductsPage.jsx";
import { CategoriesPage } from "./pages/CategoriesPage.jsx";
import { MediaPage } from "./pages/MediaPage.jsx";
import { ApprovalPage } from "./pages/ApprovalPage.jsx";
import { LeadsPage } from "./pages/LeadsPage.jsx";
import { BannersPage } from "./pages/website/BannersPage.jsx";
import { PartnersPage } from "./pages/website/PartnersPage.jsx";
import { ManufacturingPage } from "./pages/website/ManufacturingPage.jsx";
import { SiteSettingsPage } from "./pages/website/SiteSettingsPage.jsx";
import { StaffPage } from "./pages/StaffPage.jsx";
import { AuditPage } from "./pages/AuditPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { ForbiddenPage } from "./pages/ForbiddenPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

const ALL_ROLES = [ROLES.ADMIN, ROLES.STAFF];
const ADMIN_ONLY = [ROLES.ADMIN];

function RequireRole({ allowedRoles = ALL_ROLES, children }) {
  const { role } = useAdminApp();
  const location = useLocation();

  if (!role) {
    return <Navigate replace state={{ from: location }} to="/login" />;
  }

  if (!hasAnyRole(role, allowedRoles)) {
    return <ForbiddenPage />;
  }

  return children;
}

export default function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/login" />
      <Route element={<Navigate replace to="/dashboard" />} path="/" />
      <Route
        element={
          <RequireRole>
            <AdminLayout />
          </RequireRole>
        }
      >
        <Route element={<DashboardPage />} path="/dashboard" />
        <Route element={<ContentManagementPage config={CONTENT_TYPES.ARTICLES} />} path="/content/articles" />
        <Route element={<ContentManagementPage config={CONTENT_TYPES.ANNOUNCEMENTS} />} path="/content/announcements" />
        <Route element={<ContentManagementPage config={CONTENT_TYPES.RECRUITMENT} />} path="/content/recruitment" />
        <Route element={<ContentManagementPage config={CONTENT_TYPES.NEWS} />} path="/content/news" />
        <Route
          element={<ContentManagementPage config={CONTENT_TYPES.FERTILIZER_DOCUMENTS} />}
          path="/content/fertilizer-documents"
        />
        <Route
          element={<ContentManagementPage config={CONTENT_TYPES.AGRICULTURAL_KNOWLEDGE} />}
          path="/content/agricultural-knowledge"
        />
        <Route element={<ProductsPage />} path="/products" />
        <Route
          element={
            <RequireRole allowedRoles={ADMIN_ONLY}>
              <CategoriesPage />
            </RequireRole>
          }
          path="/products/categories"
        />
        <Route element={<MediaPage />} path="/media" />
        <Route
          element={
            <RequireRole allowedRoles={ADMIN_ONLY}>
              <ApprovalPage />
            </RequireRole>
          }
          path="/approvals"
        />
        <Route element={<LeadsPage />} path="/leads" />
        <Route
          element={
            <RequireRole allowedRoles={ADMIN_ONLY}>
              <BannersPage />
            </RequireRole>
          }
          path="/website/banners"
        />
        <Route
          element={
            <RequireRole allowedRoles={ADMIN_ONLY}>
              <PartnersPage />
            </RequireRole>
          }
          path="/website/partners"
        />
        <Route
          element={
            <RequireRole allowedRoles={ADMIN_ONLY}>
              <ManufacturingPage />
            </RequireRole>
          }
          path="/website/manufacturing"
        />
        <Route
          element={
            <RequireRole allowedRoles={ADMIN_ONLY}>
              <SiteSettingsPage />
            </RequireRole>
          }
          path="/website/settings"
        />
        <Route
          element={
            <RequireRole allowedRoles={ADMIN_ONLY}>
              <StaffPage />
            </RequireRole>
          }
          path="/staff"
        />
        <Route
          element={
            <RequireRole allowedRoles={ADMIN_ONLY}>
              <AuditPage />
            </RequireRole>
          }
          path="/audit"
        />
        <Route element={<ProfilePage />} path="/profile" />
        <Route element={<ForbiddenPage />} path="/403" />
      </Route>
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
}
