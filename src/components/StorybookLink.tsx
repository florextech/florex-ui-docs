export function StorybookLink({ component }: { component: string }) {
  const slug = component.toLowerCase().replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  const href = `https://florextech.github.io/florex-ui/?path=/story/components-${slug}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        border: "1px solid #263028",
        background: "#111513",
        color: "#bdf146",
        fontSize: "0.85rem",
        fontWeight: 500,
        textDecoration: "none",
        marginBottom: "1.5rem",
        transition: "border-color 0.2s, background 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#bdf146";
        e.currentTarget.style.background = "#171c19";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#263028";
        e.currentTarget.style.background = "#111513";
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M11.04 0l.2 2.48-1.08-.98-.8.88L11.2 4 8 4l.02 1.2h3.56L8 8.76l.86.84L12.4 6.1v3.5H13.6V0h-2.56zM2.4 1.6A1.6 1.6 0 00.8 3.2v9.6a1.6 1.6 0 001.6 1.6h9.6a1.6 1.6 0 001.6-1.6V6.4h-1.2v6.4a.4.4 0 01-.4.4H2.4a.4.4 0 01-.4-.4V3.2a.4.4 0 01.4-.4H8V1.6H2.4z" fill="currentColor"/>
      </svg>
      Storybook →
    </a>
  );
}
