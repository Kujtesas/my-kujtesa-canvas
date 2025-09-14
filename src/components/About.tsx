const About = () => {
  const skills = [
    'Web Design',
    'UI/UX Design',
    'Brand Identity',
    'Mobile Design',
    'Graphic Design'
  ];

  return (
    <section id="about" className="py-20 px-6 surface-elevated">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-fade-in">
            <h2 className="text-section-title text-text-primary mb-8">
              Passionate Designer
            </h2>
            <div className="space-y-6">
              <p className="text-body-large">
                My love for design and my curiosity for new technologies have led me 
                to become a creative designer, and I have been fortunate enough to work 
                with various clients from diverse industries.
              </p>
              <p className="text-body-large">
                I believe that great design is not just about making things look beautiful, 
                but about solving problems and creating meaningful experiences that connect 
                with people on a deeper level.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-text-primary mb-8">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-6 py-3 bg-primary/10 text-primary rounded-full font-medium transition-smooth hover:bg-primary/20 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;