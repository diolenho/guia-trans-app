import { Button } from "@/components/ui/button";
import { Heart, User, BookOpen, Scale, Stethoscope } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-card/80 backdrop-blur-lg border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-hero-gradient rounded-full flex items-center justify-center shadow-glow">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-button-gradient bg-clip-text text-transparent">
              GUIA TRANS
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#social" className="text-foreground/80 hover:text-primary transition-smooth flex items-center gap-2">
              <User className="h-4 w-4" />
              Transição Social
            </a>
            <a href="#medica" className="text-foreground/80 hover:text-primary transition-smooth flex items-center gap-2">
              <Stethoscope className="h-4 w-4" />
              Transição Médica
            </a>
            <a href="#juridica" className="text-foreground/80 hover:text-primary transition-smooth flex items-center gap-2">
              <Scale className="h-4 w-4" />
              Transição Jurídica
            </a>
            <a href="#recursos" className="text-foreground/80 hover:text-primary transition-smooth flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Recursos
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Entrar
            </Button>
            <Button variant="default" size="sm" className="bg-button-gradient hover:scale-105 transition-smooth shadow-soft">
              Criar Conta
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;