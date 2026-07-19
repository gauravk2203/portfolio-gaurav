import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, getArticle } from "@/content/writing";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Writing" };
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <div className="pb-24 pt-[calc(var(--header-height)+2.5rem)]">
      <Container narrow>
        <Reveal>
          <Button asChild variant="ghost" size="sm" className="-ml-2 mb-8">
            <Link href="/writing">
              <ArrowLeft className="h-4 w-4" />
              All writing
            </Link>
          </Button>
          <p className="font-mono text-xs text-text-muted">
            {article.date} · {article.readingTime}
          </p>
          <h1 className="text-display mt-3 text-[clamp(2rem,4.5vw,3.25rem)] text-text-primary">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            {article.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary-muted px-2.5 py-0.5 font-mono text-[0.65rem] text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <article className="prose-ledger mt-12">
          {article.sections.map((section, i) => (
            <section key={section.title ?? i}>
              {section.title ? <h2>{section.title}</h2> : null}
              <p>{section.body}</p>
            </section>
          ))}
        </article>
      </Container>
    </div>
  );
}
