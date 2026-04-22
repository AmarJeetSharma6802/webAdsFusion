function normalizeString(value) {
  return typeof value === "string" ? value.trim() : "";
}

export function createBlogSlug(heading) {
  return normalizeString(heading).toLowerCase().replace(/\s+/g, "-");
}

export function normalizeBlogString(value) {
  return normalizeString(value);
}
