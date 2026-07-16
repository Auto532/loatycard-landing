import Link from "next/link";

// TODO: Datenschutzerklärung finalisieren, bevor die Seite live geht.

export default function Datenschutz() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-16">
      <Link href="/" className="text-sm text-foreground/60 hover:text-foreground">
        ← Zurück zur Startseite
      </Link>
      <h1 className="mt-6 text-3xl font-black">Datenschutzerklärung</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-foreground/75">
        <p className="font-bold text-gold">[TODO: Datenschutzerklärung eintragen]</p>
        <p>
          Diese Website verwendet keine Cookies und keine Tracking-Dienste.
          Beim Aufruf der Seite werden durch den Hosting-Anbieter (Vercel)
          technisch notwendige Zugriffsdaten verarbeitet.
        </p>
        <p>
          Verantwortlicher im Sinne der DSGVO: siehe{" "}
          <Link href="/impressum" className="text-gold underline">
            Impressum
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
