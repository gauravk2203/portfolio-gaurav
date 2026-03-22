import React from 'react';
import { posts } from '../../data/posts';
import BlogCard from '../ui/BlogCard';
import SectionLabel from '../ui/SectionLabel';
import ScrollReveal from '../ui/ScrollReveal';

export default function Blog() {
  return (
    <section id="blog" className="py-32 bg-bg border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        <ScrollReveal delay={0}>
          <SectionLabel label="WRITING" />
        </ScrollReveal>
        <div className="flex flex-col gap-0 border-t border-border mt-8">
          {posts.length === 0 ? (
            <div className="py-12 text-secondary font-mono text-body text-center">
              Posts coming soon.
            </div>
          ) : (
            posts.map((post, index) => (
              <ScrollReveal key={post.id} delay={(index + 1) * 0.1}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))
          )}
        </div>
        
        {posts.length > 0 && (
          <ScrollReveal delay={(posts.length + 1) * 0.1}>
            <div className="mt-12">
              <a 
                href="#blog" 
                className="text-primary font-mono text-h3 hover:text-accent transition-colors duration-[150ms] inline-flex items-center group"
              >
                Read all posts <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-[150ms]">→</span>
              </a>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
