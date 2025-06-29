
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { trackButtonClick } from "@/lib/analytics-utils";

interface HeroContentProps {
  isVisible: boolean;
  scrollToNewsletter: () => void;
}

const HeroContent = ({ isVisible, scrollToNewsletter }: HeroContentProps) => {
  const handleGetBlueprint = () => {
    trackButtonClick('Get the Blueprint', 'hero_section', 'scroll_to_newsletter');
    scrollToNewsletter();
  };

  return (
    <div className="text-center mb-16 relative">
      {/* Urban grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.8)_1px,_transparent_0)] bg-[length:8px_8px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_46%,_rgba(0,0,0,0.2)_47%,_rgba(0,0,0,0.2)_53%,_transparent_54%)] bg-[length:4px_4px] opacity-60"></div>
      </div>

      {/* Subtle graffiti tags background */}
      <div className="absolute top-10 right-10 transform rotate-12 opacity-[0.08] pointer-events-none" aria-hidden="true">
        <div 
          className="text-[#247EFF] text-6xl font-black"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
            filter: 'blur(0.5px)'
          }}
        >
          BUILT FOR THIS
        </div>
        {/* Drip effect */}
        <div className="absolute bottom-0 left-8 w-2 h-8 bg-[#247EFF] opacity-40 transform rotate-12 blur-sm"></div>
      </div>

      <div className="absolute bottom-20 left-10 transform -rotate-6 opacity-[0.06] pointer-events-none" aria-hidden="true">
        <div 
          className="text-[#FFD700] text-4xl font-black"
          style={{ 
            fontFamily: "'Permanent Marker', 'Kalam', cursive",
            textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
            filter: 'blur(0.3px)'
          }}
        >
          LEGACY
        </div>
      </div>

      <div className={`transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight text-brand-black dark:text-brand-cream relative">
          {/* Additional texture behind main heading */}
          <div className="absolute inset-0 opacity-[0.05] bg-[conic-gradient(from_0deg,_transparent_70%,_rgba(0,0,0,0.3)_90%,_transparent_100%)] bg-[length:15px_15px]"></div>
          
          Build <span 
            className="text-[#FFD700] relative overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s ease-in-out infinite'
            }}
          >
            Legacy
            {/* Pearlescent overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 animate-[shimmer_2s_ease-in-out_infinite]"
              style={{
                background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)',
                backgroundSize: '200% 100%',
                mixBlendMode: 'overlay'
              }}
            />
          </span><br />
          From <span 
            className="text-[#FFD700] relative overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s ease-in-out infinite'
            }}
          >
            Nothing
            {/* Pearlescent overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 animate-[shimmer_2s_ease-in-out_infinite]"
              style={{
                background: 'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)',
                backgroundSize: '200% 100%',
                mixBlendMode: 'overlay',
                animationDelay: '1s'
              }}
            />
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-brand-black dark:text-brand-cream leading-relaxed px-4">
          Street-smart strategies for building wealth, flipping AI hustles, and breaking money trauma.
        </p>

        {/* Single Primary CTA */}
        <div className="flex justify-center mb-12 px-4">
          <Button 
            size="lg"
            onClick={handleGetBlueprint}
            className="w-full sm:w-auto bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700] after:absolute after:inset-0 after:bg-gradient-to-45 after:from-transparent after:via-white/20 after:to-transparent after:animate-[shimmer_3s_ease-in-out_infinite]"
            aria-label="Get the wealth building blueprint - scroll to newsletter signup"
          >
            <Zap className="mr-3 h-5 w-5 sm:h-6 sm:w-6" aria-label="Lightning bolt icon representing fast action" />
            Get the Blueprint
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
