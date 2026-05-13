interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  tagStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
}

export default function SectionHeader({ tag, title, subtitle, tagStyle, titleStyle }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: 8 }}>
      <span className="tag" style={tagStyle}>{tag}</span>
      <h2 style={titleStyle}>{title}</h2>
      {subtitle && (
        <p style={{ color: "var(--text-muted)", maxWidth: 560, margin: "10px auto 0", lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
