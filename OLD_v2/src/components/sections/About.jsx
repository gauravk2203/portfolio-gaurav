import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import ScrollReveal from '../ui/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-bg border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        <ScrollReveal delay={0}>
          <SectionLabel label="ABOUT ME" />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
          <ScrollReveal delay={0.1}>
            <div className="space-y-8 font-mono text-body text-secondary">
              <p>
                <span className="text-primary font-medium">Gaurav Kadam is a full-stack developer based in India.</span><br />
                I am skilled in building scalable frontend and backend systems. Experienced in designing clean architectures, optimizing performance, and delivering production-grade features in fast-paced environments.
              </p>
              <p>
                I am known for reliability, ownership, and the ability to translate complex requirements into predictable, maintainable engineering outcomes.
              </p>
              <div className="pt-8 border-t border-border mt-8">
                <p className="text-primary mb-2">Education:</p>
                <p>B-TECH. in Artificial Intelligence & Machine Learning - ST. John College</p>
                <a 
                  href="/Gaurav_Kadam_Resume.pdf" 
                  download
                  className="inline-block mt-8 border border-border text-primary font-mono text-small px-6 py-3 hover:border-border-mid hover:text-accent transition-colors duration-[150ms]"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="font-mono text-small text-tertiary uppercase tracking-widest mb-6">Technologies & Tools</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 font-mono text-small">
                <div>
                  <span className="text-tertiary block mb-1">Languages:</span>
                  <span className="text-secondary">JavaScript, TypeScript, Solidity, Python</span>
                </div>
                <div>
                  <span className="text-tertiary block mb-1">Frontend:</span>
                  <span className="text-secondary">React.js, TailwindCSS, Redux Toolkit</span>
                </div>
                <div>
                  <span className="text-tertiary block mb-1">Backend:</span>
                  <span className="text-secondary">Node.js, Express.js, REST APIs, Prisma</span>
                </div>
                <div>
                  <span className="text-tertiary block mb-1">Database:</span>
                  <span className="text-secondary">PostgreSQL, MongoDB, IPFS</span>
                </div>
                <div>
                  <span className="text-tertiary block mb-1">Infra & DevOps:</span>
                  <span className="text-secondary">Netlify, GitHub Actions</span>
                </div>
                <div>
                  <span className="text-tertiary block mb-1">Tools:</span>
                  <span className="text-secondary">Git, GitHub, Postman, Figma</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
