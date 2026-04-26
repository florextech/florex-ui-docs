import type { ReactNode } from "react";

const florexStyles = `
  .florex-preview *, .florex-preview *::before, .florex-preview *::after { box-sizing: border-box; border-color: #263028; }
  .florex-preview { font-family: "Poppins", ui-sans-serif, system-ui, sans-serif; color: #edf6ee; }
  .florex-preview h1, .florex-preview h2, .florex-preview h3, .florex-preview h4 { font-family: "Montserrat", ui-sans-serif, system-ui, sans-serif; }
`;

export function Preview({ children }: { children: ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: florexStyles }} />
      <div className="florex-preview" style={{
        padding: "1.5rem",
        borderRadius: "1rem",
        border: "1px solid #263028",
        background: "#0b0d0c",
        marginBottom: "1.5rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        alignItems: "center",
      }}>
        {children}
      </div>
    </>
  );
}
