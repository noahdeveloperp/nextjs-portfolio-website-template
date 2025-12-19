import { memo } from "react";

/**
 * Projects Component
 * Displays featured projects with problem solved, tech stack, and links.
 *
 * @component
 * @returns {JSX.Element} Projects section UI
 */
function Projects() {
  const projects = [
    {
      title: "Distributed API Gateway",
      problem: "Unified access to microservices with rate limiting and authentication.",
      stack: "Go, Redis, Kubernetes",
      link: "https://github.com/noe/api-gateway",
      demo: "https://demo.api-gateway.dev"
    },
    {
      title: "Real-time Analytics Engine",
      problem: "Processed 1M+ events/sec with sub-second latency for user behavior insights.",
      stack: "Rust, Kafka, PostgreSQL",
      link: "https://github.com/noe/analytics-engine",
      demo: "https://analytics.noe.dev"
    },
    {
      title: "Secure File Storage Service",
      problem: "End-to-end encrypted storage with access controls and audit logs.",
      stack: "Python, AWS S3, Vault",
      link: "https://github.com/noe/file-storage",
      demo: "https://files.noe.dev"
    },
    {
      title: "CI/CD Pipeline Optimizer",
      problem: "Reduced build times by 60% through parallelization and caching strategies.",
      stack: "Jenkins, Docker, Terraform",
      link: "https://github.com/noe/ci-optimizer",
      demo: null
    }
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-6"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="projects-heading" className="text-3xl font-light mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 
                        shadow-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300
                        hover:shadow-xl hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.problem}</p>
              <p className="text-sm text-gray-500 mb-4 font-mono">{project.stack}</p>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 transition font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="text-green-400 hover:text-green-300 transition font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);