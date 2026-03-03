import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mic, GraduationCap, Megaphone, Users, CalendarCheck, PartyPopper, Trophy } from 'lucide-react';

const timelineItems = [
    {
        date: "3rd March",
        title: "Application Opening",
        description: "OC recruitment portal opens for all SLIIT students to apply for their preferred roles.",
        icon: FileText,
    },
    {
        date: "8th March",
        title: "OCP Deadline",
        description: "Last day to submit applications for the Organizing Committee President position.",
        icon: Megaphone,
    },
    {
        date: "8th – 10th March",
        title: "OCP Interviews",
        description: "Shortlisted OCP candidates undergo interviews with the core team.",
        icon: Mic,
    },
    {
        date: "10th March",
        title: "OCP Announcement",
        description: "The selected Organizing Committee President is officially announced.",
        icon: Trophy,
    },
    {
        date: "12th March",
        title: "OCVPs Deadline",
        description: "Last day to submit applications for OCVP (Vice President) positions.",
        icon: CalendarCheck,
    },
    {
        date: "13th – 15th March",
        title: "OCVP Interviews",
        description: "Shortlisted OCVP candidates undergo interviews for role-matching.",
        icon: Users,
    },
    {
        date: "15th March",
        title: "OC Announcement",
        description: "The full Organizing Committee is officially announced.",
        icon: GraduationCap,
    }
];

const TimelineSection: React.FC = () => {
    return (
        <section id="timeline" className="relative" style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#F8F7FF' }}>
            <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
                {/* Section Header */}
                <div className="text-center" style={{ marginBottom: '40px' }}>
                    <span className="text-[#7C3AED] font-bold text-xs tracking-[0.2em] uppercase block mb-3">Deadlines</span>
                    <h2 className="font-bold text-[#111827]" style={{ fontSize: '36px', fontWeight: 700 }}>
                        Deadlines for GV 5.0
                    </h2>
                    <p className="text-[#6B7280] max-w-2xl mx-auto mt-4" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                        Key milestones and deadlines on the road to Global Village 5.0.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#7C3AED]/15 md:-translate-x-px" />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {timelineItems.map((item, idx) => {
                            const Icon = item.icon;
                            const isLeft = idx % 2 === 0;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                                    className={`relative flex items-start md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-[#7C3AED] rounded-full -translate-x-1/2 mt-1 md:mt-0 z-10 shadow-[0_0_12px_rgba(124,58,237,0.4)]" />

                                    {/* Card */}
                                    <div className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? 'md:pr-0' : 'md:pl-0'}`}>
                                        <div
                                            className="bg-white border border-gray-100 hover:border-[#7C3AED]/15 transition-colors"
                                            style={{ padding: '24px', borderRadius: '16px', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-9 h-9 bg-[#F8F7FF] rounded-xl flex items-center justify-center">
                                                    <Icon className="w-4 h-4 text-[#7C3AED]" />
                                                </div>
                                                <span className="text-xs font-semibold text-[#7C3AED] tracking-wide uppercase">{item.date}</span>
                                            </div>
                                            <h3 className="text-base font-bold text-[#111827] mb-2">{item.title}</h3>
                                            <p className="text-sm text-[#6B7280] leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
