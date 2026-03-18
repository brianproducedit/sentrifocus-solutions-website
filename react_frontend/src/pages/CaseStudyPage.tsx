import { PageWrapper } from "../components/layout/PageWrapper";

export function CaseStudyPage() {
  return (
    <PageWrapper>
      <section className="max-w-[1000px] mx-auto px-4 py-10">
        <div className="relative bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[360px] mb-8"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(16, 19, 34, 0.9) 0%, rgba(16, 19, 34, 0.2) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoTZXCYopCOw5loyLFBEb2vVMxsJhlngu23U4o0Is9G2eJqhCTwc7T86YM1Oi0PIONFYIvs82M2HlQJ9EMyZFuoak9qlaQKIa7pyow3ay04ovpYYqoR1IiD0c80LT5np4HzLJiU2WkjuO3l-ni9rY81PR6qFUEBWWefyRxLI2UIQTcM7WdypPmdJxRpq0icR15ig390sUJYJKpc5rMKjh67U0Ni9nElGjw-QOHr5ViKzQwtRCbaiYbtUsFXQN6MteX2IW8AEsTMQmZ")',
          }}
        >
          <div className="flex flex-col p-8 gap-2">
            <div className="flex flex-wrap gap-2 text-primary text-sm font-bold uppercase tracking-widest">Connectivity • Enterprise</div>
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
              Project: Remote High-Speed Connectivity for Mining Operations
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <article className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Our client mining operation in a remote region needed low-latency resilient internet for safety protocols and live operations.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li>Dual-link connectivity architecture with redundancy and failover controls</li>
                <li>Enterprise networking with industrial-grade switching and WiFi 6 coverage</li>
                <li>Custom SD-WAN traffic shaping prioritizing critical telemetry</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">The Result</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["99.9%", "Network Uptime"],
                  ["35ms", "Average Latency"],
                  ["200+", "Mbps Download"],
                  ["15%", "Efficiency Boost"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-slate-100 dark:bg-slate-900/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="text-primary text-3xl font-black mb-1">{value}</div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="bg-slate-100 dark:bg-slate-900/60 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-lg mb-4">Project Overview</h3>
              <div className="space-y-3 text-sm">
                <p>Client: Midlands Mining Group</p>
                <p>Location: Kwekwe Corridor, Zimbabwe</p>
                <p>Duration: 3 Weeks</p>
              </div>
            </div>
            <div className="bg-primary p-6 rounded-xl text-white">
              <h3 className="font-bold text-xl mb-3">Need similar results?</h3>
              <button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-slate-100">Book a Consultation</button>
            </div>
          </aside>
        </div>
      </section>
    </PageWrapper>
  );
}
