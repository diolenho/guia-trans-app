import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart } from "lucide-react";

const CommunitySection = () => {
  const posts = [
    {
      id: 1,
      author: "Ana Paula",
      avatar: "AP",
      time: "2h",
      content: "Primeira consulta para terapia hormonal! Alguém tem dicas?",
      likes: 24,
      replies: 8,
      category: "Médico"
    },
    {
      id: 2,
      author: "Julia Santos",
      avatar: "JS", 
      time: "4h",
      content: "Consegui trocar meu nome nos documentos! Estou aqui para ajudar 💙",
      likes: 42,
      replies: 15,
      category: "Jurídico"
    }
  ];

  return (
    <section className="px-4 py-6">
      <div className="max-w-sm mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Comunidade</h2>
          <Button variant="ghost" size="sm" className="text-primary">
            Ver tudo
          </Button>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="border-0 shadow-soft bg-card-gradient">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-sm font-semibold text-secondary-foreground">
                    {post.avatar}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-sm font-semibold text-foreground truncate">{post.author}</h3>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{post.time}</span>
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-foreground mb-3 leading-relaxed">
                      {post.content}
                    </p>
                    
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-primary transition-smooth">
                        <Heart className="h-4 w-4" />
                        <span className="text-xs">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary transition-smooth">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-xs">{post.replies}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;