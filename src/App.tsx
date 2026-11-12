import type { ReactNode } from 'react'
import { content } from './content'
import type { Project, ExperienceItem, WritingItem } from './content'

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400"
    >
      {children}
    </h2>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const hasLinks = Boolean(project.links?.live || project.links?.code)
  return (
    <article className="border-t border-neutral-200 py-8 first:border-t-0 first:pt-0 dark:border-neutral-800">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
        {hasLinks && (
          <div className="flex gap-4 text-sm">
            {project.links?.live && (
              <a className="link-underline text-neutral-600 dark:text-neutral-300" href={project.links.live}>
                Live
              </a>
            )}
            {project.links?.code && (
              <a className="link-underline text-neutral-600 dark:text-neutral-300" href={project.links.code}>
                Code
              </a>
            )}
          </div>
        )}
      </div>
      <p className="mt-1 text-neutral-700 dark:text-neutral-300">{project.tagline}</p>

      <dl className="mt-4 space-y-3 text-sm leading-relaxed">
        <div>
          <dt className="inline font-semibold text-neutral-900 dark:text-neutral-100">Problem. </dt>
          <dd className="inline text-neutral-600 dark:text-neutral-400">{project.problem}</dd>
        </div>
        <div>
          <dt className="inline font-semibold text-neutral-900 dark:text-neutral-100">Role. </dt>
          <dd className="inline text-neutral-600 dark:text-neutral-400">{project.role}</dd>
        </div>
        <div>
          <dt className="inline font-semibold text-neutral-900 dark:text-neutral-100">Hard call. </dt>
          <dd className="inline text-neutral-600 dark:text-neutral-400">{project.decision}</dd>
        </div>
      </dl>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-neutral-200 px-2 py-0.5 font-mono text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  )
}

function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <li className="grid grid-cols-1 gap-1 border-t border-neutral-200 py-5 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-6 dark:border-neutral-800">
      <div className="font-mono text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        {item.period}
      </div>
      <div>
        <h3 className="font-semibold">
          {item.role} <span className="text-neutral-500 dark:text-neutral-400">· {item.company}</span>
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{item.outcome}</p>
      </div>
    </li>
  )
}

function WritingRow({ item }: { item: WritingItem }) {
  return (
    <li className="border-t border-neutral-200 py-4 first:border-t-0 first:pt-0 dark:border-neutral-800">
      <a href={item.href} className="group flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-medium group-hover:text-accent">{item.title}</span>
        <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
          {item.venue} · {item.date}
        </span>
      </a>
    </li>
  )
}

export default function App() {
  const { profile, projects, experience, writing, about, nonWork } = content

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>

      <header className="container-page flex items-center justify-between gap-4 py-6">
        <a href="#top" className="flex shrink-0 items-center gap-3 font-mono text-sm font-semibold tracking-tight">
          <img src="/profile.jpg" alt="" width={28} height={28} className="h-7 w-7 rounded-full object-cover ring-1 ring-neutral-200 dark:ring-neutral-700" />
          <span className="hidden min-[420px]:inline">{profile.name}</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex gap-4 text-sm text-neutral-600 min-[420px]:gap-5 dark:text-neutral-400">
            <li><a className="transition-colors hover:text-accent" href="#work">Work</a></li>
            <li><a className="transition-colors hover:text-accent" href="#experience">Experience</a></li>
            <li><a className="transition-colors hover:text-accent" href="#about">About</a></li>
            <li><a className="transition-colors hover:text-accent" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main" className="container-page pb-24">
        {/* Hero */}
        <section id="top" aria-labelledby="hero-name" className="border-b border-neutral-200 py-16 dark:border-neutral-800 sm:py-24">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                {profile.availability}
              </p>
              <h1 id="hero-name" className="text-4xl font-bold tracking-tight sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-4 max-w-prose text-lg text-neutral-700 dark:text-neutral-300">
                {profile.positioning}
              </p>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{profile.location}</p>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a className="link-underline" href={s.href} target="_blank" rel="noreferrer noopener">
                      {s.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a className="link-underline" href={`mailto:${profile.email}`}>
                    Email
                  </a>
                </li>
                <li>
                  <a className="link-underline" href={`tel:${profile.phone}`}>
                    Phone
                  </a>
                </li>
              </ul>
            </div>

            <img
              src="/profile.jpg"
              alt={`Portrait of ${profile.name}`}
              width={240}
              height={240}
              className="h-40 w-40 rounded-full object-cover ring-1 ring-neutral-200 dark:ring-neutral-700 sm:h-60 sm:w-60"
            />
          </div>
        </section>

        {/* Selected work */}
        <section id="work" aria-labelledby="work-heading" className="border-b border-neutral-200 py-16 dark:border-neutral-800">
          <SectionHeading id="work-heading">Selected work</SectionHeading>
          <div>
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" aria-labelledby="exp-heading" className="border-b border-neutral-200 py-16 dark:border-neutral-800">
          <SectionHeading id="exp-heading">Experience</SectionHeading>
          <ol className="space-y-0">
            {experience.map((e) => (
              <ExperienceRow key={`${e.company}-${e.period}`} item={e} />
            ))}
          </ol>
        </section>

        {/* Writing */}
        {writing.length > 0 && (
          <section id="writing" aria-labelledby="writing-heading" className="border-b border-neutral-200 py-16 dark:border-neutral-800">
            <SectionHeading id="writing-heading">Writing &amp; speaking</SectionHeading>
            <ul>
              {writing.map((w) => (
                <WritingRow key={w.title} item={w} />
              ))}
            </ul>
          </section>
        )}

        {/* About */}
        <section id="about" aria-labelledby="about-heading" className="border-b border-neutral-200 py-16 dark:border-neutral-800">
          <SectionHeading id="about-heading">About</SectionHeading>
          <div className="max-w-prose space-y-4 text-neutral-700 dark:text-neutral-300">
            {about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p className="text-neutral-600 dark:text-neutral-400">{nonWork}</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-heading" className="py-16">
          <SectionHeading id="contact-heading">Contact</SectionHeading>
          <p className="max-w-prose text-neutral-700 dark:text-neutral-300">
            The fastest way to reach me is email or phone. I read everything and reply within a day or two.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-block rounded bg-accent px-5 py-3 font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-block rounded border border-neutral-300 px-5 py-3 font-medium transition-colors hover:border-accent hover:text-accent dark:border-neutral-700"
            >
              {profile.phone}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 py-8 dark:border-neutral-800">
        <div className="container-page flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="font-mono">Built with React, TypeScript &amp; Tailwind</span>
        </div>
      </footer>
    </div>
  )
}