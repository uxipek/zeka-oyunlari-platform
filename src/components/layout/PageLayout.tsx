import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-clay-sm focus:bg-accent focus:px-4 focus:py-2.5 focus:font-display focus:text-sm focus:font-extrabold focus:text-white focus:shadow-clay"
      >
        İçeriğe geç
      </a>
      <Header />
      <main id="main-content" className="flex-1 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
