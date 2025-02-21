import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">
            Was ich mache <span className="inline-block transition-all duration-300 ease-in-out hover:scale-110">💻</span>
          </h2>
          <p className="mt-4 text-xl text-zinc-400">
            Entwicklung moderner Web-Anwendungen
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { 
              title: 'Frontend', 
              emoji: '🎨', 
              desc: 'React, Next.js, Tailwind',
              animation: 'hover:rotate-12'
            },
            { 
              title: 'Backend', 
              emoji: '⚡', 
              desc: 'Node.js, API Development',
              animation: 'hover:translate-y-[-4px]'
            },
            { 
              title: 'Design', 
              emoji: '✨', 
              desc: 'UI/UX, Responsive Design',
              animation: 'hover:scale-110'
            }
          ].map((service, index) => (
            <Card key={index} className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <span className={`inline-block transition-all duration-300 ease-in-out ${service.animation}`}>
                    {service.emoji}
                  </span>
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  {service.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 