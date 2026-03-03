import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import petharaImg from '../assets/prthara.png';
import bawanthaImg from '../assets/bawantha.png';
import nadaliImg from '../assets/nadali.png';

const contacts = [
    {
        name: "Pethara Ranasinghe",
        role: "LCVP Finance & Legal",
        email: "pethara21@aiesec.net",
        phone: "+94 74 199 3650",
        image: petharaImg,
    },
    {
        name: "Bawantha Jayanath",
        role: "LCVP oGTa",
        email: "bawantha2819@aiesec.net",
        phone: "+94 76 336 8848",
        image: bawanthaImg,
    },
    {
        name: "Nadali Hansani",
        role: "LCVP oGV B2C",
        email: "nadalihansani@aiesec.net",
        phone: "+94 71 694 6480",
        image: nadaliImg,
    },
];

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="bg-white relative" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
                {/* Section Header */}
                <div className="text-center" style={{ marginBottom: '40px' }}>
                    <span className="text-[#7C3AED] font-bold text-xs tracking-[0.2em] uppercase block mb-3">Reach Out</span>
                    <h2 className="font-bold text-[#111827]" style={{ fontSize: '36px', fontWeight: 700 }}>
                        Get in Touch
                    </h2>
                    <p className="text-[#6B7280] max-w-2xl mx-auto mt-4" style={{ fontSize: '16px', lineHeight: 1.7 }}>
                        Have questions about roles or the event? Reach out to our event managers.
                    </p>
                </div>

                {/* Contact Cards — image takes top half */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3"
                    style={{ gap: '24px' }}
                >
                    {contacts.map((contact, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="group overflow-hidden border border-[#7C3AED]/8 hover:border-[#7C3AED]/20 transition-all hover:shadow-xl bg-white"
                            style={{ borderRadius: '20px' }}
                        >
                            {/* Top half — Image */}
                            <div className="relative overflow-hidden" style={{ height: '260px' }}>
                                <img
                                    src={contact.image}
                                    alt={contact.name}
                                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center 30%',
                                        display: 'block',
                                    }}
                                />
                                {/* Gradient fade at bottom */}
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                            </div>

                            {/* Bottom half — Info */}
                            <div className="text-center" style={{ padding: '20px 24px 28px' }}>
                                <h3 className="text-lg font-bold text-[#111827] mb-1">{contact.name}</h3>
                                <p className="text-[#7C3AED] font-semibold text-sm mb-5">{contact.role}</p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="flex items-center gap-3 text-[#6B7280] hover:text-[#7C3AED] transition-colors text-sm"
                                    >
                                        <Mail className="w-4 h-4 flex-shrink-0" />
                                        <span>{contact.email}</span>
                                    </a>
                                    <a
                                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                                        className="flex items-center gap-3 text-[#6B7280] hover:text-[#7C3AED] transition-colors text-sm"
                                    >
                                        <Phone className="w-4 h-4 flex-shrink-0" />
                                        <span>{contact.phone}</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
