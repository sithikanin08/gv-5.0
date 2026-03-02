import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0720]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a30] via-[#0F0720] to-[#0a0515]" />

      {/* Subtle Glow Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/6 rounded-full blur-[160px]" />
      </div>

      {/* Pushed down with pt-24 so content sits lower in the viewport */}
      <div className="relative z-10 w-full mx-auto px-6 text-center pt-16 md:pt-20" style={{ maxWidth: '1200px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="px-6 py-2 rounded-full border border-[#A78BFA]/30 text-[#A78BFA] text-[11px] tracking-[0.3em] font-semibold uppercase bg-white/5"
          >
            Organizing Committee 2026
          </motion.span>

          {/* Main Title — Kaushan Script, enlarged, extra line-height to prevent clipping */}
          <h1 className="select-none mt-10 flex flex-col gap-0 overflow-visible">
            <span
              className="block text-[56px] sm:text-[72px] md:text-[90px] lg:text-[110px] text-white overflow-visible"
              style={{
                fontFamily: "'Kaushan Script', cursive",
                lineHeight: 1.4,
                paddingBottom: '0px',
              }}
            >
              Global
            </span>
            <span
              className="block text-[56px] sm:text-[72px] md:text-[90px] lg:text-[110px] overflow-visible"
              style={{
                fontFamily: "'Kaushan Script', cursive",
                lineHeight: 1.4,
                paddingBottom: '40px',
                paddingRight: '30px',
                backgroundImage: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 50%, #8B5CF6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Village 5.0
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/50 font-light leading-[1.7] max-w-xl mx-auto mt-6">
            A journey of unity, culture, and leadership. Step onto the stage where the world meets and your potential ignites.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://forms.gle/cWwMryX5tgkW28tq6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl font-bold text-base flex items-center justify-center gap-2.5 shadow-[0_8px_24px_rgba(124,58,237,0.3)] transition-all min-w-[200px]"
            >
              Apply Now
              <ChevronRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              whileTap={{ scale: 0.97 }}
              href="#roles"
              className="px-8 py-3.5 bg-transparent text-white/90 border border-white/15 rounded-xl font-semibold text-base transition-all flex items-center justify-center min-w-[200px] hover:border-white/30"
            >
              Explore Roles
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
