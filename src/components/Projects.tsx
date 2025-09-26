import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Database, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Employee Management System",
    description: "React-based project with role-based dashboards, task lifecycle management, and local storage data persistence to sharpen React skills.",
    image: "/placeholder.svg",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Local Storage"],
    features: ["Role-based dashboards", "Task lifecycle management", "Data persistence", "Responsive design"],
    liveUrl: "https://github.com/DopeDev32",
    githubUrl: "https://github.com/DopeDev32",
    icon: <Database className="h-6 w-6" />,
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "Byte Box",
    description: "Built with Node.js, Express, MongoDB, JWT authentication, and EJS + Tailwind for UI, enabling user registration, login, and secure file uploads.",
    image: "/placeholder.svg",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "EJS", "Tailwind CSS"],
    features: ["User authentication", "Secure file uploads", "JWT tokens", "Responsive UI"],
    liveUrl: "https://github.com/DopeDev32",
    githubUrl: "https://github.com/DopeDev32",
    icon: <Zap className="h-6 w-6" />,
    category: "Backend"
  },
  {
    id: 3,
    title: "Interactive Games",
    description: "Collection of browser-based games including Tic Tac Toe and To Do List application built with vanilla JavaScript, HTML, and CSS.",
    image: "/placeholder.svg",
    technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
    features: ["Interactive gameplay", "Local data storage", "Responsive design", "Clean UI"],
    liveUrl: "https://github.com/DopeDev32",
    githubUrl: "https://github.com/DopeDev32",
    icon: <Globe className="h-6 w-6" />,
    category: "Frontend"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card-gradient border-border hover:border-primary/50 transition-all duration-500 hover:shadow-elegant hover:-translate-y-4 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-muted/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 text-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 text-muted-foreground">Key Features:</h4>
                  <ul className="text-sm space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-border hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-border hover:bg-muted"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-muted hover:border-primary/50"
            asChild
          >
            <a href="https://github.com/DopeDev32" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;