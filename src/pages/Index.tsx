import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="tech-stack">
          <TechStack />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        {/* <section id="education">
          <Education />
        </section> */}
        
        {/* <section id="testimonials">
          <Testimonials />
        </section> */}
        
        <section id="hobbies">
          <Hobbies />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
