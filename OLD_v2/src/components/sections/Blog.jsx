import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import ScrollReveal from '../ui/ScrollReveal';

export default function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24 lg:py-32 bg-bg border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        <ScrollReveal delay={0}>
          <SectionLabel label="WRITING" />
          <h2 className="text-h1 font-serif text-primary mt-6 mb-4">Thoughts & Perspectives</h2>
          <p className="text-secondary font-mono text-body max-w-2xl">
            A growing collection of notes on software architecture, systems design, and engineering craft.
          </p>
        </ScrollReveal>
        
        <div className="mt-12">
          <ScrollReveal delay={0.1}>
            <div className="bg-surface border border-border p-8 md:p-12 flex flex-col items-center justify-center text-center">
              <span className="text-accent font-mono text-small uppercase tracking-widest mb-4">Status</span>
              <h3 className="text-h2 font-serif text-primary mb-2">Publishing Soon</h3>
              <p className="text-secondary font-mono text-body max-w-md mx-auto">
                I am currently writing the first few entries. Check back later for in-depth articles.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
