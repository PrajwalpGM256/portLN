import { ContactStatement } from "./ContactStatement";
import { ContactNav } from "./ContactNav";
import { ContactSocials } from "./ContactSocials";
import { ContactCTA } from "./ContactCTA";
import { ContactMarquee } from "./ContactMarquee";
import { theme } from "@/config/theme";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden flex flex-col"
      style={{
        minHeight: "100vh",
        backgroundColor: theme.contactBg,
      }}
    >
      {/* Wavy border at top */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
          style={{ height: "100%" }}
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,0 L0,0 Z"
            fill="var(--color-black)"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="site-container flex-1 flex flex-col justify-center py-16 pt-32">
        {/* Statement centered */}
        <ContactStatement />

        {/* Three column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-8">
          <ContactNav />
          <div className="flex flex-col items-center justify-center">
            <ContactCTA />
          </div>
          <ContactSocials />
        </div>
      </div>

      {/* Bottom section */}
      <div className="site-container pb-8">
        <ContactMarquee />

        {/* Simple footer - just copyright */}
        <div className="mt-6 flex justify-center items-center text-[11px]" style={{ color: theme.accent }}>
          <p>© {new Date().getFullYear()} Prajwal. All rights reserved</p>
        </div>
      </div>
    </section>
  );
}