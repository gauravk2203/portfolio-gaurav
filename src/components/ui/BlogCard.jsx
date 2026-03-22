import React from 'react';

export default function BlogCard({ post }) {
  return (
    <a 
      href={post.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border transition-colors duration-[150ms] px-4 -mx-4"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
        <span className="font-mono text-small text-tertiary w-24">
          {post.date}
        </span>
        <h3 className="font-serif text-h2 text-primary group-hover:text-accent transition-colors duration-[150ms]">
          {post.title}
        </h3>
      </div>
      <span className="font-mono text-small text-tertiary mt-2 md:mt-0">
        {post.readingTime}
      </span>
    </a>
  );
}
