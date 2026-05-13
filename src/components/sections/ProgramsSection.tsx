import { useState } from "react";
import { PROGRAMS } from "../../data/index";
import type { Program } from "../../types/index";
import SectionHeader from "../ui/SectionHeader";
import { programImages } from "../../assets/index";

// Accent colors per card — warm, distinct palette
const ACCENTS = [
  { bg: "linear-gradient(160deg,#1a3a5c,#0d2035)", tag: "#60a5fa", tagBg: "rgba(96,165,250,0.15)" },
  { bg: "linear-gradient(160deg,#3b1f0a,#1f0d02)", tag: "#fb923c", tagBg: "rgba(251,146,60,0.15)" },
  { bg: "linear-gradient(160deg,#0f2e1e,#071a10)", tag: "#34d399", tagBg: "rgba(52,211,153,0.15)" },
  { bg: "linear-gradient(160deg,#2e1a40,#180a28)", tag: "#c084fc", tagBg: "rgba(192,132,252,0.15)" },
  { bg: "linear-gradient(160deg,#3b1a20,#200b0e)", tag: "#f87171", tagBg: "rgba(248,113,113,0.15)" },
  { bg: "linear-gradient(160deg,#1e2e10,#0e1807)", tag: "#a3e635", tagBg: "rgba(163,230,53,0.15)"  },
];

export default function ProgramsSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="Programs" style={{ background: "#0a0a0a", padding: "90px 0" }}>
      <style>{`
        .prog-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
          flex-shrink: 0;
          height: 420px;
        }
        .prog-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 32px 64px rgba(0,0,0,0.6);
          z-index: 2;
        }
        .prog-card .prog-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease, opacity 0.4s ease;
          opacity: 0.45;
        }
        .prog-card:hover .prog-img {
          transform: scale(1.08);
          opacity: 0.3;
        }
        .prog-card .prog-overlay {
          position: absolute; inset: 0;
          transition: opacity 0.4s ease;
        }
        .prog-card .prog-content {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          justify-content: flex-end;
          padding: 28px 24px;
        }
        .prog-card .prog-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transform: translateY(8px);
          transition: max-height 0.4s ease, opacity 0.35s ease, transform 0.35s ease;
          margin-top: 0;
        }
        .prog-card:hover .prog-desc {
          max-height: 100px;
          opacity: 1;
          transform: translateY(0);
          margin-top: 10px;
        }
        .prog-card .prog-arrow {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.3);
          color: #fff; font-size: 14px;
          opacity: 0; transform: translateX(-6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          margin-top: 14px;
        }
        .prog-card:hover .prog-arrow {
          opacity: 1; transform: translateX(0);
        }
        .prog-icon-ring {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
          border: 1.5px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(4px);
          transition: transform 0.3s ease;
        }
        .prog-card:hover .prog-icon-ring { transform: scale(1.1) rotate(8deg); }
      `}</style>

      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 60px", boxSizing: "border-box" }}>
        <SectionHeader
          tag="What We Do"
          title="Our Programs"
          subtitle="We run a range of programs to address the multifaceted needs of our communities."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginTop: 48,
        }}>
          {PROGRAMS.map((program: Program, idx: number) => {
            const imgSrc = programImages[program.title];
            const accent = ACCENTS[idx % ACCENTS.length];

            return (
              <div
                key={program.title}
                className="prog-card"
                onMouseEnter={() => setHovered(program.title)}
                onMouseLeave={() => setHovered(null)}
                style={{ background: accent.bg }}
              >
                {/* Photo */}
                {imgSrc && (
                  <img src={imgSrc} alt={program.title} className="prog-img" />
                )}

                {/* Gradient overlay */}
                <div className="prog-overlay" style={{
                  background: `linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)`,
                }} />

                {/* Content */}
                <div className="prog-content">
                  {/* Icon */}
                  <div className="prog-icon-ring">{program.icon}</div>

                  {/* Tag pill */}
                  <span style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: accent.tag,
                    background: accent.tagBg,
                    border: `1px solid ${accent.tag}40`,
                    marginBottom: 10,
                    width: "fit-content",
                  }}>Program</span>

                  {/* Title */}
                  <h3 style={{
                    color: "#fff", margin: 0,
                    fontSize: "1.25rem", fontWeight: 800,
                    lineHeight: 1.2, letterSpacing: "-0.01em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                  }}>{program.title}</h3>

                  {/* Description — reveals on hover */}
                  <p className="prog-desc">{program.desc}</p>

                  {/* Arrow */}
                  <div className="prog-arrow">→</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}