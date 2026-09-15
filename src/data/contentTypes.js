export const CONTENT_TYPES = {
  ARTICLES: {
    key: "ARTICLES",
    articleType: "ARTICLE",
    label: "Bài viết",
    description: "Quản lý nội dung bài viết chính của hệ thống.",
    path: "/content/articles",
  },
  ANNOUNCEMENTS: {
    key: "ANNOUNCEMENTS",
    articleType: "ANNOUNCEMENT",
    label: "Thông báo",
    description: "Chuẩn bị danh sách thông báo cho website.",
    path: "/content/announcements",
  },
  RECRUITMENT: {
    key: "RECRUITMENT",
    articleType: "RECRUITMENT",
    label: "Tuyển dụng",
    description: "Quản lý nội dung tuyển dụng.",
    path: "/content/recruitment",
  },
  NEWS: {
    key: "NEWS",
    articleType: "NEWS",
    label: "Tin tức",
    description: "Quản lý tin tức doanh nghiệp.",
    path: "/content/news",
  },
  FERTILIZER_DOCUMENTS: {
    key: "FERTILIZER_DOCUMENTS",
    articleType: "FERTILIZER_DOCUMENT",
    label: "Tài liệu ngành phân bón",
    description: "Chuẩn bị thư viện tài liệu ngành phân bón.",
    path: "/content/fertilizer-documents",
  },
  AGRICULTURAL_KNOWLEDGE: {
    key: "AGRICULTURAL_KNOWLEDGE",
    articleType: "AGRICULTURAL_KNOWLEDGE",
    label: "Kiến thức nông nghiệp",
    description: "Quản lý nội dung kiến thức nông nghiệp.",
    path: "/content/agricultural-knowledge",
  },
};

export const CONTENT_TYPE_OPTIONS = [
  { value: "ANNOUNCEMENT", label: "Thông báo" },
  { value: "RECRUITMENT", label: "Tuyển dụng" },
  { value: "NEWS", label: "Tin tức" },
  { value: "FERTILIZER_DOCUMENT", label: "Tài liệu ngành phân bón" },
  { value: "AGRICULTURAL_KNOWLEDGE", label: "Kiến thức nông nghiệp" },
];
