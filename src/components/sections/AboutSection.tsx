import Button from "../ui/Button";
import { aboutImg } from "../../assets/index";

interface AboutCard { icon: string; title: string; text: string; }

const ABOUT_CARDS: AboutCard[] = [
  { icon: "🎯", title: "Our Mission", text: "Empower communities through education, healthcare, and livelihood programs." },
  { icon: "🔭", title: "Our Vision",  text: "An inclusive society where every individual thrives with dignity and opportunity." },
  { icon: "💎", title: "Our Values",  text: "Integrity, compassion, transparency, and community-driven development." },
  { icon: "🤝", title: "Our Reach",   text: "Serving 40+ villages across Karnataka with grassroots initiatives." },
];

export default function AboutSection() {
  return (
    <section id="About">
      <div className="container" style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 48, alignItems: "center",
      }}>
        <div>
          <span className="tag">About Us</span>
          <h2>A Non-Profit Committed to Social Change</h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginTop: 14, marginBottom: 16 }}>
            Shivam Educational and Charitable Trust is a registered non-profit dedicated to serving
            the most vulnerable — underprivileged children, women, the elderly, and differently-abled individuals.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 24 }}>
            We believe every person deserves access to quality education, healthcare, and livelihood
            opportunities regardless of their economic background.
          </p>
          <div style={{
            background: "var(--green-50)", borderLeft: "4px solid var(--green-800)",
            padding: "16px 20px", borderRadius: "0 8px 8px 0", marginBottom: 24,
          }}>
            <strong style={{ color: "var(--green-900)" }}>80G Tax Exemption: </strong>
            Donations made to Shivam Trust are exempted from Income Tax under Section 80G.
          </div>
          <Button onClick={() => document.getElementById("Programs")?.scrollIntoView({ behavior: "smooth" })}>
            Our Programs →
          </Button>
        </div>
        {aboutImg ? (
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
            <img src={aboutImg} alt="Shivam Trust activities"
              style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }} />
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {ABOUT_CARDS.map((card: AboutCard) => (
              <div key={card.title} className="card" style={{ padding: "20px" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{card.icon}</div>
                <div style={{ fontWeight: 700, color: "var(--green-900)", marginBottom: 6 }}>{card.title}</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{card.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}