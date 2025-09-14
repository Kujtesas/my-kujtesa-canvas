import { Link } from 'react-router-dom';
import projectDental from '@/assets/project-dental.avif';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectSaas from '@/assets/project-saas.jpg';
import projectAgency from '@/assets/project-agency.jpg';
import projectRestaurant from '@/assets/project-restaurant.jpg';
import projectMobile from '@/assets/project-mobile.jpg';

const projects = [
  {
    id: 'dental-website',
    title: 'Dental website & CRM',
    category: 'Web Design',
    image: projectDental,
    description: 'Modern dental practice website with clean design and appointment booking system.'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce platform',
    category: 'Web Development',
    image: projectEcommerce,
    description: 'Full-featured e-commerce platform with responsive design and seamless checkout.'
  },
  {
    id: 'saas-dashboard',
    title: 'Spektr website and branding',
    category: 'Branding',
    image: projectSaas,
    description: 'Complete brand identity and website design with modern visual elements.'
  },
  {
    id: 'creative-agency',
    title: 'Master WiZR Website',
    category: 'Web Design',
    image: projectAgency,
    description: 'Professional website design with focus on user experience and functionality.'
  },
  {
    id: 'restaurant-website',
    title: 'MStudio Product',
    category: 'Product Design',
    image: projectRestaurant,
    description: 'Product design and development with attention to detail and usability.'
  },
  {
    id: 'mobile-app',
    title: 'Logos',
    category: 'Logo Design',
    image: projectMobile,
    description: 'Professional logo design with strong brand identity and visual impact.'
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