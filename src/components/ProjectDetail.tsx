import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useEffect, useRef } from 'react';
import projectDental from '@/assets/project-dental.avif';
import projectDental2 from '@/assets/project-dental-2.avif';
import projectDental3 from '@/assets/project-dental-3.webp';
import projectDental4New from '@/assets/project-dental-4-new.avif';
import projectDental4 from '@/assets/project-dental-4.avif';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectSaas from '@/assets/project-saas.jpg';
import projectAgency from '@/assets/project-agency.jpg';
import projectRestaurant from '@/assets/project-restaurant.jpg';
import projectMobile from '@/assets/project-mobile.jpg';

const projectData = {
  'dental-website': {
    title: 'Dental website & CRM',
    category: 'Web Design',
    description: 'I designed a modern dental practice website that combines clean aesthetics with user-friendly functionality. The design features a calming color palette, intuitive navigation, and seamless appointment booking system. The responsive layout ensures optimal viewing across all devices while maintaining the professional medical aesthetic.',
    images: [projectDental, projectDental2, projectDental3, projectDental4New, projectDental4], // Dental project images
    liveUrl: 'https://example.com',
    technologies: ['Adobe Photoshop', 'Figma']
  },
  'ecommerce-platform': {
    title: 'E-commerce platform',
    category: 'Web Development',
    description: 'A comprehensive e-commerce platform designed for fashion brands. Features include product catalog, shopping cart, secure checkout, and admin dashboard. The design emphasizes visual appeal with large product images and smooth user interactions throughout the shopping journey.',
    images: [projectEcommerce, projectDental, projectSaas, projectAgency, projectRestaurant, projectMobile],
    liveUrl: 'https://example.com',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS']
  },
  'saas-dashboard': {
    title: 'Spektr website and branding',
    category: 'Branding',
    description: 'Complete brand identity and website design with modern visual elements. The project involved creating a cohesive brand system, logo design, and responsive website that reflects the company\'s innovative approach and professional standards.',
    images: [projectSaas, projectDental, projectEcommerce, projectAgency, projectRestaurant, projectMobile],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Creative Suite', 'Figma', 'React', 'CSS', 'JavaScript']
  },
  'creative-agency': {
    title: 'Master WiZR Website',
    category: 'Web Design',
    description: 'Professional website design with focus on user experience and functionality. The design emphasizes clean layouts, intuitive navigation, and responsive design principles to create an engaging digital experience across all devices.',
    images: [projectAgency, projectDental, projectEcommerce, projectSaas, projectRestaurant, projectMobile],
    liveUrl: 'https://example.com',
    technologies: ['Figma', 'React', 'Tailwind CSS', 'JavaScript', 'CSS Animations']
  },
  'restaurant-website': {
    title: 'MStudio Product',
    category: 'Product Design',
    description: 'Product design and development with attention to detail and usability. The project focused on creating user-centered design solutions that balance functionality with aesthetic appeal, ensuring optimal user experience and product success.',
    images: [projectRestaurant, projectDental, projectEcommerce, projectSaas, projectAgency, projectMobile],
    liveUrl: 'https://example.com',
    technologies: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Prototyping', 'User Research']
  },
  'mobile-app': {
    title: 'Logos',
    category: 'Logo Design',
    description: 'Professional logo design with strong brand identity and visual impact. The design process involved concept development, typography selection, and color palette creation to establish memorable and versatile brand marks for various applications.',
    images: [projectMobile, projectDental, projectEcommerce, projectSaas, projectAgency, projectRestaurant],
    liveUrl: 'https://example.com',  
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Brand Guidelines', 'Typography']
  },
  'social-media': {
    title: 'Social Media',
    category: 'Social Media',
    description: 'Creative social media content and campaign design with engaging visuals that drive audience engagement. The project involved creating cohesive visual content across multiple platforms while maintaining brand consistency and maximizing reach.',
    images: [projectSaas, projectDental, projectEcommerce, projectAgency, projectRestaurant, projectMobile],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Creative Suite', 'Canva', 'Social Media Tools', 'Content Strategy', 'Analytics']
  },
  'printing': {
    title: 'Printing',
    category: 'Print Design',
    description: 'High-quality print materials including business cards, flyers and promotional items designed for maximum visual impact. The project focused on creating print-ready designs that maintain quality across different print mediums and formats.',
    images: [projectAgency, projectDental, projectEcommerce, projectSaas, projectRestaurant, projectMobile],
    liveUrl: 'https://example.com',
    technologies: ['Adobe InDesign', 'Adobe Illustrator', 'Print Production', 'Color Management', 'Typography']
  },
  'astz-website': {
    title: 'ASTZ website & CRM',
    category: 'Web Design',
    description: 'Corporate website and customer relationship management system integration designed for business efficiency. The project combined modern web design with powerful CRM functionality to streamline business operations and improve customer relationships.',
    images: [projectEcommerce, projectDental, projectSaas, projectAgency, projectRestaurant, projectMobile],
    liveUrl: 'https://example.com',
    technologies: ['React', 'CRM Integration', 'Database Design', 'API Development', 'Responsive Design']
  },
  'presentations': {
    title: 'Presentations Design',
    category: 'Presentation Design',
    description: 'Professional presentation design with compelling visuals and clear messaging that captivate audiences. The project involved creating slide templates, infographics, and visual storytelling elements that enhance communication effectiveness.',
    images: [projectRestaurant, projectDental, projectEcommerce, projectSaas, projectAgency, projectMobile],
    liveUrl: 'https://example.com',
    technologies: ['PowerPoint', 'Keynote', 'Adobe Creative Suite', 'Infographic Design', 'Visual Communication']
  },
  'brochures': {
    title: 'Brochures',
    category: 'Print Design',
    description: 'Informative and visually appealing brochure design for various industries that effectively communicate brand messages. The designs balance text and imagery to create engaging marketing materials that drive customer action.',
    images: [projectMobile, projectDental, projectEcommerce, projectSaas, projectAgency, projectRestaurant],
    liveUrl: 'https://example.com',
    technologies: ['Adobe InDesign', 'Adobe Photoshop', 'Print Layout', 'Marketing Design', 'Brand Communication']
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  if (!projectId || !projectData[projectId as keyof typeof projectData]) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const project = projectData[projectId as keyof typeof projectData];

  // Auto-scroll effect for image carousel
  useEffect(() => {
    if (!scrollRef.current) return;
    
    const scrollContainer = scrollRef.current;
    
    const scrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000);
    
    return () => {
      clearInterval(scrollInterval);
    };
  }, [project]);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Navigation */}
        <div className="mb-8 animate-fade-in">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-text-secondary hover:text-primary transition-smooth"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <span className="text-primary bg-primary/10 px-4 py-2 rounded-full text-sm font-medium">
              {project.category}
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Live</span>
            </a>
          </div>
          <h1 className="text-section-title text-text-primary mb-6">
            {project.title}
          </h1>
          <p className="text-body-large">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-12 animate-fade-in-up">
          <h3 className="text-xl font-bold text-text-primary mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-2 bg-surface-elevated text-text-secondary rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Images */}
        <div className="space-y-8">
          {project.images.slice(0, -1).map((image, index) => (
            <div
              key={index}
              className="animate-fade-in-up rounded-xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-auto rounded-xl transition-smooth hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

        {/* Auto-scrolling Image Carousel */}
        <div className="mt-12 animate-fade-in-up">
          <h3 className="text-xl font-bold text-text-primary mb-6">Project Gallery</h3>
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {project.images.map((image, index) => (
              <div
                key={`carousel-${index}`}
                className="flex-shrink-0 w-64 h-48 rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${project.title} - Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-smooth hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Interested in working together?
          </h3>
          <p className="text-body-large mb-8">
            Let's discuss your next project and create something amazing.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium transition-smooth hover:bg-primary/90"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;