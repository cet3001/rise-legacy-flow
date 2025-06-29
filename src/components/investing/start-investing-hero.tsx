
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Button } from "@/components/ui/button";

const StartInvestingHero = () => {
  return (
    <section className="pt-16 pb-24 bg-gradient-to-b from-brand-cream to-white dark:from-brand-black dark:to-brand-black/90 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#247EFF]/20 to-transparent"></div>
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#FFD700]/10 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-green-500/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <HeaderHierarchy level={1} className="mb-6 text-brand-black dark:text-brand-cream">
            Start Investing with <span className="text-[#FFD700]">$1</span>: Flip Your First Dollar Into <span className="text-[#247EFF]">Wealth</span>
          </HeaderHierarchy>
          
          <p className="text-xl text-brand-black/70 dark:text-brand-cream/70 leading-relaxed mb-8 max-w-3xl mx-auto">
            Forget what they told you—building wealth isn't just for Wall Street. Here's how you can start investing from the block, even if you've never touched stocks before.
          </p>

          {/* Phone mockup visual */}
          <div className="relative mx-auto mb-8 w-64 h-32 bg-gradient-to-r from-[#247EFF]/20 to-green-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#247EFF]/20">
            <div className="text-6xl">📱</div>
            <div className="absolute -top-2 -right-2 text-2xl">💰</div>
          </div>

          <Button 
            className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4 text-lg rounded-3xl border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]"
            style={{ 
              fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
              textShadow: '1px 1px 0px rgba(0,0,0,0.2)' 
            }}
            asChild
          >
            <a href="#steps">Start Your Journey</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StartInvestingHero;
