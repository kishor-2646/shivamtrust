import { NAV_LINKS } from "../../data/index";
import { logoImg } from "../../assets/index";

interface NavbarProps {
  active: string;
  onNavClick: (section: string) => void;
}

export default function Navbar({ active, onNavClick }: NavbarProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onNavClick(id);
  };

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "var(--white)", borderBottom: "1px solid var(--green-50)",
      padding: "14px 24px",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {logoImg ? (
            <img src={logoImg} alt="Shivam Trust Logo"
              style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }} />
          ) : (
            <div style={{
              width: 44, height: 44,
              background: "linear-gradient(135deg, var(--green-800), var(--green-400))",
              borderRadius: "50%", display: "flex", alignItems: "center",
              justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 18,
            }}>S</div>
          )}
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.2 }}>Shivam Educational</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)" }}>&amp; Charitable Trust</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" }}>
          {NAV_LINKS.map((link: string) => (
            <span key={link} onClick={() => scrollTo(link)} style={{
              cursor: "pointer", padding: "8px 14px", borderRadius: "var(--radius-sm)",
              fontSize: 15, transition: "background 0.2s",
              background: active === link ? "var(--green-50)" : "transparent",
              color: active === link ? "var(--green-800)" : "inherit",
            }}>
              {link}
            </span>
          ))}
          <button className="btn btn-green"
            style={{ marginLeft: 8, padding: "8px 18px", fontSize: 14 }}
            onClick={() => scrollTo("Contact")}>
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
}