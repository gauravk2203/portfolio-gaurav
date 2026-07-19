import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(['hero', 'components', 'work', 'blog', 'about', 'contact']);

  const links = [
    { id: 'components', label: 'System' },
    { id: 'work', label: 'Work' },
    { id: 'blog', label: 'Writing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
          <a href="#hero" className="font-serif text-h3 text-primary relative group">
            GK
            <span className={`absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent transition-opacity ${activeSection === 'hero' ? 'opacity-100' : 'opacity-0'}`}></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                className={`font-mono text-small md:text-h3 relative px-3 py-1.5 rounded-sm transition-colors duration-200 ${activeSection === link.id ? 'text-primary' : 'text-secondary hover:text-accent hover:bg-surface'}`}
              >
                <span className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent transition-opacity duration-200 ${activeSection === link.id ? 'opacity-100' : 'opacity-0'}`}></span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-primary hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] bg-bg z-40 p-6 flex flex-col gap-6 md:hidden">
          {links.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className="font-mono text-h2 text-primary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
