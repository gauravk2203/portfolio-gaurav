import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-bg py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left font-mono text-small text-tertiary">
        <p>Designed and built by Gaurav Kadam · {new Date().getFullYear()}</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
