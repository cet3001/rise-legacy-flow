
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BlogShowcase from "@/components/blog-showcase";
import NewsletterSection from "@/components/newsletter-section";
import ManifestoSection from "@/components/manifesto-section";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BlogShowcase />
      <ManifestoSection />
      <div data-section="newsletter">
        <NewsletterSection />
      </div>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
