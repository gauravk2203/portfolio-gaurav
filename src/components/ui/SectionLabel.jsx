import React from 'react';

export default function SectionLabel({ label }) {
  return (
    <div className="font-mono text-small text-accent uppercase tracking-widest mb-8">
      — {label}
    </div>
  );
}
