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

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function contentBreadcrumbs<T extends { id: string; data: { title: string } }>(
  entries: T[], entry: T, section: "notes" | "beyond", lang: "en" | "zh",
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{
    label: section === "notes" ? (lang === "zh" ? "笔记" : "Notes") : "Beyond",
    href: contentUrl(section, "", lang),
  }];
  const segments = contentSlug(entry.id).split("/");
  for (let depth = 1; depth < segments.length; depth++) {
    const slug = segments.slice(0, depth).join("/");
    const parent = entries.find((candidate) => contentSlug(candidate.id) === slug);
    if (parent) items.push({ label: parent.data.title, href: contentUrl(section, parent.id, lang) });
  }
  items.push({ label: entry.data.title });
  return items;
}
