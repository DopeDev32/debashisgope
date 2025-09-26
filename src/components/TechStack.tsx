import { Card } from "@/components/ui/card";

const techStack = [
  { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
  { name: "React.js", level: 85, color: "from-blue-400 to-blue-600" },
  { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
  { name: "Java", level: 88, color: "from-red-400 to-red-600" },
  { name: "Python", level: 75, color: "from-blue-500 to-blue-700" },
  { name: "MongoDB", level: 78, color: "from-green-500 to-green-700" },
  { name: "Express.js", level: 82, color: "from-gray-400 to-gray-600" },
  { name: "MySQL", level: 80, color: "from-blue-600 to-blue-800" },
];

const TechStack = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <Card 
              key={tech.name}
              className="p-6 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                
                {/* Skill Level Bar */}
                <div className="relative">
                  <div className="w-full bg-muted/50 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${tech.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">
                    {tech.level}%
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Always learning and exploring new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["C/C++", "HTML/CSS", "Tailwind CSS", "Git", "Firebase", "JWT", "REST API", "Postman"].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-muted/50 rounded-full text-sm border border-border hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;