import { Heart, Mail, MessageCircle, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-hero-gradient rounded-full flex items-center justify-center shadow-glow">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-button-gradient bg-clip-text text-transparent">
                GUIA TRANS
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Sua plataforma de apoio e informação para a jornada de transição. 
              Criado com amor pela comunidade trans, para a comunidade trans.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-full">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Transição Social</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Transição Médica</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Transição Jurídica</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Guias e Documentos</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Mapa de Serviços</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Comunidade</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Linha de Apoio</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Emergência</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Guia Trans. Feito com ❤️ pela comunidade trans.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary transition-smooth">Política de Privacidade</a>
            {" • "}
            <a href="#" className="hover:text-primary transition-smooth">Termos de Uso</a>
            {" • "}
            <a href="#" className="hover:text-primary transition-smooth">Código de Conduta</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;