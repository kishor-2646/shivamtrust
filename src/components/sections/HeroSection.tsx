import Button from "../ui/Button";
import { heroBg } from "../../assets/index";
import { STATS } from "../../data/index";
import type { Stat } from "../../types/index";

export default function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="Home" style={{
      position: "relative",
      background: heroBg ? undefined : "linear-gradient(135deg, var(--green-900) 0%, var(--green-800) 50%, var(--green-600) 100%)",
      color: "#fff",
      overflow: "hidden",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
    }}>
      <style>{`
        .stat-item { transition: color 0.25s ease; cursor: default; }
        .stat-item:hover .stat-num { color: #4ade80 !important; text-shadow: 0 0 16px rgba(74,222,128,0.5) !important; }
        .stat-item:hover .stat-label { color: #86efac !important; }
      `}</style>

      {/* Background */}
      {heroBg && (
        <>
          <div style={{
            position: "absolute", inset: -6,
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
            filter: "blur(2px)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(0,0,0,0.48)",
            zIndex: 1,
          }} />
        </>
      )}

      {/* Two-column layout */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex",
        alignItems: "center",
        padding: "148px 60px 60px",
        gap: 56,
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
      }}>

        {/* LEFT — big tagline + buttons */}
        <div style={{ flex: "0 0 58%", maxWidth: "58%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{
            fontSize: "clamp(3rem, 6vw, 5.2rem)",
            fontWeight: 900,
            lineHeight: 1.08,
            margin: "0 0 40px 0",
            letterSpacing: "-0.02em",
            textShadow: "0 4px 24px rgba(0,0,0,0.5)",
            background: "linear-gradient(135deg, #ffffff 0%, #bbf7d0 55%, #4ade80 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Transforming<br />
            Lives Through<br />
            Education<br />
            &amp; Compassion
          </h1>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Button variant="white" onClick={() => scrollTo("Contact")}>Donate Now 💚</Button>
            <Button variant="outline" style={{ borderColor: "#fff", color: "#fff" }} onClick={() => scrollTo("About")}>
              Learn More
            </Button>
          </div>
        </div>

        {/* RIGHT — tagline badge + description + stats */}
        <div style={{
          flex: 1,
          display: "flex", flexDirection: "column", justifyContent: "center",
          gap: 0,
        }}>
          <span style={{
            background: "rgba(255,255,255,0.15)", color: "#d1fae5",
            padding: "6px 18px", borderRadius: 20, fontSize: 13,
            display: "inline-block", marginBottom: 22,
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255,255,255,0.2)",
            width: "fit-content",
            letterSpacing: "0.03em",
          }}>🌿 Empowering Communities Since 2006</span>

          <p style={{
            fontSize: "1.2rem",
            opacity: 0.95,
            lineHeight: 1.85,
            margin: "0 0 36px 0",
            textShadow: "0 1px 8px rgba(0,0,0,0.4)",
            color: "#f0fdf4",
          }}>
            Shivam Educational &amp; Charitable Trust works to uplift underprivileged
            children, women, and differently-abled individuals through sustainable
            development programs.
          </p>

          {/* Stats 2x2 */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "22px 32px",
          }}>
            {STATS.map((stat: Stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-num" style={{
                  fontSize: "2.1rem", fontWeight: 700, color: "#fff",
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                  transition: "color 0.25s ease, text-shadow 0.25s ease",
                }}>{stat.num}</div>
                <div className="stat-label" style={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: 14, marginTop: 3,
                  transition: "color 0.25s ease",
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}