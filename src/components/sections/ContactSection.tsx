import { useState } from "react";
import { CONTACT_INFO } from "../../data/index";
import type { ContactForm, ContactInfo } from "../../types/index";
import Button from "../ui/Button";

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.msg) {
      setSent(true);
      setForm({ name: "", email: "", msg: "" });
    }
  };

  return (
    <section id="Contact">
      <div className="container" style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48,
      }}>
        <div>
          <span className="tag">Get Involved</span>
          <h2>Contact &amp; Donate</h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 28 }}>
            Whether you want to donate, volunteer, or partner with us — we'd love to hear from you.
          </p>
          {CONTACT_INFO.map((info: ContactInfo) => (
            <div key={info.label} style={{ display: "flex", gap: 14, marginBottom: 18, alignItems: "flex-start" }}>
              <span style={{ fontSize: 22 }}>{info.icon}</span>
              <div>
                <div style={{ fontWeight: 700, color: "var(--green-900)", fontSize: 14 }}>{info.label}</div>
                <div style={{ color: "var(--text-muted)", fontSize: 14 }}>{info.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {sent ? (
            <div className="card" style={{ textAlign: "center", padding: "48px 24px" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ color: "var(--green-800)", marginBottom: 8 }}>Thank You!</h3>
              <p style={{ color: "var(--text-muted)" }}>We've received your message and will get back to you soon.</p>
              <Button style={{ marginTop: 20 }} onClick={() => setSent(false)}>Send Another</Button>
            </div>
          ) : (
            <div className="card">
              <h3 style={{ color: "var(--green-900)", marginBottom: 20 }}>Send a Message</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <input placeholder="Your Name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input placeholder="Your Email" type="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <textarea placeholder="Your Message / Donation Intent" rows={4} value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })} />
                <Button onClick={handleSubmit}>Send Message →</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}