import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('gauravk2205@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-surface border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <ScrollReveal delay={0}>
          <h2 className="font-serif text-[2.5rem] md:text-h1 lg:text-display text-primary mb-6">Let's build something.</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-body text-secondary max-w-xl mx-auto mb-16">
            I'm currently open to work. If you have an interesting problem, I'd love to hear about it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <button 
            onClick={handleCopy}
            className="inline-flex items-center gap-4 text-h2 font-serif text-primary hover:text-accent transition-colors duration-[150ms] group outline-none"
            aria-label="Copy email address"
          >
            {copied ? 'Copied to clipboard!' : 'gauravk2205@gmail.com'}
            {copied ? (
              <Check className="text-accent" />
            ) : (
              <ArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-[150ms]" />
            )}
          </button>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-24 flex justify-center gap-8 font-mono text-small">
            <a href="https://github.com/gauravk2203" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-[150ms]">GitHub</a>
            <a href="https://linkedin.com/in/gauravk2205" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-[150ms]">LinkedIn</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
