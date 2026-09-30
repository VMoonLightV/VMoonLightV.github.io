export function contentSlug(id: string): string {
  return id.replace(/\/index$/, "");
}

export function directContentChildren<T extends { id: string }>(entries: T[], parentSlug = ""): T[] {
  return entries
    .filter((entry) => {
      const slug = contentSlug(entry.id);
      const parent = slug.slice(0, Math.max(0, slug.lastIndexOf("/")));
      return slug !== parentSlug && parent === parentSlug;
    })
    .sort((a, b) => a.id.localeCompare(b.id));
}

export function contentUrl(section: "notes" | "beyond", id: string, lang: "en" | "zh"): string {
  const slug = contentSlug(id);
  return `/${lang === "zh" ? "zh/" : ""}${section}/${slug ? `${slug}/` : ""}`;
}
