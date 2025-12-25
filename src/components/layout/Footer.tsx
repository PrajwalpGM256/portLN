import { personal } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer 
      className="py-8 border-t"
      style={{ borderColor: "var(--color-dark-800)" }}
    >
      <div className="site-container flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ color: "var(--color-dark-500)" }}>
        <span>© {year} {personal.name.toUpperCase()}</span>
        <span>{personal.location.toUpperCase()}</span>
      </div>
    </footer>
  );
}