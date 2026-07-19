import Link from "next/link";

// TODO: Echte Impressums-Angaben eintragen, bevor die Seite live geht
// (Name, Anschrift, Kontakt – Pflicht nach § 5 DDG).

export default function Impressum() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-16">
      <Link href="/" className="text-sm text-foreground/60 hover:text-foreground">
        ← Zurück zur Startseite
      </Link>
      <h1 className="mt-6 text-3xl font-black">Impressum</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-foreground/75">
        <p className="font-bold text-gold">
          [TODO: Angaben gemäß § 5 DDG eintragen]
        </p>
        <p>
          Name / Firma
          <br />
          Straße Hausnummer
          <br />
          PLZ Ort
        </p>
        <p>
          E-Mail: kontakt@loyaltycard.info
          <br />
          Telefon: [TODO]
        </p>
      </div>
    </main>
  );
}
