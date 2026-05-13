import { NAV_LINKS } from "../../data/index";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      background: "var(--green-900)", color: "#fff",
      padding: "40px 24px", textAlign: "center",
    }}>
      <div className="container">
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>
          Shivam Educational &amp; Charitable Trust
        </div>
        <div style={{ opacity: 0.75, fontSize: 13, marginBottom: 16 }}>
          shivameducationalandcharitabletrust@gmail.com &nbsp;|&nbsp; Karnataka, India
        </div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
          {NAV_LINKS.map((link: string) => (
            <span key={link} onClick={() => scrollTo(link)}
              style={{ cursor: "pointer", fontSize: 13, opacity: 0.8 }}>
              {link}
            </span>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 16, fontSize: 12, opacity: 0.6 }}>
          © {new Date().getFullYear()} Shivam Educational &amp; Charitable Trust.
          All rights reserved. | 80G Registered NGO
        </div>
      </div>
    </footer>
  );
}