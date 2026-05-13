import { STATS } from "../../data/index";
import type { Stat } from "../../types/index";

export default function StatsSection() {
  return (
    <section style={{ background: "var(--green-bg)", padding: "48px 20px" }}>
      <div className="container">
        <div className="grid-4">
          {STATS.map((stat: Stat) => (
            <div key={stat.label} style={{ textAlign: "center", padding: "20px" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 700, color: "var(--green-800)" }}>{stat.num}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 15, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}