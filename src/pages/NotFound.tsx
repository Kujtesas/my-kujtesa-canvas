import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-4xl font-bold text-text-primary">404</h1>
        <p className="mb-8 text-xl text-text-secondary">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium transition-smooth hover:bg-primary/90"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
