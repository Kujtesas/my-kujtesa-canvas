import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useEffect, useRef } from 'react';
import projectNew1 from '@/assets/project-new-1.avif';
import projectNew2 from '@/assets/project-new-2.avif';
import projectNew3 from '@/assets/project-new-3.avif';
import projectNew4 from '@/assets/project-new-4.avif';
import projectNew5 from '@/assets/project-new-5.jpg';
import spektrHero from '@/assets/spektr-hero.jpg';
import dental1 from '@/assets/dental-1.jpg';
import dental2 from '@/assets/dental-2.avif';
import dental3 from '@/assets/dental-3.webp';
import dental4 from '@/assets/dental-4.avif';
import dental5 from '@/assets/dental-5.avif';
import wizr1 from '@/assets/wizr-1.avif';
import wizr2 from '@/assets/wizr-2.avif';
import wizr3 from '@/assets/wizr-3.avif';
import wizr4 from '@/assets/wizr-4.webp';
import wizr5 from '@/assets/wizr-5.avif';
import logo1 from '@/assets/logo-1.jpg';
import logo2 from '@/assets/logo-2.avif';
import logo3 from '@/assets/logo-3.avif';
import logo4 from '@/assets/logo-4.webp';
import logo5 from '@/assets/logo-5.avif';
import logo6 from '@/assets/logo-6.avif';
import social1 from '@/assets/social-1.avif';
import social2 from '@/assets/social-2.jpg';
import social3 from '@/assets/social-3.jpg';
import social4 from '@/assets/social-4.avif';
import social5 from '@/assets/social-5.avif';
import social6 from '@/assets/social-6.webp';

const projectData = {
  'dental-website': {
    title: 'Dental website & CRM',
    category: 'Web Design',
    description: 'I designed a modern dental practice website that combines clean aesthetics with user-friendly functionality. The design features a calming color palette, intuitive navigation, and seamless appointment booking system. The responsive layout ensures optimal viewing across all devices while maintaining the professional medical aesthetic.',
    images: [dental1, dental2, dental3, dental4, dental5],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Photoshop', 'Figma', 'Adobe Illustrator']
  },
  'ecommerce-platform': {
    title: 'E-commerce platform',
    category: 'Web Development',
    description: 'A comprehensive e-commerce platform designed for fashion brands. Features include product catalog, shopping cart, secure checkout, and admin dashboard. The design emphasizes visual appeal with large product images and smooth user interactions throughout the shopping journey.',
    images: [projectNew2, projectNew1, projectNew3, projectNew4, projectNew5],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Photoshop', 'Figma', 'Adobe Illustrator']
  },
  'saas-dashboard': {
    title: 'Spektr website and branding',
    category: 'Branding',
    description: 'Complete brand identity and website design with modern visual elements. The project involved creating a cohesive brand system, logo design, and responsive website that reflects the company\'s innovative approach and professional standards.',
    images: [spektrHero, projectNew3, projectNew1, projectNew2, projectNew4, projectNew5],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Photoshop', 'Figma', 'Adobe Illustrator']
  },
  'creative-agency': {
    title: 'Master WiZR Website',
    category: 'Web Design',
    description: 'Professional website design with focus on user experience and functionality. The design emphasizes clean layouts, intuitive navigation, and responsive design principles to create an engaging digital experience across all devices.',
    images: [wizr4, wizr5, wizr1, wizr2, wizr3],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Photoshop', 'Figma', 'Adobe Illustrator']
  },
  'restaurant-website': {
    title: 'MStudio Product',
    category: 'Product Design',
    description: 'Product design and development with attention to detail and usability. The project focused on creating user-centered design solutions that balance functionality with aesthetic appeal, ensuring optimal user experience and product success.',
    images: [projectNew5, projectNew1, projectNew2, projectNew3, projectNew4],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Photoshop', 'Figma', 'Adobe Illustrator']
  },
  'mobile-app': {
    title: 'Logos',
    category: 'Logo Design',
    description: 'Professional logo design with strong brand identity and visual impact. The design process involved concept development, typography selection, and color palette creation to establish memorable and versatile brand marks for various applications.',
    images: [logo1, logo6, logo4, logo2, logo3, logo5],
    liveUrl: 'https://example.com',  
    technologies: ['Adobe Photoshop', 'Figma', 'Adobe Illustrator']
  },
  'social-media': {
    title: 'Social Media',
    category: 'Social Media',
    description: 'Creative social media content and campaign design with engaging visuals that drive audience engagement. The project involved creating cohesive visual content across multiple platforms while maintaining brand consistency and maximizing reach.',
    images: [social1, social2, social3, social4, social5, social6],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Photoshop', 'Figma', 'Adobe Illustrator']
  },
  'printing': {
    title: 'Printing',
    category: 'Print Design',
    description: 'High-quality print materials including business cards, flyers and promotional items designed for maximum visual impact. The project focused on creating print-ready designs that maintain quality across different print mediums and formats.',
    images: [projectNew3, projectNew1, projectNew2, projectNew4, projectNew5],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Photoshop', 'Figma', 'Adobe Illustrator']
  },
  'astz-website': {
    title: 'ASTZ website & CRM',
    category: 'Web Design',
    description: 'Corporate website and customer relationship management system integration designed for business efficiency. The project combined modern web design with powerful CRM functionality to streamline business operations and improve customer relationships.',
    images: [projectNew4, projectNew1, projectNew2, projectNew3, projectNew5],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Photoshop', 'Figma', 'Adobe Illustrator']
  },
  'presentations': {
    title: 'Presentations Design',
    category: 'Presentation Design',
    description: 'Professional presentation design with compelling visuals and clear messaging that captivate audiences. The project involved creating slide templates, infographics, and visual storytelling elements that enhance communication effectiveness.',
    images: [projectNew5, projectNew1, projectNew2, projectNew3, projectNew4],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Photoshop', 'Figma', 'Adobe Illustrator']
  },
  'brochures': {
    title: 'Brochures',
    category: 'Print Design',
    description: 'Informative and visually appealing brochure design for various industries that effectively communicate brand messages. The designs balance text and imagery to create engaging marketing materials that drive customer action.',
    images: [projectNew1, projectNew2, projectNew3, projectNew4, projectNew5],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Photoshop', 'Figma', 'Adobe Illustrator']
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