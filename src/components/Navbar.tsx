import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import GvLogo from '../assets/GvLogo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Roles", "Timeline", "Contact"];

  return (
    <nav className="fixed w-full z-50 flex justify-center" style={{ padding: '16px 40px' }}>
      <div className="w-full" style={{ maxWidth: '1200px' }}>
        <div
          className={`flex justify-between items-center px-8 py-3 rounded-full backdrop-blur-2xl border transition-all duration-500 ${isScrolled
              ? 'bg-white/90 border-gray-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
              : 'bg-white/5 border-white/10 shadow-none'
            }`}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5"
          >
            <img src={GvLogo} alt="Global Village 5.0" className="w-9 h-9 rounded-lg object-contain" />
            <span className={`font-black text-lg tracking-tighter font-['Montserrat'] transition-colors duration-500 ${isScrolled ? 'text-[#111827]' : 'text-white'
              }`}>
              GV 5.0
            </span>
          </motion.a>

          {/* Desktop Links — purple hover + adaptive color */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`font-medium text-sm transition-colors duration-300 hover:text-[#7C3AED] ${isScrolled ? 'text-[#6B7280]' : 'text-white/70'
                  }`}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden transition-colors ${isScrolled ? 'text-[#111827]' : 'text-white/80 hover:text-white'
              }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden absolute top-[76px] left-10 right-10 backdrop-blur-2xl border rounded-2xl overflow-hidden shadow-xl ${isScrolled
                ? 'bg-white/95 border-gray-200/60'
                : 'bg-white/10 border-white/15'
              }`}
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium text-base hover:text-[#7C3AED] transition-colors ${isScrolled ? 'text-[#111827]' : 'text-white'
                    }`}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
