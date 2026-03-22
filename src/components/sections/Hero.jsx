import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 pb-32 px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
          
          {/* Left Column (70%) */}
          <div className="lg:col-span-8 lg:pr-16 xl:pr-24">
            <ScrollReveal duration={0.6} delay={0}>
              <h1 className="font-serif text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] xl:text-[11rem] text-primary leading-[0.85] tracking-tight mb-4 break-words">
                Gaurav<br/>Kadam
              </h1>
              <span className="text-secondary text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] block mt-6 md:mt-12 font-serif leading-none tracking-normal">
                Full-Stack Developer
              </span>
            </ScrollReveal>
          </div>

          {/* Right Column (30%) */}
          <div className="lg:col-span-4 lg:border-l border-border lg:pl-16 flex flex-col justify-center h-full group relative">
            {/* Interactive illuminated line on hover */}
            <div className="absolute -left-[1px] top-0 w-[2px] h-full bg-accent scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-700 ease-in-out hidden lg:block opacity-50 z-10" />

            <div className="flex flex-col gap-12">
              <ScrollReveal duration={0.6} delay={0.1}>
                <div className="flex items-start gap-4 text-secondary font-mono text-xs">
                  <span className="relative flex h-2 w-2 flex-shrink-0 mt-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  <span className="uppercase tracking-widest leading-relaxed">
                    Software Developer Based in India
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal duration={0.6} delay={0.2}>
                <p className="font-mono text-body text-secondary leading-relaxed">
                  Building scalable frontend and backend systems using React, TypeScript, Node.js, PostgreSQL, and MongoDB.
                </p>
              </ScrollReveal>

              <ScrollReveal duration={0.6} delay={0.3}>
                <div className="flex flex-col gap-4 w-full">
                  <a 
                    href="#work" 
                    className="bg-accent text-bg font-mono text-body px-8 py-5 border border-accent hover:text-accent hover:shadow-[inset_0_0_0_4rem_#0A0A0A] transition-all duration-[250ms] ease-in-out text-center"
                  >
                    See my work
                  </a>
                  <a 
                    href="/Gaurav_Kadam_Resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border text-primary font-mono text-body px-8 py-5 hover:border-border-mid hover:text-accent transition-colors duration-[150ms] text-center"
                  >
                    View Resume
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
