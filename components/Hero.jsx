'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

/**
 * Hero component - landing page header + hero + featured projects
 *
 * Accessibility: 
 * - Semantic tags for header, nav, section
 * - ARIA roles for menus
 * - Keyboard navigable
 *
 * Performance:
 * - Image optimization via next/image
 * - useCallback for handlers to prevent unnecessary re-renders
 * - Responsive layout with Tailwind breakpoints
 */
export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);


  const closeMenuAndOpenForm = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen w-full">
      {/* ===== HEADER ===== */}
      <header
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
                   bg-white/10 backdrop-blur-md text-white px-6 md:px-8 py-3 
                   rounded-full shadow-lg flex items-center justify-between gap-6 
                   w-[90%] max-w-6xl"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <h2 className="text-md md:text-2xl font-light tracking-tight leading-tight">
            Noe
          </h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-lg text-gray-400" aria-label="Primary navigation">
          {['About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className="w-6 h-6 text-white" aria-hidden="true" />
        </button>
      </header>

      {/* ===== MOBILE SIDEBAR MENU ===== */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />
          {/* Sidebar */}
          <aside
            className={`fixed top-0 left-0 h-full w-64 bg-black z-50 p-6 
                        transform transition-transform duration-300 ease-in-out 
                        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            role="dialog"
            aria-modal="true"
          >
            <div className='mt-5 flex justify-between'>
              {/* Close Button */}
              <Link
                href="/"
                aria-label="Home"
                className="flex items-center gap-2 font-semibold text-lg"
              >
                <h2 className="text-md md:text-2xl font-light tracking-tight leading-tight">
                  Noe
                </h2>
              </Link>
              <button
                onClick={closeMenu}
                className=" text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>

            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 mt-12" aria-label="Mobile navigation">
              {['About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ))}
            </nav>
          </aside>
        </>
      )}

      {/* ===== HERO SECTION ===== */}
      <section className="pt-32 md:pt-40 px-6 overflow-hidden min-h-screen flex items-center relative">
        {/* Gradient orbs */}
        <div
          className="absolute top-20 -left-40 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl opacity-50"
          style={{
            transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        <div
          className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl opacity-50"
          style={{
            transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -2}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />

        <div className="max-w-4xl mx-auto text-center w-full relative z-10">
          <h1
            className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            Noe
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 animate-fade-in">
            Backend Engineer & Systems Architect
          </p>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-100">
            Building scalable systems and APIs that power modern applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-200">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-black px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              Contact
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
