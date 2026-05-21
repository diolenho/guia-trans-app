import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const navigate = useNavigate();

  const resources = [
    {
      category: "Comunidades Online",
      items: [
        {
          title: "r/TransBrasil",
          description: "Comunidade brasileira no Reddit",
          url: "https://reddit.com/r/transbrasil",
          type: "Reddit"
        },
        {
          title: "r/MtF",
          description: "Comunidade internacional MtF",
          url: "https://reddit.com/r/MtF",
          type: "Reddit"
        },
        {
          title: "r/FtM",
          description: "Comunidade internacional FtM",
          url: "https://reddit.com/r/FtM",
          type: "Reddit"
        }
      ]
    },
    {
      category: "Recursos Médicos",
      items: [
        {
          title: "Transbucket",
          description: "Resultados de cirurgias e procedimentos",
          url: "https://transbucket.com",
          type: "Website"
        },
        {
          title: "WPATH Guidelines",
          description: "Diretrizes mundiais de cuidado trans",
          url: "https://wpath.org",
          type: "Guia"
        }
      ]
    },
    {
      category: "Profissionais",
      items: [
        {
          title: "Diretório de Profissionais Trans-Friendly",
          description: "Lista de médicos e psicólogos especializados",
          url: "#",
          type: "E-book"
        },
        {
          title: "Guia de Endocrinologistas",
          description: "Profissionais especializados em TH",
          url: "#",
          type: "PDF"
        }
      ]
    },
    {
      category: "Redes Sociais",
      items: [
        {
          title: "@transvisibilidade",
          description: "Conteúdo educativo e representatividade",
          url: "https://instagram.com/transvisibilidade",
          type: "Instagram"
        },
        {
          title: "@antra_oficial",
          description: "Associação Nacional de Travestis e Transexuais",
          url: "https://instagram.com/antra_oficial",
          type: "Instagram"
        },
        {
          title: "@ibrat_oficial",
          description: "Instituto Brasileiro de Transmasculinidades",
          url: "https://instagram.com/ibrat_oficial",
          type: "Instagram"
        }
      ]
    },
    {
      category: "Linhas de Apoio",
      items: [
        {
          title: "CVV - Centro de Valorização da Vida",
          description: "Apoio emocional e prevenção ao suicídio - 188",
          url: "https://cvv.org.br",
          type: "Telefone"
        },
        {
          title: "Disque 100",
          description: "Denúncias de violações de direitos humanos",
          url: "https://www.gov.br/mdh/pt-br/assuntos/noticias/2021/marco/disque-100-recebe-denuncias-de-violacoes-de-direitos-humanos",
          type: "Telefone"
        },
        {
          title: "Mapa da Diversidade",
          description: "Rede de apoio psicológico LGBTI+",
          url: "https://mapadiversidade.com.br",
          type: "Website"
        }
      ]
    },
    {
      category: "Emprego",
      items: [
        {
          title: "TransEmpregos",
          description: "Plataforma de vagas inclusivas para pessoas trans",
          url: "https://transempregos.com.br",
          type: "Website"
        },
        {
          title: "Diversidade em Foco",
          description: "Portal de vagas com foco em diversidade",
          url: "#",
          type: "Website"
        }
      ]
    },
    {
      category: "YouTube",
      items: [
        {
          title: "Canal Trans",
          description: "Vlogs e experiências de transição",
          url: "#",
          type: "YouTube"
        },
        {
          title: "Dicas de Transição",
          description: "Tutoriais e dicas práticas",
          url: "#",
          type: "YouTube"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-lg border-b border-border/50 px-4 py-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted/50 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Recursos</h1>
          <div className="w-10" />
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Recursos de Apoio
            </h2>
            <p className="text-muted-foreground text-sm">
              Links úteis para sua jornada de transição
            </p>
          </div>

          <div className="space-y-6">
            {resources.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="border-0 shadow-soft">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium text-foreground">
                                {item.title}
                              </h4>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                {item.type}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                          >
                            <a 
                              href={item.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;