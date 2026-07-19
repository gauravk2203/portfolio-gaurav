import React from 'react';
import Tag from './Tag';

export default function ProjectCard({ project }) {
  return (
    <a 
      href={project.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block w-full bg-surface border border-border hover:border-border-mid transition-colors duration-150 p-8 flex flex-col md:flex-row gap-8 items-start"
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col h-full">
        <div className="font-serif text-h1 text-tertiary opacity-50 mb-4">{project.number}</div>
        <h3 className="font-serif text-h2 text-primary mb-4">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Tag label={project.type} />
          {project.stack.map(tech => (
            <Tag key={tech} label={tech} />
          ))}
        </div>
        
        <p className="font-mono text-body text-secondary mt-auto">
          {project.description}
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[400px] h-64 overflow-hidden rounded-sm bg-bg border border-border relative">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:-translate-y-1 transition-transform duration-150"
        />
      </div>
    </a>
  );
}
