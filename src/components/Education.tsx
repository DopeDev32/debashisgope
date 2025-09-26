import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Left Column - University Info */}
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Ajeenkya DY Patil University
                  </h3>
                </div>
                
                <h4 className="text-lg font-medium text-secondary mb-3">
                  B.Tech in Computer Science
                </h4>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    2022 - 2026
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Pune, Maharashtra
                  </div>
                </div>

                <Badge 
                  variant="outline" 
                  className="mt-3 border-border"
                >
                  Final Year
                </Badge>
              </div>

              {/* Right Column - Details */}
              <div className="lg:w-2/3">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h5 className="font-medium text-lg">Academic Performance</h5>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">CGPA (up to 6th semester)</span>
                      <span className="text-lg font-bold text-primary">7.02</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                        style={{ width: '70.2%' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Key Subjects */}
                <div className="mb-6">
                  <h5 className="font-medium mb-3">Key Subjects & Areas of Study:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Object-Oriented Programming",
                      "Database Management Systems",
                      "Web Development",
                      "Software Engineering",
                      "Computer Networks",
                      "Operating Systems",
                      "Machine Learning Fundamentals"
                    ].map((subject) => (
                      <div key={subject} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {subject}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Developed */}
                <div>
                  <h5 className="font-medium mb-3">Technical Skills Developed:</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Problem Solving",
                      "Algorithm Design",
                      "System Design",
                      "Team Collaboration",
                      "Project Management",
                      "Code Optimization"
                    ].map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="text-xs border-border hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Learning */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6">Continuous Learning</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300">
                <h4 className="font-semibold mb-2">Self-Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Continuously learning new technologies and frameworks through online courses and documentation
                </p>
              </Card>
              
              <Card className="p-6 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300">          
                <h4 className="font-semibold mb-2">Practical Projects</h4>
                <p className="text-sm text-muted-foreground">
                  Building real-world applications to apply theoretical knowledge and gain hands-on experience
                </p>
              </Card>
              
              <Card className="p-6 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300">
                <h4 className="font-semibold mb-2">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">
                  Regular practice on coding platforms to strengthen algorithmic thinking and programming skills
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;