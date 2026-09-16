import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FOOTER_SECTIONS = [
  {
    title: "Platform",
    links: [
      { label: "Ana Sayfa", href: "/" },
      { label: "Oyunlar", href: "/games" },
      { label: "Gelişimim", href: "/progress" },
    ],
  },
  {
    title: "Destek",
    links: [
      { label: "Yardım Merkezi", href: "/" },
      { label: "Sıkça Sorulan Sorular", href: "/" },
      { label: "Geri Bildirim", href: "/" },
    ],
  },
  {
    title: "Yasal",
    links: [
      { label: "Gizlilik Politikası", href: "/" },
      { label: "Çocuk Güvenliği", href: "/" },
      { label: "KVKK", href: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold text-ink">
              <span className="grid h-9 w-9 place-items-center rounded-clay-sm bg-[linear-gradient(135deg,var(--color-secondary),var(--color-primary))] text-white shadow-clay-soft">
                <Sparkles size={20} aria-hidden="true" />
              </span>
              Zeka Oyunları
            </Link>
            <p className="mt-3 max-w-xs font-body text-sm font-semibold text-ink-mute">
              Oynarken zihnini çalıştır. Bilişsel becerilerini eğlenceli oyunlarla geliştir.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_SECTIONS.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h3 className="mb-3 font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="inline-flex min-h-[44px] items-center font-body text-sm font-semibold text-ink-mute transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 rounded-clay-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="font-body text-xs font-semibold text-ink-mute">
            © 2026 Zeka Oyunları Platformu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
