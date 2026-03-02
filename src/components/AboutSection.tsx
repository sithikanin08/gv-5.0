import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import gv1 from '../assets/GV1.jpeg';
import gv2 from '../assets/GV2.jpeg';
import gv3 from '../assets/GV3.jpeg';
import gv4 from '../assets/GV4.jpeg';
import gv5 from '../assets/GV5.jpeg';
import gv6 from '../assets/GV6.jpeg';
import gv7 from '../assets/GV7.jpeg';
import gv8 from '../assets/GV8.jpeg';
import gv9 from '../assets/GV9.jpeg';
import gv10 from '../assets/GV10.jpeg';
import gv11 from '../assets/GV11.jpeg';
import gv12 from '../assets/GV12.jpeg';
import gv13 from '../assets/GV13.jpeg';
import gv14 from '../assets/GV14.jpeg';

const slides = [
  { src: gv1, caption: "Be the spark that ignites the stage." },
  { src: gv2, caption: "Where cultures collide, friendships are born." },
  { src: gv3, caption: "Celebrating unity in every color and rhythm." },
  { src: gv4, caption: "One village, a thousand stories to tell." },
  { src: gv5, caption: "The world is smaller when hearts connect." },
  { src: gv6, caption: "Leadership begins where comfort zones end." },
  { src: gv7, caption: "Every voice matters on this global stage." },
  { src: gv8, caption: "From SLIIT to the world — we rise together." },
  { src: gv9, caption: "Dance, dream, and discover beyond borders." },
  { src: gv10, caption: "Culture is the bridge, youth is the future." },
  { src: gv11, caption: "Making memories that cross every continent." },
  { src: gv12, caption: "Together we create something extraordinary." },
  { src: gv13, caption: "Where passion meets purpose, magic happens." },
  { src: gv14, caption: "Five years of celebrating the world in us." },
];

/* ─── Sliding-blinds / diagonal-wipe transition ─── */
const cubicEase = [0.77, 0, 0.175, 1] as [number, number, number, number];

const imageVariants = {
  enter: (dir: number) => ({
    clipPath: dir > 0
      ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
      : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
    scale: 1.08,
    opacity: 0.6,
  }),
  center: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    scale: 1,
    opacity: 1,
    transition: {
      clipPath: { duration: 0.9, ease: cubicEase },
      scale: { duration: 1.2, ease: 'easeOut' as const },
      opacity: { duration: 0.4 },
    },
  },
  exit: (dir: number) => ({
    clipPath: dir > 0
      ? 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
      : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
    scale: 1.04,
    opacity: 0,
    transition: {
      clipPath: { duration: 0.9, ease: cubicEase },
      scale: { duration: 0.6 },
      opacity: { duration: 0.5, delay: 0.4 },
    },
  }),
};

const captionVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const AboutSection: React.FC = () => {
  const [[index, direction], setSlide] = useState([0, 1]);

  const paginate = useCallback((newDir: number) => {
    setSlide(([prev]) => {
      const next = (prev + newDir + slides.length) % slides.length;
      return [next, newDir];
    });
  }, []);

  /* Auto-play every 5 seconds */
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section id="about" className="relative overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#F8F7FF' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: '40px' }}>
          {/* Left — Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="space-y-6"
          >
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="font-bold leading-tight text-[#111827]"
              style={{ fontSize: '36px', fontWeight: 700 }}
            >
              The Legacy of <br />
              <span className="text-[#7C3AED]">Leadership.</span>
            </motion.h2>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="space-y-4"
            >
              <p className="text-[#6B7280] font-light" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                Global Village 5.0 is a flagship cultural event organized by AIESEC in SLIIT, bringing together cultures from around the world into one vibrant and immersive experience. This event celebrates diversity, global unity, and cross-cultural understanding by showcasing traditions, food, music, performances, and stories from different countries.
              </p>
              <p className="text-[#6B7280] font-light" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                Global Village is more than just an event, it is a platform where young people connect beyond borders, experience global citizenship, and embrace the beauty of cultural diversity. Through interactive stalls, performances, and engaging activities, Global Village 5.0 aims to create a space where cultures meet and friendships grow.
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="grid sm:grid-cols-2 pt-4"
              style={{ gap: '24px' }}
            >
              {[
                { title: "Team Synergy", desc: "Forge bonds that last a lifetime." },
                { title: "Global Network", desc: "Interact with diverse partners." }
              ].map((box, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#7C3AED]/10 hover:border-[#7C3AED]/20 transition-colors"
                  style={{ padding: '24px', borderRadius: '16px' }}
                >
                  <h4 className="font-bold text-[#111827] mb-1 text-base">{box.title}</h4>
                  <p className="text-sm text-[#6B7280]">{box.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="relative z-10 aspect-[4/5] overflow-hidden shadow-[0_32px_80px_-16px_rgba(124,58,237,0.15)] bg-[#0F0720]"
              style={{ borderRadius: '24px' }}
            >
              {/* Slideshow images */}
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={index}
                  src={slides[index].src}
                  alt={slides[index].caption}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
              </AnimatePresence>

              {/* Gradient overlay + Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0720]/70 via-transparent to-transparent z-10 flex items-end p-8 pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    variants={captionVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="text-white text-lg md:text-xl font-bold leading-snug drop-shadow-lg max-w-[85%]"
                  >
                    {slides[index].caption}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-3 right-4 z-20 flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide([i, i > index ? 1 : -1])}
                    className={`rounded-full transition-all duration-300 ${i === index
                      ? 'w-5 h-1.5 bg-white'
                      : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next arrows */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:bg-black/40 hover:text-white transition-all"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:bg-black/40 hover:text-white transition-all"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-32 h-32 border-2 border-dashed border-[#7C3AED]/20 rounded-full z-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
