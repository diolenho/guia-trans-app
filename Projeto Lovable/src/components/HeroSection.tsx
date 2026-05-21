import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-hero-gradient px-4 pt-6 pb-8">
      <div className="max-w-sm mx-auto text-center">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl shadow-glow">
          <Heart className="h-8 w-8 text-white" />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-4 leading-tight">
          Sua jornada de
          <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            transição começa aqui
          </span>
        </h1>
        
        <p className="text-base text-white/90 mb-6 leading-relaxed">
          Informações confiáveis e apoio da comunidade para sua transição.
        </p>
        
        <div className="flex flex-col gap-3">
          <Button 
            size="lg" 
            onClick={() => navigate('/journey')}
            className="bg-white text-primary hover:bg-white/90 px-6 py-3 text-base font-semibold shadow-glow hover:scale-[1.02] transition-smooth w-full"
          >
            Começar Jornada
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-xl font-bold text-white mb-1">1K+</div>
            <div className="text-xs text-white/80">Ajudadas</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-xl font-bold text-white mb-1">50+</div>
            <div className="text-xs text-white/80">Recursos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-xl font-bold text-white mb-1">24/7</div>
            <div className="text-xs text-white/80">Apoio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;