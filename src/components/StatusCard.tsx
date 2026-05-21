import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, Clock } from "lucide-react";

const StatusCard = () => {
  return (
    <section className="px-4 py-6">
      <div className="max-w-sm mx-auto">
        <h2 className="text-lg font-semibold text-foreground mb-4">Minha Jornada</h2>
        
        <Card className="border-0 shadow-soft bg-card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-foreground">Progresso Geral</h3>
                <p className="text-sm text-muted-foreground">3 de 5 etapas concluídas</p>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Em Progresso
              </Badge>
            </div>
            
            <Progress value={60} className="mb-6" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Nome Social Definido</p>
                  <p className="text-xs text-muted-foreground">Completado em 15/03</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Documentos Solicitados</p>
                  <p className="text-xs text-muted-foreground">Completado em 20/03</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-orange-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Consulta Médica</p>
                  <p className="text-xs text-muted-foreground">Agendada para 25/03</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Próxima Etapa</span>
              </div>
              <p className="text-sm text-foreground">Iniciar terapia hormonal - Consulta marcada</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StatusCard;