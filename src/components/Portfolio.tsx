import { Link } from 'react-router-dom';
import projectNew1 from '@/assets/project-new-1.avif';
import projectNew2 from '@/assets/project-new-2.avif';
import projectNew3 from '@/assets/project-new-3.avif';
import projectNew4 from '@/assets/project-new-4.avif';
import projectNew5 from '@/assets/project-new-5.jpg';
import dental1 from '@/assets/dental-1.jpg';
import wizr4 from '@/assets/wizr-4.webp';

const projects = [
  {
    id: 'dental-website',
    title: 'Dental website & CRM',
    category: 'Web Design',
    image: dental1,
    description: 'Modern dental practice website with clean design and appointment booking system.'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce platform',
    category: 'Web Development',
    image: projectNew2,
    description: 'Full-featured e-commerce platform with responsive design and seamless checkout.'
  },
  {
    id: 'saas-dashboard',
    title: 'Spektr website and branding',
    category: 'Branding',
    image: projectNew3,
    description: 'Complete brand identity and website design with modern visual elements.'
  },
  {
    id: 'creative-agency',
    title: 'Master WiZR Website',
    category: 'Web Design',
    image: wizr4,
    description: 'Professional website design with focus on user experience and functionality.'
  },
  {
    id: 'restaurant-website',
    title: 'MStudio Product',
    category: 'Product Design',
    image: projectNew5,
    description: 'Product design and development with attention to detail and usability.'
  },
  {
    id: 'mobile-app',
    title: 'Logos',
    category: 'Logo Design',
    image: projectNew1,
    description: 'Professional logo design with strong brand identity and visual impact.'
  },
  {
    id: 'social-media',
    title: 'Social Media',
    category: 'Social Media',
    image: projectNew2,
    description: 'Creative social media content and campaign design with engaging visuals.'
  },
  {
    id: 'printing',
    title: 'Printing',
    category: 'Print Design',
    image: projectNew3,
    description: 'High-quality print materials including business cards, flyers and promotional items.'
  },
  {
    id: 'astz-website',
    title: 'ASTZ website & CRM',
    category: 'Web Design',
    image: projectNew4,
    description: 'Corporate website and customer relationship management system integration.'
  },
  {
    id: 'presentations',
    title: 'Presentations Design',
    category: 'Presentation Design',
    image: projectNew5,
    description: 'Professional presentation design with compelling visuals and clear messaging.'
  },
  {
    id: 'brochures',
    title: 'Brochures',
    category: 'Print Design',
    image: projectNew1,
    description: 'Informative and visually appealing brochure design for various industries.'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title text-text-primary mb-6">
            Featured Work
          </h2>
          <p className="text-body-large max-w-2xl mx-auto">
            A showcase of my recent projects spanning web design, branding, 
            and digital experiences.
          </p>
        </div>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group animate-fade-in-up block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="surface-elevated rounded-xl overflow-hidden transition-smooth hover:surface-hover hover:scale-105">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;