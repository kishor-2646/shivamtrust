# Shivam Educational & Charitable Trust — Website

Official website for **Shivam Educational and Charitable Trust**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build     # Outputs to /dist
npm run preview   # Preview production build locally
```

---

## 🗂️ Project Structure

```
shivam-trust/
├── public/
│   └── favicon.svg              # Site favicon
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky navigation bar
│   │   │   └── Footer.tsx       # Site footer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Landing hero
│   │   │   ├── StatsSection.tsx      # Impact numbers
│   │   │   ├── AboutSection.tsx      # Mission / vision
│   │   │   ├── ProgramsSection.tsx   # 6 program cards
│   │   │   ├── UrgentNeedsSection.tsx # Urgent donation appeal
│   │   │   ├── GallerySection.tsx    # Photo gallery grid
│   │   │   ├── TeamSection.tsx       # Trust members
│   │   │   └── ContactSection.tsx    # Contact form + info
│   │   └── ui/
│   │       ├── Button.tsx        # Reusable button
│   │       └── SectionHeader.tsx # Reusable section title block
│   ├── data/
│   │   └── index.ts             # ✏️  All site content lives here
│   ├── styles/
│   │   └── globals.css          # CSS variables + global styles
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   ├── App.tsx                  # Root component
│   └── main.tsx                 # React entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## ✏️ How to Edit Content

All text, numbers, and data are in **`src/data/index.ts`** — no need to touch component files for content updates.

| What to update | Where |
|---|---|
| Nav links | `NAV_LINKS` array |
| Programs | `PROGRAMS` array |
| Impact stats | `STATS` array |
| Team members | `TEAM` array |
| Gallery items | `GALLERY_ITEMS` array |
| Urgent needs | `URGENT_NEEDS` array |
| Contact info | `CONTACT_INFO` array |

## 🎨 How to Change Colors / Styles

All design tokens (colors, spacing, shadows) are CSS variables in **`src/styles/globals.css`** under `:root { ... }`.

---

## 📬 Contact

**Email:** shivameducationalandcharitabletrust@gmail.com
