import Button from "../ui/Button";
import { heroBg } from "../../assets/index";

export default function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="Home" style={{
      position: "relative",
      background: heroBg ? undefined : "linear-gradient(135deg, var(--green-900) 0%, var(--green-800) 50%, var(--green-600) 100%)",
      color: "#fff", padding: "100px 20px", textAlign: "center",
      overflow: "hidden", minHeight: 480, display: "flex", alignItems: "center",
    }}>
      {heroBg && (
        <>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(27,67,50,0.82) 0%, rgba(20,83,45,0.75) 100%)",
            zIndex: 1,
          }} />
        </>
      )}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <span style={{
          background: "rgba(255,255,255,0.2)", color: "#fff",
          padding: "5px 16px", borderRadius: 20, fontSize: 13,
          display: "inline-block", marginBottom: 20,
        }}>🌿 Empowering Communities Since 2006</span>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: 20 }}>
          Transforming Lives Through<br />Education &amp; Compassion
        </h1>
        <p style={{ fontSize: "1.1rem", opacity: 0.9, maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.7 }}>
          Shivam Educational &amp; Charitable Trust works to uplift underprivileged
          children, women, and differently-abled individuals through sustainable development programs.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="white" onClick={() => scrollTo("Contact")}>Donate Now 💚</Button>
          <Button variant="outline" style={{ borderColor: "#fff", color: "#fff" }} onClick={() => scrollTo("About")}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}