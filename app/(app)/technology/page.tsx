import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology | Durova",
  description:
    "AI-powered flood resilience for African governments. SENSE · THINK · RESPOND.",
};

const layers = [
  {
    id: "01",
    code: "SENSE",
    label: "River Intelligence Network",
    body: "IoT sensors on Kenya's highest-risk waterways — Nzoia, Tana, Nyando, Athi — feed real-time water level, flow rate, and rainfall data into a central data lake, combined with CHIRPS rainfall, KMD forecasts, and Sentinel satellite imagery for a complete hydrological picture 24/7.",
    stat: "24/7",
    statLabel: "Live sensor uptime",
    accent: "oklch(0.809 0.105 251.813)",
  },
  {
    id: "02",
    code: "THINK",
    label: "Agentic Crisis Intelligence",
    body: "The agentic AI brain monitors all data streams and acts autonomously. Every 30 minutes during a crisis, it synthesises a plain-language Situation Report for NDMA and county government, flags resource gaps, drafts response communications, proposes evacuation routes, and logs every decision for built-in post-crisis accountability.",
    stat: "90s",
    statLabel: "Situation brief generation",
    accent: "oklch(0.623 0.214 259.815)",
  },
  {
    id: "03",
    code: "RESPOND",
    label: "Last-Mile Telco Alerting",
    body: "When a threat is confirmed, DUROVA triggers mass alerts through Safaricom and Airtel — reaching every phone in the flood zone in Swahili, Dholuo, Kikuyu, or Kamba. No smartphone required. No app to download. The alert meets communities where they are.",
    stat: "200K+",
    statLabel: "People reached per alert",
    accent: "oklch(0.488 0.243 264.376)",
  },
];

const crisisSteps = [
  {
    n: "01",
    verb: "DETECT",
    text: "River sensor on the Nzoia registers abnormal water rise. Upstream rainfall confirms. DUROVA flags elevated risk.",
  },
  {
    n: "02",
    verb: "SYNTHESISE",
    text: "DUROVA cross-references satellite imagery, KMD 48hr forecast, and flood history. Situation brief generated in 90 seconds.",
  },
  {
    n: "03",
    verb: "BRIEF GOVT",
    text: "NDMA Director and Kisumu County Governor receive a structured alert: impact zones, population at risk, recommended actions.",
  },
  {
    n: "04",
    verb: "ALERT COMMUNITIES",
    text: "Telco-native SMS reaches 200,000 people in the flood corridor in Dholuo and Swahili. Evacuation coordinates included.",
  },
  {
    n: "05",
    verb: "COORDINATE & LOG",
    text: "DUROVA tracks resource deployment, flags gaps, and auto-logs every decision for real-time accountability.",
  },
];

const criteria = [
  {
    id: "01",
    label: "Resilience Focus",
    body: "Full-spectrum coverage across all three phases — planning, response, and recovery. DUROVA ensures no community is surprised and no coordinator is left without a clear operating picture.",
  },
  {
    id: "02",
    label: "Innovative GenAI + Agentic AI",
    body: "DUROVA doesn't just surface data — it synthesises, decides, drafts, and acts. Situation reports, alert generation, and resource gap analysis run autonomously. Genuinely agentic, not a dashboard with an AI label.",
  },
  {
    id: "03",
    label: "Feasibility",
    body: "DUROVA exists. The sensor network, prediction models, and alerting infrastructure are operational. A formal government partnership with NDMA is in progress.",
  },
  {
    id: "04",
    label: "Scalability",
    body: "Kenya's 47 counties first, then the East Africa Community — Tanzania, Uganda, Rwanda — and beyond. Anywhere Safaricom or MTN operates, the alerting model replicates.",
  },
];

export default function TechnologyPage() {
  return (
    <main className="flex flex-col">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(oklch(1 0 0 / 4%) 1px, transparent 1px),
              linear-gradient(90deg, oklch(1 0 0 / 4%) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="custom-container py-20 lg:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div className="lg:max-w-3xl">
              <p className="text-xs uppercase tracking-widest opacity-50 mb-8">
                [TECHNOLOGY] — AI-Powered Flood Resilience
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold uppercase leading-[0.9] tracking-tight">
                Every Warning.
                <br />
                <span className="opacity-50">In Time.</span>
              </h1>
              <p className="mt-10 text-primary-foreground/60 max-w-xl leading-relaxed text-sm">
                Africa&apos;s floods don&apos;t kill by surprise — they kill by
                coordination failure. DUROVA closes the gap between data and
                action.
              </p>
            </div>

            {/* Live pulse indicator */}
            <div className="flex flex-col gap-3 lg:items-end">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-primary-foreground opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 bg-primary-foreground" />
                </span>
                <span className="text-xs uppercase tracking-widest opacity-70">
                  System Active
                </span>
              </div>
              <p className="text-xs text-primary-foreground/40 uppercase tracking-widest lg:text-right">
                Nairobi, Kenya · Est. 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="custom-container py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Label column */}
            <div className="lg:col-span-3 pb-8 lg:pb-0">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                [THE PROBLEM]
              </p>
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
              {/* Pull quote */}
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Every major flood in Kenya follows the same failure:
                the water came, but the warning didn&apos;t. The response
                came, but not in time. The data existed — but nobody had it in
                the right hands, in the right language, at the right
                moment.&rdquo;
              </p>

              <h2 className="text-3xl lg:text-5xl font-semibold text-primary uppercase leading-tight my-8">
                Floods Don&apos;t Kill by Surprise.
                <br />
                They Kill by Coordination Failure.
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Kenya loses dozens of lives and billions of shillings to floods
                annually. River gauge data, satellite imagery, and rainfall
                forecasts all exist — but they sit in silos. NDMA, county
                governments, first responders, and communities operate off
                different information, in delayed timelines, with no shared
                operating picture. Alerts, when they come, arrive late and in
                English. By the time the right person has the right information,
                it&apos;s already too late.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE LAYERS ─────────────────────────────────────────────── */}
      <section className="bg-muted">
        <div className="custom-container py-20 lg:py-28">
          <div className="mb-16">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
              [THE SOLUTION] — Three Integrated Layers
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary uppercase">
              The Intelligence Stack
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-0">
            {layers.map((layer) => (
              <div
                key={layer.id}
                className="bg-background flex flex-col"
              >
                {/* Accent bar at top */}
                <div
                  className="h-1 w-full"
                  style={{ background: layer.accent }}
                />

                <div className="p-8 lg:p-10 flex flex-col gap-6 flex-1">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">
                      [{layer.id}]
                    </span>
                    <h3 className="text-3xl font-semibold text-primary uppercase tracking-tight mt-2">
                      {layer.code}
                    </h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                      {layer.label}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {layer.body}
                  </p>

                  {/* Stat */}
                  <div className="pt-6 border-t border-border/20">
                    <p
                      className="text-4xl font-semibold"
                      style={{ color: layer.accent }}
                    >
                      {layer.stat}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                      {layer.statLabel}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="custom-container py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sticky label */}
            <div className="lg:col-span-3">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                [CRISIS SIMULATION]
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                A Crisis in Real Time
              </p>
            </div>

            {/* Steps */}
            <div className="lg:col-span-9">
              <h2 className="text-3xl lg:text-4xl font-semibold text-primary uppercase mb-12">
                From Sensor to Survivor
              </h2>

              <div className="flex flex-col">
                {crisisSteps.map((step, i) => (
                  <div
                    key={step.n}
                    className="grid grid-cols-12 gap-6 py-8 group"
                    style={{
                      borderTop: i === 0 ? "1px solid oklch(0.92 0.005 60)" : undefined,
                      borderBottom: "1px solid oklch(0.92 0.005 60 / 50%)",
                    }}
                  >
                    {/* Step number */}
                    <div className="col-span-2 lg:col-span-1">
                      <span className="text-xs text-muted-foreground/50 uppercase tracking-widest">
                        {step.n}
                      </span>
                    </div>

                    {/* Verb */}
                    <div className="col-span-10 lg:col-span-3">
                      <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                        {step.verb}
                      </p>
                    </div>

                    {/* Body */}
                    <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH CALLOUT ────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.488 0.243 264.376) 0%, oklch(0.546 0.245 262.881) 100%)",
        }}
      >
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(oklch(1 0 0 / 5%) 1px, transparent 1px),
              linear-gradient(90deg, oklch(1 0 0 / 5%) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="custom-container py-20 lg:py-28 relative z-10">
          <div className="lg:max-w-4xl">
            <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-8">
              [OPPORTUNITY]
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground uppercase leading-[0.9] tracking-tight">
              Durova Has Built the Foundation.
              <br />
              <span className="opacity-60">Now We Add the Agentic Brain.</span>
            </h2>
            <p className="mt-10 text-primary-foreground/60 max-w-2xl leading-relaxed text-sm">
              The sensor network, prediction models, and alerting infrastructure
              are operational. The next concrete step is a formal government
              partnership with NDMA and target county governments.
            </p>
          </div>
        </div>
      </section>

      {/* ── CRITERIA ALIGNMENT ───────────────────────────────────────── */}
      <section className="bg-muted">
        <div className="custom-container py-20 lg:py-28">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            [ALIGNMENT]
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary uppercase mb-16">
            Built Against the Right Criteria
          </h2>

          <div className="grid md:grid-cols-2 gap-0">
            {criteria.map((c) => (
              <div key={c.id} className="bg-background p-8 lg:p-10 flex flex-col gap-4">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                  [{c.id}] — VERIFIED
                </span>
                <h3 className="text-lg font-semibold text-primary uppercase tracking-tight">
                  {c.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {c.body}
                </p>
                <div className="h-[2px] w-8 bg-primary mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCALE BANNER ─────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="custom-container py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-4 pb-8 lg:pb-0">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                [SCALE]
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-3 gap-0">
                {[
                  { stat: "47", label: "Kenya Counties" },
                  { stat: "4+", label: "EAC Nations" },
                  { stat: "500M+", label: "Population Reach" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-2 p-8 lg:p-10 bg-muted"
                  >
                    <p className="text-4xl lg:text-5xl font-semibold text-primary">
                      {item.stat}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
