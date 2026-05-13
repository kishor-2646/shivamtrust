import { TEAM } from "../../data/index";
import type { TeamMember } from "../../types/index";
import SectionHeader from "../ui/SectionHeader";
import { teamImages } from "../../assets/index";

export default function TeamSection() {
  return (
    <section style={{ background: "var(--green-bg)" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <SectionHeader tag="Our People" title="Trust Members" />
        <div className="grid-3" style={{ maxWidth: 700, margin: "36px auto 0" }}>
          {TEAM.map((member: TeamMember) => {
            const imgSrc = teamImages[member.name];
            return (
              <div key={member.name} className="card" style={{ textAlign: "center" }}>
                {imgSrc ? (
                  <img src={imgSrc} alt={member.name} style={{
                    width: 80, height: 80, borderRadius: "50%",
                    objectFit: "cover", margin: "0 auto 14px", display: "block",
                    border: "3px solid var(--green-200, #bbf7d0)",
                  }} />
                ) : (
                  <div style={{
                    width: 70, height: 70, borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--green-800), var(--green-200))",
                    margin: "0 auto 14px", display: "flex", alignItems: "center",
                    justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 22,
                  }}>{member.name[0]}</div>
                )}
                <div style={{ fontWeight: 700, color: "var(--green-900)" }}>{member.name}</div>
                <div style={{ color: "var(--text-light)", fontSize: 13, marginTop: 4 }}>{member.role}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}