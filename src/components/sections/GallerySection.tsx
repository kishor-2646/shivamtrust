import { GALLERY_ITEMS } from "@/data/index";
import type { GalleryItem } from "@/types/index";
import SectionHeader from "@/components/ui/SectionHeader";
import { galleryImages } from "@/assets/index";

export default function GallerySection() {
  return (
    <section id="Gallery">
      <div className="container">
        <SectionHeader tag="Gallery" title="Our Work in Pictures" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16, marginTop: 36,
        }}>
          {GALLERY_ITEMS.map((item: GalleryItem, i: number) => {
            const imgSrc = galleryImages[i];
            return imgSrc ? (
              <div
                key={i}
                style={{
                  borderRadius: 12, overflow: "hidden", height: 200,
                  cursor: "pointer", transition: "transform 0.2s",
                  position: "relative", boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={imgSrc}
                  alt={item.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
                  padding: "20px 12px 10px",
                  color: "#fff", fontWeight: 600, fontSize: 13,
                }}>
                  {item.label}
                </div>
              </div>
            ) : (
              <div
                key={i}
                style={{
                  background: item.bg, borderRadius: 12, height: 180,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  gap: 10, cursor: "pointer", transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div style={{ fontSize: 44 }}>{item.icon}</div>
                <div style={{ fontWeight: 600, color: "#333", fontSize: 14 }}>{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}