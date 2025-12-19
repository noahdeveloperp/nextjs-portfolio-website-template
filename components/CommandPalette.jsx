'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

/**
 * Command Palette Component
 * Quick navigation and action launcher (Cmd+K or Ctrl+K)
 */
export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const commands = [
    {
      name: 'About',
      description: 'Learn more about me',
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      name: 'Projects',
      description: 'View featured projects',
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      name: 'Contact',
      description: 'Get in touch',
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      name: 'Email',
      description: 'Send me an email',
      action: () => {
        window.location.href = 'mailto:noe@dev';
        setIsOpen(false);
      }
    }
  ];

  const filtered = search.length > 0
    ? commands.filter(cmd => 
        cmd.name.toLowerCase().includes(search.toLowerCase()) ||
        cmd.description.toLowerCase().includes(search.toLowerCase())
      )
    : commands;

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
        setSearch('');
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-white/10 border border-white/20 backdrop-blur-md 
                   px-4 py-2 rounded-full text-sm text-gray-400 hover:text-white transition 
                   flex items-center gap-2 hidden md:flex"
      >
        <Search className="w-4 h-4" />
        <span className="text-xs">Cmd+K</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 
                          w-full max-w-md bg-black border border-white/20 rounded-lg shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                autoFocus
                type="text"
                placeholder="Search commands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent flex-1 outline-none text-white text-sm"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded transition"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Commands List */}
            <div className="max-h-[300px] overflow-y-auto">
              {filtered.length > 0 ? (
                filtered.map((cmd, idx) => (
                  <button
                    key={idx}
                    onClick={cmd.action}
                    className="w-full px-4 py-3 text-left hover:bg-white/10 transition border-b 
                               border-white/5 last:border-b-0"
                  >
                    <div className="text-sm font-medium text-white">{cmd.name}</div>
                    <div className="text-xs text-gray-400">{cmd.description}</div>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-gray-400 text-sm">
                  No commands found
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-white/5 border-t border-white/10 text-xs text-gray-500 flex gap-2">
              <kbd className="bg-white/10 px-2 py-1 rounded">Esc</kbd>
              <span>to close</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}