import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import ScrollReveal from '../ui/ScrollReveal';

function ComponentCard({ title, description, tag, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-surface border border-border flex flex-col h-full rounded-sm group hover:border-border-mid hover:-translate-y-1 transition-all duration-200 p-8"
    >
      <div className="flex justify-between items-start mb-6 gap-4">
        <h3 className="font-serif text-h3 text-primary leading-tight group-hover:text-accent transition-colors duration-200">{title}</h3>
        {tag && <span className="text-[10px] font-mono text-accent border border-accent/20 bg-accent/5 px-3 py-1 whitespace-nowrap">{tag}</span>}
      </div>
      <p className="font-mono text-small text-secondary mb-10 leading-relaxed flex-1">
        {description}
      </p>
      
      <div className="font-mono text-small text-primary group-hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 mt-auto">
        View Component 
        <ArrowUpRight size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
      </div>
    </a>
  );
}

export default function Showcase() {
  const components = [
    {
      title: "Interactive Rating",
      description: "A functional state-driven rating component handling active user feedback with precise validation.",
      tag: "Interactive",
      link: "https://ratingcomponent-by-gaurav.netlify.app"
    },
    {
      title: "FAQ Accordion",
      description: "Expanding and collapsing questions boundary module built for smooth data display.",
      tag: "Layout",
      link: "https://faqs-by-gaurav.netlify.app"
    },
    {
      title: "Newsletter Form",
      description: "Clean semantic input grouping built for subscription funnels with active focus states.",
      tag: "Forms",
      link: "https://newsletter-by-gaurav.netlify.app"
    },
    {
      title: "Blog Preview Card",
      description: "Structured card layout featuring responsive editorial typography and content scaling.",
      tag: "Typography",
      link: "https://blog-previewcard-by-gaurav.netlify.app"
    },
    {
      title: "Time Tracking UI",
      description: "Dashboard structure visualization for analytical temporal data and statistical readouts.",
      tag: "Grid",
      link: "https://timetracking-by-gaurav.netlify.app"
    },
    {
      title: "Tip Calculator UI",
      description: "Interactive calculator state management tool with dynamic real-time mathematical outputs.",
      tag: "Logic",
      link: "https://tipcalculator-by-gaurav.netlify.app"
    }
  ];

  return (
    <section id="components" className="py-32 bg-bg border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        <ScrollReveal delay={0}>
          <SectionLabel label="COMPONENT LIBRARY" />
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-body text-secondary mb-12 max-w-2xl">
            A precise collection of interactive, production-ready frontend components. Built as standalone mini-applications deployed via Netlify.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((comp, index) => (
            <ScrollReveal key={comp.title} delay={(index + 2) * 0.1}>
              <ComponentCard {...comp} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
