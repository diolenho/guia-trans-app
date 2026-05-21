import { ArrowLeft, Heart, MessageCircle, Share, MoreHorizontal, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
const Community = () => {
  const navigate = useNavigate();
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const toggleLike = (postId: number) => {
    setLikedPosts(prev => prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]);
  };
  const posts = [{
    id: 1,
    author: "Maria Silva",
    username: "@maria_trans",
    avatar: "",
    time: "2h",
    category: "Dúvidas",
    content: "Alguém tem dicas para treinar a voz? Estou começando agora e qualquer ajuda é bem-vinda! 💙",
    likes: 15,
    comments: 8
  }, {
    id: 2,
    author: "João Santos",
    username: "@joao_ftm",
    avatar: "",
    time: "4h",
    category: "Conquista",
    content: "Hoje faz 1 ano que comecei a TH! Não consigo expressar a felicidade que sinto. Obrigado a todos que me apoiaram nessa jornada! 🏳️‍⚧️",
    likes: 42,
    comments: 12
  }, {
    id: 3,
    author: "Ana Costa",
    username: "@ana_support",
    avatar: "",
    time: "6h",
    category: "Apoio",
    content: "Lembrando que vocês não estão sozinhes! Se precisarem conversar, estou aqui. A comunidade é nossa força! 💜",
    likes: 28,
    comments: 5
  }, {
    id: 4,
    author: "Alex Ferreira",
    username: "@alex_nb",
    avatar: "",
    time: "8h",
    category: "Dicas",
    content: "Dica importante: sempre pesquisem bem os profissionais antes de marcar consulta. Infelizmente ainda há muito despreparo.",
    likes: 35,
    comments: 15
  }, {
    id: 5,
    author: "Lara Oliveira",
    username: "@lara_mtf",
    avatar: "",
    time: "1d",
    category: "Celebração",
    content: "Consegui retificar meus documentos! 🎉 Foram meses de processo, mas valeu cada segundo. Para quem está no processo, não desistam!",
    likes: 67,
    comments: 23
  }];
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Dúvidas":
        return "bg-blue-500/10 text-blue-600";
      case "Conquista":
        return "bg-green-500/10 text-green-600";
      case "Apoio":
        return "bg-purple-500/10 text-purple-600";
      case "Dicas":
        return "bg-orange-500/10 text-orange-600";
      case "Celebração":
        return "bg-pink-500/10 text-pink-600";
      default:
        return "bg-muted text-muted-foreground";
    }
  };
  return <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-lg border-b border-border/50 px-4 py-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted/50 transition-colors">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Comunidade</h1>
          <Button size="icon" variant="ghost">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Feed da Comunidade
            </h2>
            <p className="text-muted-foreground text-sm">
              Conecte-se, compartilhe e apoie outras pessoas
            </p>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {posts.map(post => <Card key={post.id} className="border-0 shadow-soft">
                <CardContent className="p-4">
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-foreground text-sm">
                            {post.author}
                          </p>
                          <Badge className={`text-xs ${getCategoryColor(post.category)}`}>
                            {post.category}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {post.username} • {post.time}
                        </p>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Post Content */}
                  <p className="text-foreground text-sm mb-4 leading-relaxed">
                    {post.content}
                  </p>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <div className="flex items-center space-x-4">
                      <button onClick={() => toggleLike(post.id)} className="flex items-center space-x-1 transition-colors text-pink-400">
                        <Heart className={`h-4 w-4 ${likedPosts.includes(post.id) ? "fill-red-500 text-red-500" : ""}`} />
                        <span className="text-xs text-blue-400">
                          {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                        </span>
                      </button>
                      
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-xs">{post.comments}</span>
                      </button>
                    </div>

                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Share className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Load More */}
          <div className="mt-6 text-center">
            <Button variant="outline" className="w-full">
              Carregar mais posts
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Community;