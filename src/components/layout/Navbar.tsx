import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/index";
import { logoImg } from "../../assets/index";

interface NavbarProps {
  active: string;
  onNavClick: (section: string) => void;
}

export default function Navbar({ active, onNavClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("Home");
    const onScroll = () => {
      const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom : 0;
      setScrolled(heroBottom <= 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onNavClick(id);
  };

  // Over hero = white text, scrolled past hero = dark text
  const linkColor = scrolled ? "#166534" : "#fff";
  const subColor  = scrolled ? "#4b7a5a" : "rgba(255,255,255,0.75)";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      height: 64,
      padding: "0 32px",
      display: "flex",
      alignItems: "center",
      overflow: "visible",
      transition: "background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
      background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent",
      boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.10)" : "none",
    }}>
      <style>{`
        .nav-link {
          cursor: pointer;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          transition: background 0.2s, color 0.2s;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .nav-link:hover { background: rgba(0,0,0,0.07); }
        .nav-link.active {
          background: rgba(22,101,52,0.12);
          box-shadow: inset 0 0 0 1px rgba(22,101,52,0.2);
        }
        .nav-donate {
          margin-left: 10px;
          padding: 8px 20px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0,0,0,0.15);
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s, color 0.2s;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
        .nav-donate:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 18px rgba(0,0,0,0.2);
        }
      `}</style>

      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        width: "100%", maxWidth: 1280, margin: "0 auto",
      }}>
        {/* Brand — logo overflows the bar, text stays inside */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, position: "relative" }}>
          {logoImg ? (
            <img
              src={logoImg}
              alt="Shivam Trust Logo"
              style={{
                width: 132, height: 132,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid rgba(255,255,255,0.5)",
                boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
                marginTop: 68,   /* overflow below the 64px bar */
                flexShrink: 0,
                position: "relative",
                zIndex: 101,
              }}
            />
          ) : (
            <div style={{
              width: 132, height: 132,
              background: "linear-gradient(135deg, var(--green-800), var(--green-400))",
              borderRadius: "50%", display: "flex", alignItems: "center",
              justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 48,
              marginTop: 68, flexShrink: 0,
            }}>S</div>
          )}
          {/* Text anchored inside the 64px bar */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{
              fontWeight: 700, fontSize: 15, lineHeight: 1.2,
              color: linkColor,
              textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.3)",
              transition: "color 0.35s",
              whiteSpace: "nowrap",
            }}>Shivam Educational</span>
            <span style={{
              fontSize: 11,
              color: subColor,
              transition: "color 0.35s",
              whiteSpace: "nowrap",
            }}>&amp; Charitable Trust</span>
          </div>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "nowrap" }}>
          {NAV_LINKS.map((link: string) => (
            <span
              key={link}
              className={`nav-link${active === link ? " active" : ""}`}
              onClick={() => scrollTo(link)}
              style={{ color: linkColor, transition: "color 0.35s" }}
            >
              {link}
            </span>
          ))}
          <button
            className="nav-donate"
            onClick={() => scrollTo("Contact")}
            style={{
              background: scrolled ? "#166534" : "rgba(255,255,255,0.92)",
              color: scrolled ? "#fff" : "#166534",
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
}