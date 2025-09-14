import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import projectDental from '@/assets/project-dental.avif';
import projectDental2 from '@/assets/project-dental-2.avif';
import projectDental3 from '@/assets/project-dental-3.webp';
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
    images: [projectDental, projectDental2, projectDental3, projectAgency, projectRestaurant, projectMobile], // Placeholder - using different images as examples
    liveUrl: 'https://example.com',
    technologies: ['Adobe Photoshop', 'Figma']
  },
  'ecommerce-platform': {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A comprehensive e-commerce platform designed for fashion brands. Features include product catalog, shopping cart, secure checkout, and admin dashboard. The design emphasizes visual appeal with large product images and smooth user interactions throughout the shopping journey.',
    images: [projectEcommerce, projectDental, projectSaas, projectAgency, projectRestaurant, projectMobile],
    liveUrl: 'https://example.com',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS']
  },
  'saas-dashboard': {
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    description: 'An intuitive dashboard interface for a tech startup\'s SaaS platform. The design focuses on data visualization, user analytics, and streamlined workflows. Clean typography and strategic use of color help users quickly understand complex information.',
    images: [projectSaas, projectDental, projectEcommerce, projectAgency, projectRestaurant, projectMobile],
    liveUrl: 'https://example.com',
    technologies: ['Figma', 'React', 'D3.js', 'TypeScript', 'Chart.js']
  },
  'creative-agency': {
    title: 'Creative Agency',
    category: 'Branding',
    description: 'Complete brand identity and website design for a creative digital agency. The project involved logo design, brand guidelines, and a portfolio website that showcases their creative work. Bold typography and vibrant colors reflect the agency\'s innovative approach.',
    images: [projectAgency, projectDental, projectEcommerce, projectSaas, projectRestaurant, projectMobile],
    liveUrl: 'https://example.com',
    technologies: ['Adobe Creative Suite', 'Figma', 'React', 'GSAP', 'CSS Animations']
  },
  'restaurant-website': {
    title: 'Restaurant Website',
    category: 'Web Design',
    description: 'An elegant restaurant website featuring menu showcase, online reservations, and photo gallery. The design emphasizes food photography and creates an inviting atmosphere that reflects the restaurant\'s ambiance. Mobile-first approach ensures great experience on all devices.',
    images: [projectRestaurant, projectDental, projectEcommerce, projectSaas, projectAgency, projectMobile],
    liveUrl: 'https://example.com',
    technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'OpenTable API']
  },
  'mobile-app': {
    title: 'Mobile App UI',
    category: 'Mobile Design',
    description: 'Modern mobile application interface design focusing on user experience and intuitive navigation. The app features clean layouts, smooth animations, and accessibility considerations. Consistent design system ensures cohesive experience across all screens.',
    images: [projectMobile, projectDental, projectEcommerce, projectSaas, projectAgency, projectRestaurant],
    liveUrl: 'https://example.com',  
    technologies: ['Figma', 'Sketch', 'Principle', 'React Native', 'Adobe XD']
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
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
          {project.images.map((image, index) => (
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