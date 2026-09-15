import {
  Archive,
  BookOpenText,
  Boxes,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  FileText,
  Gauge,
  History,
  Image,
  Layers3,
  Megaphone,
  Newspaper,
  Package,
  PanelTop,
  ScrollText,
  Settings,
  Sprout,
  Tags,
  UserCircle,
  Users,
} from "lucide-react";
import { ROLES } from "./permissions.js";

const ALL_ROLES = [ROLES.ADMIN, ROLES.STAFF];
const ADMIN_ONLY = [ROLES.ADMIN];

export const navigationSections = [
  {
    title: "DASHBOARD",
    items: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: Gauge,
        roles: ALL_ROLES,
      },
    ],
  },
  {
    title: "NỘI DUNG",
    items: [
      {
        label: "Bài viết",
        path: "/content/articles",
        icon: FileText,
        roles: ALL_ROLES,
      },
      {
        label: "Thông báo",
        path: "/content/announcements",
        icon: Megaphone,
        roles: ALL_ROLES,
      },
      {
        label: "Tuyển dụng",
        path: "/content/recruitment",
        icon: BriefcaseBusiness,
        roles: ALL_ROLES,
      },
      {
        label: "Tin tức",
        path: "/content/news",
        icon: Newspaper,
        roles: ALL_ROLES,
      },
      {
        label: "Tài liệu ngành phân bón",
        path: "/content/fertilizer-documents",
        icon: BookOpenText,
        roles: ALL_ROLES,
      },
      {
        label: "Kiến thức nông nghiệp",
        path: "/content/agricultural-knowledge",
        icon: Sprout,
        roles: ALL_ROLES,
      },
    ],
  },
  {
    title: "SẢN PHẨM",
    items: [
      {
        label: "Sản phẩm",
        path: "/products",
        icon: Package,
        roles: ALL_ROLES,
      },
      {
        label: "Danh mục",
        path: "/products/categories",
        icon: Tags,
        roles: ADMIN_ONLY,
      },
    ],
  },
  {
    title: "DUYỆT NỘI DUNG",
    items: [
      {
        label: "Duyệt nội dung",
        path: "/approvals",
        icon: ClipboardCheck,
        roles: ADMIN_ONLY,
      },
    ],
  },
  {
    title: "KHÁCH HÀNG",
    items: [
      {
        label: "Yêu cầu tư vấn",
        path: "/leads",
        icon: Users,
        roles: ALL_ROLES,
      },
    ],
  },
  {
    title: "MEDIA",
    items: [
      {
        label: "Media",
        path: "/media",
        icon: Image,
        roles: ALL_ROLES,
      },
    ],
  },
  {
    title: "WEBSITE",
    items: [
      {
        label: "Banner",
        path: "/website/banners",
        icon: PanelTop,
        roles: ADMIN_ONLY,
      },
      {
        label: "Đối tác",
        path: "/website/partners",
        icon: Building2,
        roles: ADMIN_ONLY,
      },
      {
        label: "Gia công – Sản xuất",
        path: "/website/manufacturing",
        icon: Layers3,
        roles: ADMIN_ONLY,
      },
      {
        label: "Cấu hình website",
        path: "/website/settings",
        icon: Settings,
        roles: ADMIN_ONLY,
      },
    ],
  },
  {
    title: "HỆ THỐNG",
    items: [
      {
        label: "Nhân viên",
        path: "/staff",
        icon: Archive,
        roles: ADMIN_ONLY,
      },
      {
        label: "Audit log",
        path: "/audit",
        icon: History,
        roles: ADMIN_ONLY,
      },
    ],
  },
  {
    title: "TÀI KHOẢN",
    items: [
      {
        label: "Hồ sơ cá nhân",
        path: "/profile",
        icon: UserCircle,
        roles: ALL_ROLES,
      },
    ],
  },
];

export function getVisibleNavigation(role) {
  return navigationSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => item.roles.includes(role)),
    }))
    .filter((section) => section.items.length > 0);
}

export function getNavigationItem(pathname) {
  return navigationSections.flatMap((section) => section.items).find((item) => item.path === pathname);
}
