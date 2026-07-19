import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import {
  getAdjacentProjects,
  getProject,
  projects,
  type Project,
} from "@/content/projects";
import { projectJsonLd } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const layout =
    project.layout ??
    (project.overview?.length || project.features?.length
      ? "product"
      : "default");

  return (
    <div className="pb-24 pt-[calc(var(--header-height)+2.5rem)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd(project)),
        }}
      />

      <Container>
        <Reveal>
          <Button asChild variant="ghost" size="sm" className="-ml-2 mb-8">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              All work
            </Link>
          </Button>

          {/* Title and media are separate so neither competes for focus */}
          <header className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {project.year} · {project.role} · {project.timeline}
            </p>
            <h1 className="text-display mt-4 text-[clamp(2.25rem,5vw,3.75rem)] text-text-primary">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-text-secondary">
              {project.summary}
            </p>
            <ProjectLinks project={project} />
          </header>

          {project.coverImage ? (
            <figure className="mt-10 overflow-hidden rounded-[var(--radius-xl)] border border-border-default bg-surface-1 shadow-[var(--shadow-md)]">
              <div className="relative aspect-[16/10] w-full md:aspect-[16/9]">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} product screenshot`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1200px) 100vw, 1152px"
                />
              </div>
              <figcaption className="border-t border-border-subtle px-4 py-3 font-mono text-[0.7rem] text-text-muted md:px-5">
                {project.cover.label} · preview
              </figcaption>
            </figure>
          ) : (
            <div
              className="mt-10 h-32 rounded-[var(--radius-xl)] border border-border-default md:h-40"
              style={{ background: project.cover.gradient }}
              aria-hidden
            />
          )}
        </Reveal>

        <div
          className={cn(
            "mt-10 grid gap-4",
            project.metrics.length >= 4
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : "sm:grid-cols-3",
          )}
        >
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-[var(--radius-lg)] border border-border-default bg-surface-1 p-5 text-center"
            >
              <p className="font-display text-3xl text-accent">{m.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-text-muted">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-md bg-secondary-muted px-2.5 py-1 font-mono text-xs text-secondary"
            >
              {t}
            </span>
          ))}
        </div>

        {layout === "showcase" ? (
          <ShowcaseCaseStudy project={project} />
        ) : layout === "product" ? (
          <DeepCaseStudy project={project} />
        ) : (
          <article className="prose-ledger mt-16">
            <section>
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </section>
            <section>
              <h2>Approach</h2>
              <p>{project.approach}</p>
            </section>
            <section>
              <h2>Impact</h2>
              <p>{project.impact}</p>
            </section>
            {project.sections.map((s) => (
              <section key={s.title}>
                <h2>{s.title}</h2>
                {s.body ? <p>{s.body}</p> : null}
                {s.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                {s.bullets ? (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
            <section>
              <h2>Architecture</h2>
              <ul>
                {project.architecture.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Challenges</h2>
              <ul>
                {project.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Lessons</h2>
              <ul>
                {project.lessons.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </section>
          </article>
        )}

        <nav
          className="mt-20 flex flex-col gap-4 border-t border-border-subtle pt-10 sm:flex-row sm:justify-between"
          aria-label="Adjacent projects"
        >
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group rounded-[var(--radius-lg)] border border-border-default bg-surface-1 p-5 transition-colors hover:border-accent/40 sm:max-w-sm"
            >
              <span className="flex items-center gap-2 text-xs text-text-muted">
                <ArrowLeft className="h-3.5 w-3.5" /> Previous
              </span>
              <span className="mt-2 block text-text-primary group-hover:text-accent">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group rounded-[var(--radius-lg)] border border-border-default bg-surface-1 p-5 text-right transition-colors hover:border-accent/40 sm:max-w-sm"
            >
              <span className="flex items-center justify-end gap-2 text-xs text-text-muted">
                Next <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="mt-2 block text-text-primary group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          ) : null}
        </nav>

        <div className="mt-12 rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-8 text-center">
          <p className="text-text-secondary">
            Interested in full-stack product work like this?
          </p>
          <Button asChild className="mt-4">
            <Link href="/contact">
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}

function ShowcaseCaseStudy({ project }: { project: Project }) {
  const featured =
    project.showcaseChallenges?.filter((c) => c.featured) ?? [];
  const gallery =
    project.showcaseChallenges?.filter((c) => !c.featured) ?? [];

  return (
    <div className="mt-14 space-y-16">
      {/* Concise intro — ~30% text */}
      {project.overview?.length ? (
        <section className="mx-auto max-w-2xl text-center">
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            Overview
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-secondary md:text-base">
            {project.overview.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Image-first featured challenges */}
      {featured.length > 0 ? (
        <section>
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-display text-2xl text-text-primary md:text-3xl">
                Featured challenges
              </h2>
              <p className="mt-2 max-w-xl text-sm text-text-muted">
                Selected builds that best show layout craft, interaction, and
                responsive design.
              </p>
            </div>
            <p className="font-mono text-xs text-text-muted">
              {project.showcaseChallenges?.length ?? 0} total in repo
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((challenge) => (
              <ChallengeCard key={challenge.title} challenge={challenge} large />
            ))}
          </div>
        </section>
      ) : null}

      {gallery.length > 0 ? (
        <section>
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            Full collection
          </h2>
          <p className="mt-2 max-w-xl text-sm text-text-muted">
            Remaining challenges from the same repository.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((challenge) => (
              <ChallengeCard key={challenge.title} challenge={challenge} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Compact supporting narrative */}
      <div className="grid gap-10 lg:grid-cols-12">
        <section className="lg:col-span-5">
          <h2 className="text-display text-xl text-text-primary md:text-2xl">
            Why this repository
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
            {project.problem}
          </p>
          {project.whyBuilt?.length ? (
            <ul className="mt-5 space-y-2">
              {project.whyBuilt.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-sm text-text-secondary before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        {project.skillObjectives?.length ? (
          <section className="lg:col-span-7">
            <h2 className="text-display text-xl text-text-primary md:text-2xl">
              Learning focus
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {project.skillObjectives.map((group) => (
                <div
                  key={group.label}
                  className="rounded-[var(--radius-lg)] border border-border-default bg-surface-1 p-4"
                >
                  <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                    {group.label}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs leading-relaxed text-text-secondary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {project.architectureDiagram ? (
          <section className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6">
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
              Development workflow
            </h2>
            <pre className="mt-4 overflow-x-auto font-mono text-xs leading-relaxed text-secondary">
              {project.architectureDiagram}
            </pre>
          </section>
        ) : null}

        <section className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6">
          <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
            Skills developed
          </h2>
          <ul className="mt-4 space-y-2">
            {project.lessons.map((l) => (
              <li
                key={l}
                className="relative pl-4 text-sm text-text-secondary before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent"
              >
                {l}
              </li>
            ))}
          </ul>
          {project.techGroups?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techGroups.flatMap((g) =>
                g.items.map((item) => (
                  <span
                    key={`${g.label}-${item}`}
                    className="rounded-md bg-secondary-muted px-2 py-1 font-mono text-[0.65rem] text-secondary"
                  >
                    {item}
                  </span>
                )),
              )}
            </div>
          ) : null}
        </section>
      </div>

      {project.repositoryNote ? (
        <section className="rounded-[var(--radius-xl)] border border-border-default bg-surface-0 p-6 md:p-8">
          <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
            Repository
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-secondary">
            {project.repositoryNote}
          </p>
          {project.links.github ? (
            <Button asChild variant="outline" size="sm" className="mt-5">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}

function ChallengeCard({
  challenge,
  large = false,
}: {
  challenge: NonNullable<Project["showcaseChallenges"]>[number];
  large?: boolean;
}) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[var(--radius-xl)] border border-border-default bg-surface-1 transition-colors hover:border-accent/35",
        large && "sm:min-h-[320px]",
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden bg-surface-0",
          large ? "aspect-[16/11]" : "aspect-[16/10]",
        )}
      >
        {challenge.image ? (
          <Image
            src={challenge.image}
            alt={`${challenge.title} — Frontend Mentor challenge`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes={
              large
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(145deg, #171a22 0%, #101218 50%, #1a1612 100%)",
            }}
            aria-hidden
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg text-text-primary">{challenge.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {challenge.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {challenge.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md bg-secondary-muted px-2 py-0.5 font-mono text-[0.65rem] text-secondary"
            >
              {skill}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          {challenge.source ? (
            <a
              href={challenge.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-accent transition-colors hover:text-accent-hover"
            >
              Source
              <ExternalLink className="h-3 w-3" aria-hidden />
            </a>
          ) : null}
          {challenge.live ? (
            <a
              href={challenge.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-accent transition-colors hover:text-accent-hover"
            >
              Live demo
              <ExternalLink className="h-3 w-3" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {project.links.live ? (
        <Button asChild size="sm">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      ) : null}
      {project.links.github ? (
        <Button asChild variant="outline" size="sm">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      ) : null}
      {project.links.docs ? (
        <Button asChild variant="secondary" size="sm">
          <a
            href={project.links.docs}
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      ) : null}
    </div>
  );
}

function DeepCaseStudy({ project }: { project: Project }) {
  return (
    <div className="mt-16 space-y-16">
      {project.overview?.length ? (
        <section className="max-w-3xl">
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            Overview
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary md:text-lg">
            {project.overview.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </section>
      ) : null}

      <section className="max-w-3xl">
        <h2 className="text-display text-2xl text-text-primary md:text-3xl">
          The problem
        </h2>
        <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
          {project.problem}
        </p>
      </section>

      {project.solutionSteps?.length ? (
        <section className="max-w-3xl">
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            Solution
          </h2>
          <p className="mt-4 text-text-secondary">{project.approach}</p>
          <ol className="mt-6 space-y-3">
            {project.solutionSteps.map((step, i) => (
              <li key={step} className="flex gap-3 text-text-secondary">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {project.contributions?.length ? (
        <section className="max-w-3xl">
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            My contributions
          </h2>
          <p className="mt-4 text-sm text-text-muted">
            Team research project; full software implementation owned end to end.
          </p>
          <ul className="mt-6 space-y-2">
            {project.contributions.map((c) => (
              <li
                key={c}
                className="relative pl-4 text-text-secondary before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.goals?.length ? (
        <section className="max-w-3xl">
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            Goals
          </h2>
          <ul className="mt-6 space-y-2">
            {project.goals.map((g) => (
              <li
                key={g}
                className="relative pl-4 text-text-secondary before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent"
              >
                {g}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.features?.length ? (
        <section>
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            Core features
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {project.features.map((f) => (
              <article
                key={f.title}
                className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6"
              >
                <h3 className="text-lg text-text-primary">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {f.body}
                </p>
                {f.bullets?.length ? (
                  <ul className="mt-4 space-y-1.5">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="relative pl-3.5 text-sm text-text-muted before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-1.5 before:bg-accent"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {project.visuals?.length ? (
        <section>
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            Product surfaces
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-text-muted">
            Selected screens from the live product.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {project.visuals.map((visual) => (
              <figure
                key={visual.src}
                className="overflow-hidden rounded-[var(--radius-xl)] border border-border-default bg-surface-1"
              >
                <div className="relative aspect-[16/10] w-full bg-surface-0">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="border-t border-border-subtle px-4 py-3 text-sm text-text-secondary">
                  {visual.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section>
        <h2 className="text-display text-2xl text-text-primary md:text-3xl">
          {project.architectureDiagram
            ? "Verification workflow"
            : "Technical architecture"}
        </h2>
        {!project.solutionSteps?.length ? (
          <p className="mt-4 max-w-3xl text-text-secondary">{project.approach}</p>
        ) : null}
        {project.architectureDiagram ? (
          <pre className="mt-8 overflow-x-auto rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6 font-mono text-xs leading-relaxed text-secondary md:text-sm">
            {project.architectureDiagram}
          </pre>
        ) : null}
        <h3 className="mt-10 text-lg text-text-primary">
          Technical architecture
        </h3>
        <ul className="mt-4 max-w-3xl space-y-2">
          {project.architecture.map((a) => (
            <li
              key={a}
              className="relative pl-4 text-sm text-text-secondary before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent"
            >
              {a}
            </li>
          ))}
        </ul>
      </section>

      {project.techGroups?.length ? (
        <section>
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            Technology stack
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.techGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-5"
              >
                <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  {group.label}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-xs text-text-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {project.engineeringDecisions?.length ? (
        <section className="max-w-3xl">
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            Engineering decisions
          </h2>
          <ul className="mt-6 space-y-4">
            {project.engineeringDecisions.map((d) => (
              <li
                key={d.slice(0, 40)}
                className="border-l-2 border-accent/50 pl-4 text-text-secondary"
              >
                {d}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.securityLayers?.length ? (
        <section>
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            Security design
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.securityLayers.map((layer) => (
              <div
                key={layer.label}
                className="rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-5"
              >
                <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  {layer.label}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {layer.items.map((item) => (
                    <li key={item} className="text-sm text-text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {project.researchNotes?.length ? (
        <section className="max-w-3xl">
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            Research contribution
          </h2>
          <ul className="mt-6 space-y-2">
            {project.researchNotes.map((note) => (
              <li
                key={note}
                className="relative pl-4 text-text-secondary before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent"
              >
                {note}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="max-w-3xl">
        <h2 className="text-display text-2xl text-text-primary md:text-3xl">
          Challenges
        </h2>
        <ul className="mt-6 space-y-4">
          {project.challenges.map((c) => (
            <li
              key={c.slice(0, 40)}
              className="relative pl-4 text-text-secondary before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-3xl">
        <h2 className="text-display text-2xl text-text-primary md:text-3xl">
          Impact
        </h2>
        <p className="mt-4 text-text-secondary">{project.impact}</p>
        {project.sections.map((s) => (
          <div key={s.title} className="mt-6">
            <h3 className="text-lg text-text-primary">{s.title}</h3>
            {s.body ? (
              <p className="mt-2 text-text-secondary">{s.body}</p>
            ) : null}
          </div>
        ))}
      </section>

      {project.repositoryNote ? (
        <section className="max-w-3xl rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6 md:p-8">
          <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
            Repository
          </h2>
          <p className="mt-3 text-sm text-text-secondary">
            {project.repositoryNote}
          </p>
          {project.links.github ? (
            <Button asChild variant="outline" size="sm" className="mt-5">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
        </section>
      ) : null}

      <section className="max-w-3xl">
        <h2 className="text-display text-2xl text-text-primary md:text-3xl">
          Lessons learned
        </h2>
        <ul className="mt-6 space-y-2">
          {project.lessons.map((l) => (
            <li
              key={l}
              className="relative pl-4 text-text-secondary before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent"
            >
              {l}
            </li>
          ))}
        </ul>
      </section>

      {project.roadmap?.length ? (
        <section className="max-w-3xl">
          <h2 className="text-display text-2xl text-text-primary md:text-3xl">
            Future roadmap
          </h2>
          <ul className="mt-6 space-y-2">
            {project.roadmap.map((r) => (
              <li
                key={r}
                className="relative pl-4 text-text-secondary before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-accent"
              >
                {r}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.statusNote ? (
        <section className="max-w-3xl rounded-[var(--radius-xl)] border border-border-default bg-surface-1 p-6 md:p-8">
          <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
            Project status
          </h2>
          <p className="mt-4 text-text-secondary">{project.statusNote}</p>
        </section>
      ) : null}
    </div>
  );
}
