import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import ProjectCard from '../ui/ProjectCard';
import ScrollReveal from '../ui/ScrollReveal';
import { projects } from '../../data/projects';

export default function Work() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'React', 'Node.js', 'Solidity'];

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(p => p.stack.includes(filter));
  }, [filter]);

  return (
    <section id="work" className="py-32 bg-bg border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        <ScrollReveal delay={0}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 mt-2">
            <SectionLabel label="SELECTED WORK" />
            <div className="flex flex-wrap gap-4 md:gap-8 font-mono text-small">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`transition-colors duration-[150ms] outline-none ${filter === f ? 'text-accent border-b border-accent' : 'text-secondary hover:text-primary'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <motion.div layout className="flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={project.id}
              >
                <ScrollReveal delay={index * 0.1}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
