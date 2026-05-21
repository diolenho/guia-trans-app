import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Stethoscope, Scale, Heart, MessageCircle, Calendar } from "lucide-react";
const QuickActions = () => {
  const actions = [{
    icon: User,
    title: "Transição Social",
    description: "Nome social, vestimentas e apresentação",
    color: "bg-blue-500/10 text-blue-600"
  }, {
    icon: Stethoscope,
    title: "Transição Médica",
    description: "Terapia hormonal e procedimentos",
    color: "bg-pink-500/10 text-pink-600"
  }, {
    icon: Scale,
    title: "Transição Jurídica",
    description: "Documentos e direitos legais",
    color: "bg-purple-500/10 text-purple-600"
  }, {
    icon: MessageCircle,
    title: "Comunidade",
    description: "Converse com outras pessoas",
    color: "bg-green-500/10 text-green-600"
  }, {
    icon: Heart,
    title: "Apoio",
    description: "Suporte emocional e grupos",
    color: "bg-red-500/10 text-red-600"
  }, {
    icon: Calendar,
    title: "Agendar",
    description: "Consultas e compromissos",
    color: "bg-orange-500/10 text-orange-600"
  }];
  return <section className="px-4 py-6">
      <div className="max-w-sm mx-auto">
        <h2 className="text-lg font-semibold text-foreground mb-4">Ações Rápidas</h2>
        
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => {
          const Icon = action.icon;
          return <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-smooth cursor-pointer hover:scale-[1.02]">
                <CardContent className="p-4 rounded-xl">
                  <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mb-3`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground mb-1">{action.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{action.description}</p>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default QuickActions;