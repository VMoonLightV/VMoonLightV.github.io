export function contentSlug(id: string): string {
  return id.replace(/\/index$/, '');
}

export function contentUrl(section: 'notes' | 'looking', id: string, lang: 'en' | 'zh'): string {
  const slug = contentSlug(id);
  return `/${lang === 'zh' ? 'zh/' : ''}${section}/${slug ? `${slug}/` : ''}`;
}
