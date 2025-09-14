import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : ''
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-text-secondary hover:text-primary transition-smooth"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-text-secondary hover:text-primary transition-smooth"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-text-secondary hover:text-primary transition-smooth"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-text-secondary hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;