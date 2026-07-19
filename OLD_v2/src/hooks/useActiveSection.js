import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      // The threshold line is one-third down the screen
      const threshold = window.innerHeight / 3;

      let currentActive = sectionIds[0];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        // getBoundingClientRect().top is purely relative to the viewport.
        // It ignores CSS position: relative issues that messed up offsetTop.
        if (element && element.getBoundingClientRect().top <= threshold) {
          currentActive = id;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds.join(',')]);

  return activeSection;
}
