import { PROGRAMS } from "../../data/index";
import type { Program } from "../../types/index";
import SectionHeader from "../ui/SectionHeader";
import { programImages } from "../../assets/index";

export default function ProgramsSection() {
  return (
    <section id="Programs" style={{ background: "var(--green-light)" }}>
      <div className="container">
        <SectionHeader tag="What We Do" title="Our Programs"
          subtitle="We run a range of programs to address the multifaceted needs of our communities." />
        <div className="grid-3">
          {PROGRAMS.map((program: Program) => {
            const imgSrc = programImages[program.title];
            return (
              <div key={program.title} className="card" style={{ padding: 0, overflow: "hidden" }}>
                {imgSrc ? (
                  <img src={imgSrc} alt={program.title}
                    style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }} />
                ) : (
                  <div style={{
                    height: 100, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 44, background: "var(--green-50)",
                  }}>{program.icon}</div>
                )}
                <div style={{ padding: "18px 20px 22px" }}>
                  <h3 style={{ color: "var(--green-900)", marginBottom: 10, fontSize: "1.05rem" }}>{program.title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7 }}>{program.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}