import React from 'react';
import GvLogo from '../assets/GvLogo.png';
import AiesecSliitLogo from '../assets/aiesec in sliit - blue.png';
import AiesecLogo from '../assets/White-Blue-Logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F0720] text-white" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        {/* Logo Row */}
        <div className="flex items-center justify-center flex-wrap" style={{ gap: '48px', marginBottom: '36px' }}>
          <img
            src={AiesecLogo}
            alt="AIESEC"
            className="h-10 md:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src={AiesecSliitLogo}
            alt="AIESEC in SLIIT"
            className="h-10 md:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src={GvLogo}
            alt="Global Village 5.0"
            className="h-10 md:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Description */}
        <p className="text-[#9CA3AF] text-sm leading-relaxed text-center max-w-3xl mx-auto" style={{ marginBottom: '36px' }}>
          AIESEC in SLIIT is a local chapter of AIESEC Sri Lanka, a non-governmental not-for-profit organization. AIESEC is a global youth-led organization striving to achieve peace and fulfillment of humankind's potential by activating leadership qualities in youth through learning from practical experiences in challenging environments. Together with partner organizations, AIESEC facilitates a network of cross-cultural exchanges in the form of volunteering experiences and professional internships.
        </p>

        {/* Divider */}
        <div className="flex justify-center" style={{ marginBottom: '24px' }}>
          <div className="w-16 h-0.5 bg-[#7C3AED]/40 rounded-full" />
        </div>

        {/* Copyright */}
        <p className="text-[#6B7280] text-xs text-center tracking-wide">
          © 2026 Organized by AIESEC in SLIIT. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
