import Link from "next/link";

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "";
const WHATSAPP_NR = process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP ?? "+491634848207";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NR.replace(/\D/g, "")}`;

const steps = [
  {
    nr: "1",
    title: "QR-Code scannen",
    text: "Deine Kunden scannen beim Bezahlen einfach den QR-Code an der Theke, ganz ohne App-Download.",
  },
  {
    nr: "2",
    title: "Stempel sammeln",
    text: "Mit jedem Einkauf wächst die digitale Stempelkarte. Sie liegt immer griffbereit auf dem Homescreen.",
  },
  {
    nr: "3",
    title: "Prämie einlösen",
    text: "Karte voll? Dein Kunde löst seine Prämie direkt im Shop ein und sammelt gleich weiter.",
  },
];

const features = [
  {
    title: "Keine App nötig",
    text: "Läuft im Browser auf jedem Smartphone. Kunden fügen die Karte mit einem Tipp zum Homescreen hinzu.",
  },
  {
    title: "Dein Design",
    text: "Farben, Logo und Stil deiner Stempelkarte passen zu deinem Shop, auf Wunsch komplett individuell.",
  },
  {
    title: "Bonus-Stufen",
    text: "Belohne treue Kunden mit Zwischenprämien, zum Beispiel schon nach 5 Stempeln ein kleines Extra.",
  },
  {
    title: "Statistiken",
    text: "Sieh auf einen Blick, wie viele Stempel vergeben und Prämien eingelöst wurden.",
  },
  {
    title: "Einrichtung inklusive",
    text: "Wir richten deine Stempelkarte komplett ein. Du bekommst QR-Codes zum Ausdrucken, fertig.",
  },
  {
    title: "Persönlicher Support",
    text: "Fragen? Du erreichst uns direkt per WhatsApp oder Telefon, ohne Warteschleife.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-background/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <span className="text-lg font-black tracking-[0.35em] text-gold">
            LOYALTYCARD
          </span>
          <div className="hidden items-center gap-6 text-sm text-foreground/70 sm:flex">
            <a href="#funktionen" className="hover:text-foreground">
              Funktionen
            </a>
            <a href="#preise" className="hover:text-foreground">
              Preise
            </a>
            {DEMO_URL && (
              <a href={DEMO_URL} className="hover:text-foreground">
                Live-Demo
              </a>
            )}
          </div>
          <Link
            href="/registrieren"
            className="rounded-xl bg-gold px-4 py-2 text-sm font-bold text-background transition hover:bg-gold-dim"
          >
            Jetzt starten
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-20 pt-16 text-center sm:pt-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Digitale Kundenkarte
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
          Die Stempelkarte, die deine Kunden{" "}
          <span className="text-gold">nie wieder vergessen</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
          Papierkarten landen im Müll, LoyaltyCard bleibt auf dem Smartphone.
          Stempel sammeln per QR-Code, ganz ohne App-Download. Perfekt für
          Cafés, Friseure, Imbisse und jeden lokalen Shop.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/registrieren"
            className="rounded-2xl bg-gold px-7 py-4 text-base font-bold text-background transition hover:bg-gold-dim"
          >
            Jetzt starten →
          </Link>
          {DEMO_URL && (
            <a
              href={DEMO_URL}
              className="rounded-2xl border border-white/20 px-7 py-4 text-base font-semibold text-foreground/85 transition hover:border-gold hover:text-gold"
            >
              Live-Demo ausprobieren
            </a>
          )}
        </div>
      </section>

      {/* So funktioniert's */}
      <section id="funktionen" className="border-t border-white/10 bg-card">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="text-center text-3xl font-black">
            So einfach funktioniert&apos;s
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.nr} className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-xl font-black text-background">
                  {s.nr}
                </div>
                <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/65">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="text-center text-3xl font-black">
          Alles drin, was dein Shop braucht
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-card p-6"
            >
              <p className="mb-2 font-bold">
                <span className="mr-2 text-gold">✓</span>
                {f.title}
              </p>
              <p className="text-sm leading-relaxed text-foreground/65">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="border-t border-white/10 bg-card">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="text-center text-3xl font-black">
            Ein fairer Preis. Keine versteckten Kosten.
          </h2>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-background p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-foreground/50">
                Monatsabo
              </p>
              <p className="mt-4 text-4xl font-black">
                20 €{" "}
                <span className="text-base font-medium text-foreground/50">
                  / Monat
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                Voller Funktionsumfang, monatlich kündbar.
              </p>
            </div>
            <div className="relative rounded-3xl border-2 border-gold bg-background p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-gold">
                Jahresabo
              </p>
              <p className="mt-4 text-4xl font-black">
                240 €{" "}
                <span className="text-base font-medium text-foreground/50">
                  / Jahr
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                Voller Funktionsumfang. Einmal zahlen, ein Jahr Ruhe.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-foreground/50">
            Einmalige Einrichtung: 99 €, inklusive individuellem Design deiner
            Stempelkarte durch unser Team (eigenes Logo, eigene Farben).
            Optional: Bonusprogramm mit mehrstufigen Belohnungen für 5 € / Monat
            pro Belohnung. Mit Bonusprogramm kostet die Einrichtung einmalig nur 45 €.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <h2 className="text-3xl font-black">Bereit für mehr Stammkunden?</h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          Starte jetzt oder schreib uns direkt, wenn du erst Fragen hast. Wir
          antworten persönlich.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/registrieren"
            className="rounded-2xl bg-gold px-7 py-4 text-base font-bold text-background transition hover:bg-gold-dim"
          >
            Jetzt starten →
          </Link>
          <a
            href={WHATSAPP_LINK}
            className="rounded-2xl border border-white/20 px-7 py-4 text-base font-semibold text-foreground/85 transition hover:border-gold hover:text-gold"
          >
            WhatsApp schreiben
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-5 py-8 text-sm text-foreground/45 sm:flex-row sm:justify-between">
          <span>LoyaltyCard · Digitale Stempelkarten für lokale Shops</span>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-foreground/80">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-foreground/80">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
