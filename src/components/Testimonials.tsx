import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc.",
    image: "/placeholder.svg",
    rating: 5,
    content: "Alex is an exceptional developer who consistently delivers high-quality solutions. His attention to detail and ability to translate complex requirements into elegant code is remarkable. He's been instrumental in our product's success."
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    image: "/placeholder.svg",
    rating: 5,
    content: "Working with Alex was a game-changer for our startup. He not only built our entire platform from scratch but also provided valuable architectural insights that scaled beautifully as we grew to 50k+ users."
  },
  {
    name: "Lisa Rodriguez",
    role: "Lead Designer",
    company: "Digital Agency Pro",
    image: "/placeholder.svg",
    rating: 5,
    content: "Alex has an incredible ability to bring designs to life with pixel-perfect precision. His collaboration skills and proactive approach to problem-solving make him an invaluable team member."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues and clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at <span className="text-secondary">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want to work together? 
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-primary hover:text-secondary transition-colors ml-1"
            >
              Let's start a conversation
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;