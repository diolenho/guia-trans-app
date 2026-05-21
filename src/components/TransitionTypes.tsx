import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Stethoscope, Scale, ArrowRight } from "lucide-react";

const TransitionTypes = () => {
  const transitionTypes = [
    {
      id: "social",
      icon: User,
      title: "Transição Social",
      description: "Orientações sobre mudanças de nome social, pronomes, vestimenta e relacionamentos interpessoais.",
      features: [
        "Nome social e documentos",
        "Relacionamentos familiares",
        "Ambiente de trabalho",
        "Comunidade e apoio"
      ],
      color: "bg-primary/10 hover:bg-primary/20"
    },
    {
      id: "medica",
      icon: Stethoscope,
      title: "Transição Médica",
      description: "Informações sobre terapia hormonal, cirurgias e acompanhamento médico especializado.",
      features: [
        "Terapia hormonal",
        "Cirurgias de afirmação",
        "Acompanhamento médico",
        "Saúde mental"
      ],
      color: "bg-secondary/10 hover:bg-secondary/20"
    },
    {
      id: "juridica",
      icon: Scale,
      title: "Transição Jurídica",
      description: "Processos legais para retificação de nome e gênero em documentos oficiais.",
      features: [
        "Retificação de documentos",
        "Processo judicial",
        "Direitos garantidos",
        "Assessoria jurídica"
      ],
      color: "bg-accent/10 hover:bg-accent/20 border-primary/20"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tipos de Transição
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada jornada é única. Explore os diferentes aspectos da transição e encontre as informações específicas para sua necessidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {transitionTypes.map((type) => (
            <Card 
              key={type.id} 
              className={`${type.color} border-0 shadow-soft transition-all duration-300 hover:shadow-glow hover:scale-105`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-card-gradient rounded-full flex items-center justify-center shadow-soft">
                  <type.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-2">
                  {type.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {type.description}
                </p>
                <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-button-gradient hover:scale-105 transition-smooth shadow-soft"
                >
                  Explorar {type.title.split(" ")[1]}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransitionTypes;