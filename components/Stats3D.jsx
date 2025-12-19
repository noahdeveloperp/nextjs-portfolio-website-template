import { memo } from 'react';
import Card3D from './Card3D';

/**
 * 3D Enhanced Stats Component
 */
function Stats3D() {
  const stats = [
    {
      number: "50+",
      label: "Production Systems",
      description: "Architected and maintained",
      color: "from-blue-500"
    },
    {
      number: "10M+",
      label: "Requests Per Second",
      description: "Infrastructure handled",
      color: "from-purple-500"
    },
    {
      number: "99.99%",
      label: "Uptime",
      description: "Consistently achieved",
      color: "from-green-500"
    },
    {
      number: "15+",
      label: "Years in Tech",
      description: "Continuous learning",
      color: "from-orange-500"
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
            <Card3D key={idx}>
              <div className={`bg-gradient-to-br ${stat.color} to-transparent p-[1px] rounded-lg`}>
                <div className="bg-black rounded-lg p-6 h-full text-center">
                  <h3 className="text-4xl font-light mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {stat.number}
                  </h3>
                  <p className="font-semibold mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Stats3D);