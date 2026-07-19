"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Briefcase,
  FileText,
  FolderGit2,
  Home,
  Mail,
  Search,
  Sparkles,
  Trophy,
  User,
  Wrench,
  Moon,
  Sun,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { projects } from "@/content/projects";
import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

type CommandItem = {
  id: string;
  label: string;
  hint?: string;
  href?: string;
  group: string;
  icon: React.ComponentType<{ className?: string }>;
  action?: () => void;
  keywords?: string;
};

export function CommandPalette() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const items = useMemo<CommandItem[]>(() => {
    const pages: CommandItem[] = [
      {
        id: "home",
        label: "Home",
        href: "/",
        group: "Pages",
        icon: Home,
      },
      {
        id: "work",
        label: "Work",
        href: "/projects",
        group: "Pages",
        icon: Briefcase,
      },
      {
        id: "about",
        label: "About",
        href: "/about",
        group: "Pages",
        icon: User,
      },
      {
        id: "experience",
        label: "Experience",
        href: "/experience",
        group: "Pages",
        icon: FileText,
      },
      {
        id: "skills",
        label: "Skills",
        href: "/skills",
        group: "Pages",
        icon: Sparkles,
      },
      {
        id: "oss",
        label: "Open Source",
        href: "/open-source",
        group: "More",
        icon: FolderGit2,
      },
      {
        id: "achievements",
        label: "Achievements",
        href: "/achievements",
        group: "More",
        icon: Trophy,
      },
      {
        id: "services",
        label: "Capabilities",
        href: "/services",
        group: "More",
        icon: Wrench,
      },
      {
        id: "contact",
        label: "Contact",
        href: "/contact",
        group: "Pages",
        icon: Mail,
      },
      {
        id: "resume",
        label: "Resume",
        href: "/resume",
        group: "Pages",
        icon: FileText,
      },
    ];

    const projectItems: CommandItem[] = projects.map((p) => ({
      id: `project-${p.slug}`,
      label: p.title,
      hint: p.summary,
      href: `/projects/${p.slug}`,
      group: "Projects",
      icon: Briefcase,
      keywords: p.stack.join(" "),
    }));

    const actions: CommandItem[] = [
      {
        id: "theme",
        label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        group: "Actions",
        icon: theme === "dark" ? Sun : Moon,
        action: () => toggleTheme(),
      },
    ];

    return [...pages, ...projectItems, ...actions];
  }, [theme, toggleTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => {
      const hay = `${item.label} ${item.hint ?? ""} ${item.keywords ?? ""} ${item.group}`.toLowerCase();
      return hay.includes(q);
    });
  }, [items, query]);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  const run = useCallback(
    (item: CommandItem) => {
      if (item.action) {
        item.action();
        setOpen(false);
        setQuery("");
        return;
      }
      if (item.href) {
        router.push(item.href);
        setOpen(false);
        setQuery("");
      }
    },
    [router],
  );

  const groups = useMemo(() => {
    const map = new Map<string, CommandItem[]>();
    for (const item of filtered) {
      const list = map.get(item.group) ?? [];
      list.push(item);
      map.set(item.group, list);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setQuery("");
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-overlay backdrop-blur-sm data-[state=open]:animate-in" />
        <Dialog.Content
          className="fixed left-1/2 top-[12vh] z-[90] w-[min(100%-1.5rem,36rem)] -translate-x-1/2 overflow-hidden rounded-[var(--radius-xl)] border border-border-default bg-surface-1 shadow-[var(--shadow-lg)] focus:outline-none"
          aria-describedby={undefined}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => Math.min(i + 1, filtered.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter" && filtered[active]) {
              e.preventDefault();
              run(filtered[active]);
            }
          }}
        >
          <Dialog.Title className="sr-only">Command palette</Dialog.Title>
          <div className="flex items-center gap-3 border-b border-border-subtle px-4">
            <Search className="h-4 w-4 shrink-0 text-text-muted" aria-hidden />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages, projects, writing…"
              className="h-14 w-full bg-transparent text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
              autoFocus
              aria-label="Search commands"
            />
            <kbd className="hidden rounded border border-border-default px-1.5 py-0.5 font-mono text-[0.65rem] text-text-muted sm:inline">
              esc
            </kbd>
          </div>

          <div className="max-h-[min(60vh,22rem)] overflow-y-auto p-2" role="listbox">
            {filtered.length === 0 ? (
              <p className="px-3 py-8 text-center text-sm text-text-muted">
                No matches for “{query}”
              </p>
            ) : (
              groups.map(([group, groupItems]) => (
                <div key={group} className="mb-2">
                  <p className="px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-text-muted">
                    {group}
                  </p>
                  <ul>
                    {groupItems.map((item) => {
                      const flatIndex = filtered.indexOf(item);
                      const Icon = item.icon;
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={flatIndex === active}
                            className={cn(
                              "flex w-full items-start gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-left transition-colors",
                              flatIndex === active
                                ? "bg-accent-muted text-text-primary"
                                : "text-text-secondary hover:bg-surface-2",
                            )}
                            onMouseEnter={() => setActive(flatIndex)}
                            onClick={() => run(item)}
                          >
                            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm text-text-primary">
                                {item.label}
                              </span>
                              {item.hint ? (
                                <span className="mt-0.5 line-clamp-1 block text-xs text-text-muted">
                                  {item.hint}
                                </span>
                              ) : null}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))
            )}
          </div>

          <div className="flex items-center justify-between border-t border-border-subtle px-4 py-2 text-[0.65rem] text-text-muted">
            <span>
              Navigate with ↑↓ · Enter to open ·{" "}
              <span className="font-mono">⌘K</span> toggle
            </span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function CommandPaletteTrigger({ className }: { className?: string }) {
  const [openHint, setOpenHint] = useState(false);

  useEffect(() => {
    // force re-render so client can show platform-ish shortcut; no-op state used for hydration safety
    setOpenHint(true);
  }, []);

  return (
    <button
      type="button"
      className={cn(
        "hidden items-center gap-2 rounded-[var(--radius-md)] border border-border-default bg-surface-1/60 px-2.5 py-1.5 text-xs text-text-muted transition-colors hover:border-accent/40 hover:text-text-secondary md:inline-flex",
        className,
      )}
      onClick={() => {
        window.dispatchEvent(new Event("open-command-palette"));
      }}
      aria-label="Open command palette"
    >
      <Search className="h-3.5 w-3.5" aria-hidden />
      <span>Search</span>
      {openHint ? (
        <kbd className="rounded border border-border-subtle px-1 font-mono text-[0.6rem]">
          ⌘K
        </kbd>
      ) : null}
    </button>
  );
}
