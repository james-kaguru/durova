import Image from "next/image";

const values = [
  {
    id: "01",
    label: "Human Life First",
    body: "Every decision — product, partnership, or policy — is measured against one question: does this save lives?",
  },
  {
    id: "02",
    label: "Community Driven",
    body: "The people closest to the flood line know things no sensor can detect. We build with communities, not for them — because local knowledge, local trust, and local action are what turn an alert into a life saved.",
  },
  {
    id: "03",
    label: "Continuous Preparedness",
    body: "Floods don't wait for us to be ready. We build cultures of anticipation — not just responding when disaster strikes, but investing relentlessly in readiness before the rain begins.",
  },
];

const team = [
  {
    name: "James Kaguru",
    role: "Co-Founder",
    spec: "Full Stack & Geospatial Visualisations",
    image:
      "https://durova.s3.eu-central-1.amazonaws.com/web-assets/james_kaguru_2.JPG",
  },
  {
    name: "Kevin Tuei",
    role: "Co-Founder",
    spec: "Cloud Engineer",
    image:
      "https://durova.s3.eu-central-1.amazonaws.com/web-assets/kevin_tuei.jpeg",
  },
  {
    name: "Patrick Orangi",
    role: "Co-Founder",
    spec: "ML & AI Solutions Architect",
    image:
      "https://durova.s3.eu-central-1.amazonaws.com/web-assets/patrick_orangi.jpeg",
  },
];

export default function Page() {
  return (
    <main className="flex flex-col">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground">
        <div className="custom-container py-16 lg:py-24">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-6">
            [ABOUT]
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold uppercase leading-tight max-w-4xl">
            Technology Built to Save Lives
          </h1>
          <p className="mt-8 text-primary-foreground/70 max-w-2xl leading-relaxed">
            A world where no life is lost to a flood that could have been predicted.
          </p>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="custom-container py-16 lg:py-20">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-12">
            [PRINCIPLES]
          </p>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Mission */}
            <div className="bg-muted p-10 lg:p-14">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
                [01] — Mission
              </p>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary uppercase mb-6">
                Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We are on a mission to save human lives from the risk of floods
                by providing a platform that helps in the detection, alerting, and
                coordination of disaster response efforts.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card p-10 lg:p-14">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
                [02] — Vision
              </p>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary uppercase mb-6">
                Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where no life is lost to a flood that could have been
                predicted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────── */}
      <section className="bg-muted">
        <div className="custom-container py-16 lg:py-20">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-12">
            [03] — Values
          </p>
          <h2 className="text-2xl lg:text-3xl font-semibold text-primary uppercase mb-12">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-3 gap-0">
            {values.map((v) => (
              <div
                key={v.id}
                className="bg-background p-8 lg:p-10 flex flex-col gap-4 group"
              >
                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  [{v.id}]
                </span>
                <h3 className="text-lg font-semibold text-primary uppercase tracking-tight">
                  {v.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {v.body}
                </p>
                {/* accent bar */}
                <div className="h-[2px] w-8 bg-primary mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BACKGROUND ───────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="custom-container py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* left sticky label */}
            <div className="lg:col-span-3">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                [BACKGROUND]
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                Est. 2024 → 2026
              </p>
            </div>

            {/* narrative */}
            <div className="lg:col-span-9 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold text-primary uppercase leading-tight">
                Born From the Field
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Durova traces its roots to 2024, when Patrick Orangi, Kevin Tuei,
                and James Kaguru first collaborated at the GitHub All In Open
                Source Hackathon. Together they built a land use change detection
                tool using Google Earth Engine to generate a Sustainability Index
                — an experience that sharpened their instinct for applying
                technology to real environmental problems.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                That instinct deepened at the UNEP Hackathon, where the team
                tackled alerting systems for disaster response within the broader
                crisis of climate change, pollution, biodiversity loss, and waste.
                Working through those challenges made one thing clear: the tools
                for protecting communities during disasters were nowhere near where
                they needed to be.
              </p>

              <div className="bg-muted p-8 my-8">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  [INFLECTION POINT] — Kenya Floods, 2026
                </p>
                <p className="text-foreground font-semibold text-lg leading-relaxed">
                  Watching the devastation, the three knew they had the conviction
                  and the technical foundation to do something about it.
                  Durova was the answer.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                The platform they are building moves beyond traditional
                satellite-dependent flood management, which is costly, slow, and
                disconnected from the people on the ground. Durova delivers
                real-time intelligence to the stakeholders who matter most:
                government agencies, humanitarian organizations, and the
                communities living closest to the risk. Cost-efficient by design
                and built for the African context, Durova exists because no one
                should die from a flood that could have been predicted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────────── */}
      <section className="bg-muted">
        <div className="custom-container py-16 lg:py-20">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-12">
            [TEAM] — The Founders
          </p>

          <div className="grid sm:grid-cols-3 gap-0">
            {team.map((member, i) => (
              <div key={member.name} className="bg-background flex flex-col">
                <div className="w-full h-[360px] overflow-hidden">
                  <Image
                    src={member.image}
                    width={400}
                    height={400}
                    alt={member.name}
                    className="object-cover object-center w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col gap-1 border-t border-border/30">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <h3 className="font-semibold text-primary uppercase tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-muted-foreground uppercase">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {member.spec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING STATEMENT ────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground">
        <div className="custom-container py-16 lg:py-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <p className="text-3xl lg:text-4xl font-semibold uppercase max-w-xl leading-tight">
            No one should die from a flood that could have been predicted.
          </p>
          <p className="text-xs text-primary-foreground/60 uppercase tracking-widest lg:text-right">
            [DUROVA]<br />Est. 2024<br />Nairobi, Kenya
          </p>
        </div>
      </section>
    </main>
  );
}
