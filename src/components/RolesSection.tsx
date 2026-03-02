import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users as UsersIcon, BookOpen, CheckCircle2, Target, GraduationCap, ArrowUpRight } from 'lucide-react';
import { ROLES } from '../constants/departments';
import type { Role } from '../types';

/* ─── Animated SVG Waves ─── */
const WaveSVG: React.FC<{ className?: string; delay?: number; duration?: number; opacity?: number; flip?: boolean }> = ({
  className = '',
  delay = 0,
  duration = 12,
  opacity = 0.08,
  flip = false,
}) => (
  <motion.svg
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    className={`absolute w-[250%] h-[280px] ${className}`}
    animate={{ x: flip ? [-720, 0] : [0, -720] }}
    transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
    style={{ opacity }}
  >
    <path
      fill="#7C3AED"
      d="M0,96L40,112C80,128,160,160,240,186.7C320,213,400,235,480,224C560,213,640,171,720,154.7C800,139,880,149,960,170.7C1040,192,1120,224,1200,218.7C1280,213,1360,171,1400,149.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    />
  </motion.svg>
);

/* ─── Cultural Pattern Dots (decorative) ─── */
const CulturalDots: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} width="60" height="60" viewBox="0 0 60 60" fill="none">
    {[0, 20, 40].map(x =>
      [0, 20, 40].map(y => (
        <circle key={`${x}-${y}`} cx={x + 10} cy={y + 10} r="2" fill="#7C3AED" opacity="0.15" />
      ))
    )}
  </svg>
);

/* ─── Stagger container ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: cardEase },
  },
};

/* ─── Accent colors for each card ─── */
const accents = [
  { from: '#7C3AED', to: '#A78BFA', light: 'rgba(124, 58, 237, 0.06)' },
  { from: '#8B5CF6', to: '#C4B5FD', light: 'rgba(139, 92, 246, 0.06)' },
  { from: '#6D28D9', to: '#8B5CF6', light: 'rgba(109, 40, 217, 0.06)' },
  { from: '#7C3AED', to: '#DDD6FE', light: 'rgba(124, 58, 237, 0.06)' },
  { from: '#5B21B6', to: '#A78BFA', light: 'rgba(91, 33, 182, 0.06)' },
  { from: '#8B5CF6', to: '#7C3AED', light: 'rgba(139, 92, 246, 0.06)' },
];

const RolesSection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const openModal = (role: Role) => setSelectedRole(role);
  const closeModal = () => setSelectedRole(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
  }, []);

  useEffect(() => {
    if (selectedRole) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedRole, handleKeyDown]);

  return (
    <section id="roles" className="relative overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '100px', background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F0FF 50%, #EDE5FF 100%)' }}>
      {/* ─── Animated Wave Layers (bigger, more visible) ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <WaveSVG className="top-[30%]" duration={16} opacity={0.07} />
        <WaveSVG className="top-[40%]" delay={4} duration={20} opacity={0.055} flip />
        <WaveSVG className="top-[50%]" delay={7} duration={24} opacity={0.045} />
        <WaveSVG className="top-[60%]" delay={2} duration={18} opacity={0.035} flip />
      </div>

      {/* Decorative dots */}
      <CulturalDots className="absolute top-16 left-8 opacity-40" />
      <CulturalDots className="absolute bottom-20 right-12 opacity-30" />

      <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '1200px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '48px' }}
        >
          <span className="inline-block px-5 py-1.5 rounded-full bg-[#7C3AED]/8 text-[#7C3AED] font-bold text-xs tracking-[0.2em] uppercase mb-4">
            Join the Team
          </span>
          <h2 className="font-bold text-[#111827]" style={{ fontSize: '36px', fontWeight: 700 }}>
            Organizing Committee Roles
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto mt-4" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            Find the role that fits your passion and skills. Click on a role to learn more and apply.
          </p>
        </motion.div>

        {/* ─── Cards Grid ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '28px' }}
        >
          {ROLES.map((role, idx) => {
            const accent = accents[idx % accents.length];
            return (
              <motion.div
                key={role.title}
                variants={cardVariants}
                onClick={() => openModal(role)}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="cursor-pointer group relative"
              >
                {/* Card body */}
                <div
                  className="relative bg-white/80 backdrop-blur-sm border border-white/60 flex flex-col h-full transition-all duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(124,58,237,0.2)] group-hover:border-[#7C3AED]/15"
                  style={{ borderRadius: '20px', padding: '0', overflow: 'hidden' }}
                >
                  {/* Top accent band — gradient bar with cultural pattern */}
                  <div
                    className="relative h-2 transition-all duration-500 group-hover:h-3"
                    style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                  />

                  {/* Card content */}
                  <div style={{ padding: '28px 28px 24px' }} className="flex-1 flex flex-col">
                    {/* Opening badge + Arrow */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide"
                        style={{ background: accent.light, color: accent.from }}
                      >
                        {role.openings} Opening{role.openings > 1 ? 's' : ''}
                      </div>
                      <motion.div
                        className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ backgroundColor: accent.light }}
                      >
                        <ArrowUpRight className="w-4 h-4" style={{ color: accent.from }} />
                      </motion.div>
                    </div>

                    {/* Role title */}
                    <h3 className="text-[17px] font-bold text-[#111827] mb-3 leading-snug group-hover:text-[#5B21B6] transition-colors duration-300">
                      {role.title}
                    </h3>

                    {/* Description preview */}
                    <p className="text-[#9CA3AF] text-[13.5px] leading-relaxed line-clamp-2 mb-6 font-normal">
                      {role.jobDescription[0]}
                    </p>

                    {/* Bottom — Skills preview */}
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {role.skills.slice(0, 3).map((skill, si) => (
                        <span
                          key={si}
                          className="text-[11px] font-medium text-[#7C3AED]/60 bg-[#F8F7FF] px-2.5 py-1 rounded-full border border-[#7C3AED]/6"
                        >
                          {skill.length > 20 ? skill.slice(0, 20) + '…' : skill}
                        </span>
                      ))}
                      {role.skills.length > 3 && (
                        <span className="text-[11px] font-medium text-[#9CA3AF] px-2 py-1">
                          +{role.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom hover bar */}
                  <div
                    className="h-0 group-hover:h-11 overflow-hidden transition-all duration-500 flex items-center justify-center text-white text-sm font-semibold tracking-wide"
                    style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                  >
                    View Details & Apply
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ═══════ Role Detail Modal ═══════ */}
      <AnimatePresence>
        {selectedRole && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/55 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-3xl max-h-[90vh] shadow-2xl relative flex flex-col overflow-hidden"
              style={{ borderRadius: '20px' }}
            >
              {/* Modal Header */}
              <div className="text-white relative flex-shrink-0" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)', padding: '32px' }}>
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 w-9 h-9 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center transition-colors z-20"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-3">{selectedRole.title}</h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs font-semibold">
                  <UsersIcon className="w-3.5 h-3.5" /> {selectedRole.openings} Opening{selectedRole.openings > 1 ? 's' : ''}
                </div>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto bg-white relative" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div>
                    <h4 className="flex items-center gap-2.5 text-lg font-bold text-[#111827] mb-4">
                      <BookOpen className="w-5 h-5 text-[#7C3AED]" /> Job Description
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {selectedRole.jobDescription.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[#6B7280] text-[15px] leading-relaxed">
                          <span className="mt-[8px] w-1.5 h-1.5 bg-[#8B5CF6] rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px' }}>
                    <div>
                      <h4 className="flex items-center gap-2.5 text-lg font-bold text-[#111827] mb-4">
                        <CheckCircle2 className="w-5 h-5 text-[#7C3AED]" /> Skills & Knowledge
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {selectedRole.skills.map((skill, idx) => (
                          <div key={idx} className="text-[#6B7280] bg-[#F8F7FF] border border-[#7C3AED]/8 text-sm font-medium transition-colors hover:border-[#7C3AED]/15" style={{ padding: '10px 16px', borderRadius: '12px' }}>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2.5 text-lg font-bold text-[#111827] mb-4">
                        <Target className="w-5 h-5 text-[#7C3AED]" /> KPIs / MoS
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {selectedRole.kpis.map((kpi, idx) => (
                          <div key={idx} className="text-[#6B7280] bg-[#F8F7FF] border border-[#7C3AED]/8 text-sm font-medium whitespace-normal break-words transition-colors hover:border-[#7C3AED]/15" style={{ padding: '10px 16px', borderRadius: '12px' }}>
                            {kpi}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2.5 text-lg font-bold text-[#111827] mb-4">
                      <GraduationCap className="w-5 h-5 text-[#8B5CF6]" /> Learning Outcomes
                    </h4>
                    <div className="flex flex-wrap" style={{ gap: '10px' }}>
                      {selectedRole.learningOutcomes.map((outcome, idx) => (
                        <span key={idx} className="bg-[#F8F7FF] border border-[#7C3AED]/10 text-[#6B7280] text-sm font-medium transition-colors hover:border-[#7C3AED]/20" style={{ padding: '8px 16px', borderRadius: '12px' }}>
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <a
                      href="https://forms.gle/cWwMryX5tgkW28tq6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-7 py-3 bg-[#7C3AED] text-white font-bold hover:bg-[#6D28D9] transition-all transform active:scale-95 shadow-[0_4px_16px_rgba(124,58,237,0.3)] text-sm tracking-wide"
                      style={{ borderRadius: '12px' }}
                    >
                      Apply for {selectedRole.title.split(' ').slice(0, 2).join(' ')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RolesSection;
