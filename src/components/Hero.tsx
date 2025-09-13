import portraitImage from '@/assets/portrait.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-hero text-text-primary">
                Hey there, I am
              </h1>
              <h1 className="text-hero-accent">
                John Doe
              </h1>
            </div>
            
            <p className="text-body-large max-w-2xl">
              As a seasoned creative designer, I specialize in crafting visually 
              impactful designs that drive results and exceed expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium transition-smooth hover:bg-primary/90"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-border text-text-primary rounded-lg font-medium transition-smooth hover:bg-surface-elevated"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Portrait */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden">
                <img
                  src={portraitImage}
                  alt="John Doe - Creative Designer"
                  className="w-full h-full object-cover transition-smooth hover:scale-105"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-primary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;