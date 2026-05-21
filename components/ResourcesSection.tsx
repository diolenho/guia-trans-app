import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, Phone, MapPin, Download, ExternalLink } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      icon: FileText,
      title: "Guias e Documentos",
      description: "PDFs informativos sobre todos os aspectos da transição",
      items: ["Manual de Transição", "Guia de Direitos", "Modelos de Documentos"],
      action: "Download"
    },
    {
      icon: Video,
      title: "Vídeos Educativos", 
      description: "Conteúdo visual com especialistas e experiências reais",
      items: ["Webinars médicos", "Depoimentos", "Tutoriais práticos"],
      action: "Assistir"
    },
    {
      icon: Phone,
      title: "Linhas de Apoio",
      description: "Contatos de emergência e suporte 24/7",
      items: ["Apoio emocional", "Orientação médica", "Suporte jurídico"],
      action: "Contatar"
    },
    {
      icon: MapPin,
      title: "Mapa de Serviços",
      description: "Encontre profissionais e serviços especializados",
      items: ["Médicos especialistas", "Advogados", "Grupos de apoio"],
      action: "Localizar"
    }
  ];

  const faqs = [
    {
      question: "O que é uma pessoa trans?",
      category: "Básico"
    },
    {
      question: "Como começar a minha transição?",
      category: "Início"
    },
    {
      question: "Como escolher meu nome?",
      category: "Social"
    },
    {
      question: "O que é expressão de gênero?",
      category: "Identidade"
    },
    {
      question: "Quais passos preciso seguir?",
      category: "Processo"
    }
  ];

  return (
    <section id="recursos" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Recursos e Apoio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa para sua jornada: guias completos, apoio especializado e uma comunidade acolhedora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-card-gradient border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <resource.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <ul className="text-xs text-muted-foreground mb-6 space-y-1">
                  {resource.items.map((item, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button 
                  size="sm" 
                  className="w-full bg-button-gradient hover:scale-105 transition-smooth text-xs"
                >
                  {resource.action}
                  {resource.action === "Download" ? (
                    <Download className="ml-1 h-3 w-3" />
                  ) : (
                    <ExternalLink className="ml-1 h-3 w-3" />
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Principais Dúvidas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card hover:bg-card/80 transition-smooth cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-xs text-primary font-medium mb-2">
                    {faq.category}
                  </div>
                  <h4 className="text-sm font-medium text-foreground leading-tight">
                    {faq.question}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-primary/20 hover:bg-primary/5"
            >
              Ver todas as perguntas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;