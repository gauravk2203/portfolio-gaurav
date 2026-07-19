export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  sections: { title?: string; body: string }[];
};

/**
 * No fictional essays. Writing is hidden from primary nav.
 * Empty list → writing index shows an honest “coming later” state.
 */
export const articles: Article[] = [];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
