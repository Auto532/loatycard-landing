import Link from "next/link";

// TODO Stripe-Umstellung: Hier kommt der Self-Service-Checkout rein
// (Plan wählen → Shop-Daten → Stripe Checkout). Bis dahin läuft die
// Registrierung persönlich über WhatsApp.

const WHATSAPP_NR = process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP ?? "+491634848207";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NR.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hallo! Ich möchte LoyaltyCard für meinen Shop starten."
)}`;

export default function Registrieren() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-lg font-black tracking-[0.35em] text-gold">
            LOYALTYCARD
          </Link>
          <Link href="/" className="text-sm text-foreground/70 hover:text-foreground">
            ← Zurück
          </Link>
        </nav>
      </header>

      <section className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-5 py-20 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Registrierung
        </p>
        <h1 className="text-3xl font-black sm:text-4xl">
          Starte LoyaltyCard für deinen Shop
        </h1>
        <p className="mx-auto mt-5 max-w-lg leading-relaxed text-foreground/70">
          Schreib uns kurz per WhatsApp, wir richten deine Stempelkarte
          gemeinsam mit dir ein, meist noch am selben Tag. Die
          Online-Registrierung mit direkter Zahlung kommt in Kürze.
        </p>
        <div className="mt-9">
          <a
            href={WHATSAPP_LINK}
            className="inline-block rounded-2xl bg-[#25d366] px-8 py-4 text-base font-bold text-white transition hover:opacity-90"
          >
            Jetzt per WhatsApp starten →
          </a>
        </div>
        <p className="mt-6 text-sm text-foreground/50">
          Oder ruf uns an: <strong className="text-foreground/80">{WHATSAPP_NR}</strong>
        </p>
      </section>
    </main>
  );
}
