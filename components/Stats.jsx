import { memo } from "react";

/**
 * Stats Component
 * Display key metrics and achievements
 */
function Stats() {
  const stats = [
    {
      number: "50+",
      label: "Production Systems",
      description: "Architected and maintained"
    },
    {
      number: "10M+",
      label: "Requests Per Second",
      description: "Infrastructure handled"
    },
    {
      number: "99.99%",
      label: "Uptime",
      description: "Consistently achieved"
    },
    {
      number: "15+",
      label: "Years in Tech",
      description: "Continuous learning"
    }
  ];

  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-center">
          By The Numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition text-center"
            >
              <h3 className="text-4xl font-light mb-2">{stat.number}</h3>
              <p className="font-semibold mb-1">{stat.label}</p>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Stats);