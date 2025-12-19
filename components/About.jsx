import { memo } from "react";

/**
 * About Component
 * Displays brief bio and technical focus.
 *
 * @component
 * @returns {JSX.Element} About section UI
 */
function About() {
  const stack = [
    "Go", "Rust", "Python", "Kubernetes", "Docker", "PostgreSQL", "Redis", "Kafka"
  ];

  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="about-heading" className="text-3xl font-light mb-8 text-center">
          About
        </h2>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 mb-4">
            I design and build backend systems that scale. Focused on performance, security, and clean architecture.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            Experience in distributed systems, APIs, and infrastructure that powers reliable applications.
          </p>
          <p className="text-lg text-gray-300">
            Always learning, always optimizing.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Technical Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full 
                          backdrop-blur-md hover:bg-white/20 hover:border-white/40 transition cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
