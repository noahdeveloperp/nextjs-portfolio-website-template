import { memo } from 'react';
import Card3D from './Card3D';

/**
 * 3D Enhanced Projects Component
 */
function Projects3D() {
  const projects = [
    {
      title: "Distributed API Gateway",
      problem: "Unified access to microservices with rate limiting and authentication.",
      stack: "Go, Redis, Kubernetes",
      link: "https://github.com/noe/api-gateway",
      demo: "https://demo.api-gateway.dev",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Analytics Engine",
      problem: "Processed 1M+ events/sec with sub-second latency for user behavior insights.",
      stack: "Rust, Kafka, PostgreSQL",
      link: "https://github.com/noe/analytics-engine",
      demo: "https://analytics.noe.dev",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Secure File Storage Service",
      problem: "End-to-end encrypted storage with access controls and audit logs.",
      stack: "Python, AWS S3, Vault",
      link: "https://github.com/noe/file-storage",
      demo: "https://files.noe.dev",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "CI/CD Pipeline Optimizer",
      problem: "Reduced build times by 60% through parallelization and caching strategies.",
      stack: "Jenkins, Docker, Terraform",
      link: "https://github.com/noe/ci-optimizer",
      demo: null,
      gradient: "from-orange-500 to-red-500"
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
            <Card3D key={index}>
              <div
                className={`bg-gradient-to-br ${project.gradient} p-[1px] rounded-xl`}
              >
                <article className="bg-black rounded-xl p-6 h-full">
                  <div className="relative">
                    <div className={`absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-full opacity-20 blur-2xl`} />
                    
                    <h3 className="text-xl font-semibold mb-2 relative z-10">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm relative z-10">{project.problem}</p>
                    <p className="text-xs text-gray-500 mb-4 font-mono relative z-10">{project.stack}</p>
                    
                    <div className="flex gap-4 relative z-10">
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
                  </div>
                </article>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Projects3D);