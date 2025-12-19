import { memo } from "react";

/**
 * Timeline Component
 * Displays work experience timeline
 */
function Timeline() {
  const experiences = [
    {
      year: "2024 - Present",
      title: "Senior Backend Engineer",
      company: "CloudScale Systems",
      description: "Led distributed systems architecture. Designed APIs handling 10M+ RPS."
    },
    {
      year: "2023 - 2024",
      title: "Backend Engineer",
      company: "DataVault Inc",
      description: "Built real-time analytics pipeline. Reduced query latency by 65%."
    },
    {
      year: "2022 - 2023",
      title: "Software Engineer",
      company: "StartupXYZ",
      description: "Full-stack development. Architected microservices migration."
    },
    {
      year: "2021 - 2022",
      title: "Junior Backend Engineer",
      company: "TechCorp",
      description: "Database optimization and API development."
    }
  ];

  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-center">
          Experience Timeline
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative md:w-1/2 ${idx % 2 === 0 ? 'md:ml-0 md:pr-8' : 'md:ml-auto md:pl-8'}`}
              >
                {/* Dot */}
                <div className={`absolute w-3 h-3 bg-white rounded-full top-2 
                              ${idx % 2 === 0 ? 'left-0 md:left-auto md:right-[-7px]' : 'left-0 md:left-[-7px]'}
                              ring-4 ring-black`} />

                {/* Card */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition">
                  <p className="text-sm text-gray-400 font-mono">{exp.year}</p>
                  <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                  <p className="text-sm text-gray-300">{exp.company}</p>
                  <p className="text-gray-400 mt-3">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Timeline);