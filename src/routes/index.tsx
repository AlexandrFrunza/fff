import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Asterisk, Circle } from "lucide-react";

import { Button } from "@/components/ui/button";
import noirLoop from "@/assets/noir-gold-loop.mp4.asset.json";

// Lovable-hosted assets are not served by the local dev server; use the copy in public/ instead.
const noirLoopSrc = import.meta.env.DEV ? "/noir-gold-loop.mp4" : noirLoop.url;

// Hero "Live signal" card is hidden for now; set to true to bring it back.
const SHOW_SIGNAL_CARD = false;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "fff.cy — Websites Built Without Limits" },
      {
        name: "description",
        content:
          "fff.cy designs and develops distinctive, high-performance websites of any complexity, with SEO built in from day one.",
      },
      { property: "og:title", content: "fff.cy — Websites Built Without Limits" },
      {
        property: "og:description",
        content:
          "Strategy, design, development and SEO for ambitious websites that refuse to blend in.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "fff.cy",
          url: "/",
          description:
            "A digital studio designing and developing high-performance websites of any complexity.",
          areaServed: "Worldwide",
          serviceType: ["Web design", "Web development", "Technical SEO"],
        }),
      },
    ],
  }),
  component: Index,
});

const capabilities = [
  ["01", "Strategy & architecture", "The structure, story and systems your product needs before pixels enter the room."],
  ["02", "Design that moves", "Distinctive art direction, interaction and responsive detail—built to hold attention."],
  ["03", "Development without limits", "From razor-sharp landing pages to complex digital platforms and custom tools."],
  ["04", "SEO from zero", "Technical foundations, metadata and search-ready structure are part of the build, not an afterthought."],
];

const stages = ["Define the signal", "Design the tension", "Build the system", "Launch with intent"];

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
          <a href="#top" className="font-display text-xl font-bold uppercase tracking-tight" aria-label="fff.cy home">
            fff<span className="text-gold">.</span>cy
          </a>
          <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-muted-foreground md:flex">
            <a className="transition-colors hover:text-gold" href="#services">Capabilities</a>
            <a className="transition-colors hover:text-gold" href="#approach">Approach</a>
          </div>
          <Button asChild size="sm" className="rounded-none uppercase tracking-widest">
            <a href="mailto:hello@fff.cy">Start a project <ArrowUpRight /></a>
          </Button>
        </nav>
      </header>

      <section id="top" className="relative grid min-h-[900px] grid-cols-1 items-end px-5 pb-10 pt-28 sm:px-8 lg:min-h-screen lg:grid-cols-12 lg:gap-8 lg:pb-12">
        <div className="video-frame absolute inset-0" aria-hidden="true">
          <video src={noirLoopSrc} autoPlay muted loop playsInline preload="auto" />
        </div>
        <div className="noir-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative z-10 lg:col-span-8">
          <div className="mb-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-gold">
            <span className="status-dot" /> INDEPENDENT DIGITAL STUDIO · WORLDWIDE
          </div>
          <h1 className="font-display text-[clamp(4.3rem,11vw,10.5rem)] font-bold uppercase leading-[0.85] tracking-tighter">
            <span className="block animate-rise">Websites</span>
            <span className="text-stroke-gold block animate-rise animation-delay-1">without</span>
            <span className="gold-sheen block animate-rise animation-delay-2">limits.</span>
          </h1>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between lg:max-w-5xl">
            <p className="max-w-xl text-lg leading-relaxed text-foreground/60 sm:text-xl">
              We turn ambitious ideas into sharp digital experiences—strategy, design, development and search performance in one build.
            </p>
            <Button asChild size="lg" className="group h-14 shrink-0 rounded-none px-6 uppercase tracking-widest">
              <a href="#contact">Make it real <ArrowDownRight className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
            </Button>
          </div>
        </div>

        <div className="relative z-10 mt-16 lg:col-span-4 lg:mt-0">
          {SHOW_SIGNAL_CARD && (
            <div className="signal-card group relative aspect-square overflow-hidden border border-gold/20 bg-card">
              <div className="machine-orbit absolute inset-[12%] rounded-full border border-dashed border-gold/30" />
              <div className="absolute inset-[25%] rotate-45 border border-gold/60 transition-transform duration-700 group-hover:rotate-90" />
              <div className="absolute left-6 top-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
                <Asterisk className="size-4 animate-spin-slow" /> Live signal
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground">Current state</p>
                <p className="font-display text-2xl font-bold uppercase sm:text-3xl">Ready for the difficult.</p>
              </div>
            </div>
          )}
          <div className="mt-6 grid grid-cols-2 border-t border-gold/15 pt-5 text-xs uppercase tracking-widest text-muted-foreground">
            <span>Strategy → Launch</span><span className="text-right text-gold">Built to perform</span>
          </div>
        </div>
      </section>

      <div className="marquee border-y border-gold/20 bg-gold py-4 text-gold-foreground">
        <div className="marquee-track font-display text-xl font-bold uppercase">
          <span>Strategy <Asterisk /> Design <Asterisk /> Development <Asterisk /> SEO <Asterisk /> Motion <Asterisk /> Performance <Asterisk /></span>
          <span aria-hidden="true">Strategy <Asterisk /> Design <Asterisk /> Development <Asterisk /> SEO <Asterisk /> Motion <Asterisk /> Performance <Asterisk /></span>
        </div>
      </div>

      <section id="services" className="px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-20 grid gap-8 lg:grid-cols-12">
            <p className="section-label lg:col-span-3">01 / Capabilities</p>
            <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:col-span-9 lg:text-8xl">
              Complexity is<br /><span className="text-gold">the point.</span>
            </h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {capabilities.map(([number, title, text]) => (
              <article key={number} className="group grid gap-4 py-8 transition-colors md:grid-cols-12 md:items-center md:py-10">
                <span className="font-mono text-xs text-gold md:col-span-1">{number}</span>
                <h3 className="font-display text-2xl font-bold uppercase transition-transform duration-300 group-hover:translate-x-2 md:col-span-5 md:text-4xl">{title}</h3>
                <p className="max-w-xl leading-relaxed text-muted-foreground md:col-span-5">{text}</p>
                <ArrowUpRight className="hidden size-7 justify-self-end text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold md:block" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="video-frame relative flex min-h-[70vh] items-center justify-center border-y border-gold/20" aria-label="Showreel">
        <video src={noirLoopSrc} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
        <div className="relative z-10 px-5 text-center">
          <p className="section-label mb-6">In motion</p>
          <p className="font-display max-w-4xl text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Every pixel<br /><span className="gold-sheen">earns its place.</span>
          </p>
        </div>
      </section>

      <section id="approach" className="border-b border-border bg-card px-5 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label mb-10">02 / Approach</p>
            <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl">No templates.<br />No noise.<br /><span className="text-stroke-gold">No ceiling.</span></h2>
          </div>
          <div className="lg:col-span-7 lg:pt-16">
            <p className="mb-16 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">Every project gets its own visual language and technical system. The process stays private. The result does the talking.</p>
            <ol className="grid gap-px bg-border sm:grid-cols-2">
              {stages.map((stage, index) => (
                <li key={stage} className="group min-h-44 bg-card p-6 transition-colors hover:bg-secondary">
                  <span className="mb-14 flex items-center justify-between font-mono text-xs text-muted-foreground">0{index + 1}<Circle className="size-3 fill-gold text-gold" /></span>
                  <span className="font-display text-xl font-bold uppercase">{stage}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="contact" className="relative flex min-h-[78vh] items-end overflow-hidden px-5 py-14 sm:px-8 lg:py-20">
        <div className="noir-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <p className="section-label mb-10">03 / Your move</p>
          <h2 className="font-display max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-bold uppercase leading-[0.85] tracking-tight">Have a difficult idea?</h2>
          <a href="mailto:hello@fff.cy" className="group mt-12 flex items-center justify-between border-y border-border py-6 font-display text-2xl font-bold uppercase transition-colors hover:border-gold hover:text-gold sm:text-4xl lg:text-6xl">
            hello@fff.cy <ArrowUpRight className="size-8 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 sm:size-12" />
          </a>
          <footer className="mt-16 flex flex-col gap-4 text-xs uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>fff.cy © 2026</span><span>Built for attention. Engineered for action.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
