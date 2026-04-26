import type { ReactNode } from "react";

export function Preview({ children }: { children: ReactNode }) {
  return (
    <div style={{
      padding: "1.5rem",
      borderRadius: "1rem",
      border: "1px solid #263028",
      background: "#111513",
      marginBottom: "1.5rem",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      alignItems: "center",
    }}>
      {children}
    </div>
  );
}
