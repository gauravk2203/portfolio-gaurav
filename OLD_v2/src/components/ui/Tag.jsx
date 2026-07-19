import React from 'react';

export default function Tag({ label }) {
  return (
    <span className="bg-surface border border-border text-secondary text-small font-mono px-2 py-0.5 rounded-sm">
      {label}
    </span>
  );
}
