// ─────────────────────────────────────────────
//  ASSET MANIFEST
// ─────────────────────────────────────────────

// ── LOGO ──────────────────────────────────────
import logoImg from "./logo/logo.png";
export { logoImg };

// ── HERO ──────────────────────────────────────
import heroBg from "./hero/hero-bg.jpg";
export { heroBg };

// ── ABOUT ─────────────────────────────────────
import aboutImg from "./about/about-photo.jpg";
export { aboutImg };

// ── PROGRAMS ──────────────────────────────────
import educationImg    from "./programs/education.jpg";
import healthcareImg   from "./programs/healthcare.jpg";
import womenImg        from "./programs/women.jpg";
import childImg        from "./programs/child.jpg";
import livelihoodImg   from "./programs/livelihood.jpg";
import differentlyImg  from "./programs/differently-abled.jpg";

export const programImages: Record<string, string> = {
  "Education":           educationImg,
  "Healthcare":          healthcareImg,
  "Women Empowerment":   womenImg,
  "Child Protection":    childImg,
  "Livelihood":          livelihoodImg,
  "Differently Abled":   differentlyImg,
};

// ── GALLERY ───────────────────────────────────
import g1 from "./gallery/education-camp.jpg";
import g2 from "./gallery/medical-drive.jpg";
import g3 from "./gallery/womens-workshop.jpg";
import g4 from "./gallery/child-welfare.jpg";
import g5 from "./gallery/skill-training.jpg";
import g6 from "./gallery/community-meet.jpg";

export const galleryImages: string[] = [g1, g2, g3, g4, g5, g6];

// ── TEAM ──────────────────────────────────────
import founderImg from "./team/founder.jpg";
import ananyaImg  from "./team/ananya.jpg";
import raviImg    from "./team/ravi.jpg";

export const teamImages: Record<string, string> = {
  "Shivam Founder": founderImg,
  "Ananya Sharma":  ananyaImg,
  "Ravi Kumar":     raviImg,
};