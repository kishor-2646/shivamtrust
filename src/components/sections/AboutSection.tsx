import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { aboutImg, galleryImages } from "../../assets/index";

const PILLARS = [
  { icon: "🎯", title: "Mission",   text: "Empower communities through education, healthcare, and livelihood programs." },
  { icon: "🔭", title: "Vision",    text: "An inclusive society where every individual thrives with dignity and opportunity." },
  { icon: "💎", title: "Values",    text: "Integrity, compassion, transparency, and community-driven development." },
  { icon: "🌍", title: "Reach",     text: "Serving 40+ villages across Karnataka with grassroots initiatives." },
];

const HIGHLIGHTS = [
  { num: "2006", label: "Est." },
  { num: "80G",  label: "Tax Exempt" },
  { num: "NGO",  label: "Registered" },
];

const CAROUSEL_IMAGES = [aboutImg, ...galleryImages.slice(0, 5)].filter(Boolean);

export default function AboutSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % CAROUSEL_IMAGES.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="About" style={{ background: "#fff", padding: "80px 0", overflow: "hidden" }}>
      <style>{`
        .about-pillar {
          display: flex; gap: 12px; align-items: flex-start;
          padding: 14px 16px; border-radius: 10px;
          background: #f8f4ee;
          border: 1px solid #e8ddd0;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .about-pillar:hover {
          background: #f0e9df;
          border-color: #c9956a;
          transform: translateX(4px);
        }
        .dot-btn {
          width: 8px; height: 8px; border-radius: 50%; border: none; cursor: pointer;
          transition: background 0.2s, transform 0.2s; padding: 0;
        }
        .dot-btn:hover { transform: scale(1.3); }
        .img-thumb {
          width: 56px; height: 56px; border-radius: 7px; object-fit: cover;
          cursor: pointer; opacity: 0.55;
          border: 2px solid transparent;
          transition: opacity 0.2s, border-color 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .img-thumb.active { opacity: 1; border-color: #c9956a; transform: scale(1.08); }
        .img-thumb:hover { opacity: 0.85; }
      `}</style>

      <div className="container" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "start",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 60px",
        boxSizing: "border-box",
      }}>

        {/* ── LEFT — text content ── */}
        <div>
          <span style={{
            display: "inline-block", padding: "5px 16px",
            borderRadius: 20, fontSize: 12, fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase" as const,
            background: "#fdf0e6",
            color: "#b5692a",
            border: "1px solid #f0cba8",
            marginBottom: 20,
          }}>About Us</span>

          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800,
            color: "#1a1a1a", lineHeight: 1.2, margin: "0 0 20px",
            letterSpacing: "-0.02em",
          }}>
            A Non-Profit Committed<br />to Social Change
          </h2>

          <p style={{ color: "#555", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: 14 }}>
            Shivam Educational and Charitable Trust is a registered non-profit dedicated to serving
            the most vulnerable — underprivileged children, women, the elderly, and differently-abled individuals.
          </p>
          <p style={{ color: "#555", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: 28 }}>
            We believe every person deserves access to quality education, healthcare, and livelihood
            opportunities regardless of their economic background.
          </p>

          {/* Quick highlights */}
          <div style={{ display: "flex", gap: 16, marginBottom: 28 }}>
            {HIGHLIGHTS.map(h => (
              <div key={h.label} style={{
                textAlign: "center", padding: "12px 20px",
                background: "#fdf0e6",
                border: "1px solid #f0cba8",
                borderRadius: 10,
              }}>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#b5692a" }}>{h.num}</div>
                <div style={{ fontSize: 11, color: "#999", marginTop: 2, letterSpacing: "0.05em" }}>{h.label}</div>
              </div>
            ))}
          </div>

          {/* 80G badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            background: "#fdf0e6",
            border: "1px solid #f0cba8",
            borderRadius: 10, padding: "14px 18px", marginBottom: 32,
          }}>
            <span style={{ fontSize: 22 }}>🏦</span>
            <div>
              <span style={{ fontWeight: 700, color: "#b5692a", fontSize: 14 }}>80G Tax Exemption — </span>
              <span style={{ color: "#666", fontSize: 14 }}>Donations are exempted from Income Tax under Section 80G.</span>
            </div>
          </div>

          <Button onClick={() => document.getElementById("Programs")?.scrollIntoView({ behavior: "smooth" })}>
            Our Programs →
          </Button>
        </div>

        {/* ── RIGHT — carousel + pillars below ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Main image carousel */}
          <div style={{
            position: "relative", borderRadius: 18, overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0,0,0,0.14)",
            aspectRatio: "4/3",
          }}>
            {CAROUSEL_IMAGES.map((img, i) => (
              <img key={i} src={img} alt={`About ${i}`}
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%", objectFit: "cover",
                  transition: "opacity 0.7s ease",
                  opacity: i === current ? 1 : 0,
                }}
              />
            ))}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)",
              zIndex: 1,
            }} />
            <div style={{
              position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)",
              display: "flex", gap: 6, zIndex: 2,
            }}>
              {CAROUSEL_IMAGES.map((_, i) => (
                <button key={i} className="dot-btn"
                  onClick={() => setCurrent(i)}
                  style={{ background: i === current ? "#c9956a" : "rgba(255,255,255,0.5)" }}
                />
              ))}
            </div>
            {["‹", "›"].map((arrow, idx) => (
              <button key={arrow}
                onClick={() => setCurrent(c => idx === 0 ? (c - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length : (c + 1) % CAROUSEL_IMAGES.length)}
                style={{
                  position: "absolute", top: "50%", transform: "translateY(-50%)",
                  [idx === 0 ? "left" : "right"]: 12,
                  zIndex: 2, background: "rgba(0,0,0,0.3)", border: "none",
                  color: "#fff", fontSize: 24, width: 36, height: 36,
                  borderRadius: "50%", cursor: "pointer", lineHeight: 1,
                  backdropFilter: "blur(4px)",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.6)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.3)")}
              >{arrow}</button>
            ))}
          </div>

          {/* Thumbnail strip */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {CAROUSEL_IMAGES.map((img, i) => (
              <img key={i} src={img} alt={`Thumb ${i}`}
                className={`img-thumb${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          {/* Mission / Vision / Values / Reach — 2x2 grid below carousel */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 4 }}>
            {PILLARS.map(p => (
              <div key={p.title} className="about-pillar">
                <span style={{ fontSize: 20, lineHeight: 1, flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: "#1a1a1a", fontSize: 13, marginBottom: 3 }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: "#777", lineHeight: 1.55 }}>{p.text}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}