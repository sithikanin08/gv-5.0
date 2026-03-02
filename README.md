# 🌍 Global Village 5.0

**AIESEC in SLIIT's Flagship Cultural Event — Organizing Committee Recruitment Website**

A modern, responsive recruitment website for Global Village 5.0, built to attract and onboard organizing committee members for AIESEC in SLIIT's premier cultural event.

---

## ✨ Features

- **Hero Section** — Animated landing with Kaushan Script typography and call-to-action buttons
- **About Section** — 14-image auto-playing slideshow with clip-path wipe transitions and unique captions
- **Roles Section** — Interactive role cards with glassmorphic design, animated waves, staggered reveals, and detail modals
- **Timeline Section** — Key dates for the OC application process
- **Contact Section** — Team lead profiles with half-card image layouts
- **Footer** — AIESEC branding with logo row and organization description
- **Responsive Navbar** — Glassmorphic pill navbar with scroll-adaptive colors and purple hover states

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2 | UI framework |
| TypeScript | 5.9 | Type safety |
| Vite | 7.3 | Build tool & dev server |
| Tailwind CSS | 4.2 | Utility-first styling |
| Framer Motion | 12.34 | Animations & transitions |
| Lucide React | 0.575 | Icon library |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/sithikanin08/GV_5.0.git
cd GV_5.0/global-village

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
global-village/
├── public/
│   └── GvLogo.png
├── src/
│   ├── assets/          # Images (GV1-14, logos, contact photos)
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── AboutSection.tsx
│   │   ├── RolesSection.tsx
│   │   ├── TimelineSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── constants/
│   │   └── departments.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#7C3AED` (purple) |
| Dark background | `#0F0720` |
| Text primary | `#111827` |
| Text secondary | `#6B7280` |
| Light surface | `#F8F7FF` |
| Container max-width | `1200px` |
| Section padding | `80px` top/bottom |
| Border radius | `16px` / `20px` |
| Fonts | Inter, Montserrat, Kaushan Script |

## 📝 Apply Link

All "Apply" buttons link to the Google Form:
`https://forms.gle/cWwMryX5tgkW28tq6`

---

**© 2026 AIESEC in SLIIT • Global Village 5.0 Core Team**