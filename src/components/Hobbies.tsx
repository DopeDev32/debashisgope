import { Card } from "@/components/ui/card";
import { Video, Mountain, Trophy } from "lucide-react";

const hobbies = [
  {
    name: "Video Editing",
    icon: <Video className="h-8 w-8" />,
    description: "Creating and editing videos, exploring creative storytelling through visual media.",
    color: "from-red-400 to-red-600"
  },
  {
    name: "Hiking", 
    icon: <Mountain className="h-8 w-8" />,
    description: "Exploring nature trails and mountains, finding inspiration in the great outdoors.",
    color: "from-green-400 to-green-600"
  },
  {
    name: "Football",
    icon: <Trophy className="h-8 w-8" />,
    description: "Playing football and staying active, enjoying team sports and competition.",
    color: "from-blue-400 to-blue-600"
  }
];

const Hobbies = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Beyond Code
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My interests and hobbies that keep me balanced and inspired
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <Card 
              key={hobby.name}
              className="p-8 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${hobby.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {hobby.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {hobby.name}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {hobby.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-card-gradient border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Work-Life Balance</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in maintaining a healthy work-life balance. These hobbies help me stay creative, 
              physically active, and mentally refreshed, which ultimately makes me a better developer and problem solver.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;