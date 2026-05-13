import { URGENT_NEEDS } from "../../data/index";
import type { UrgentNeed } from "../../types/index";
import Button from "../ui/Button";

export default function UrgentNeedsSection() {
  return (
    <section style={{ background: "var(--orange-bg)" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <span className="tag" style={{ background: "var(--orange-tag)", color: "var(--orange-text)" }}>Urgent</span>
        <h2 style={{ color: "var(--orange-dark)" }}>Immediate Requirements</h2>
        <div className="grid-3" style={{ marginTop: 28 }}>
          {URGENT_NEEDS.map((need: UrgentNeed, i: number) => (
            <div key={i} style={{
              background: "var(--white)", borderRadius: 12, padding: "24px 20px",
              boxShadow: "var(--shadow-sm)", textAlign: "center",
            }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{need.icon}</div>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: 14 }}>{need.text}</p>
            </div>
          ))}
        </div>
        <Button style={{ marginTop: 36 }}
          onClick={() => document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" })}>
          Help Us Now
        </Button>
      </div>
    </section>
  );
}