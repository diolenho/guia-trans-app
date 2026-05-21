import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Plus, Check, Edit3, CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { User, Stethoscope, Scale, Heart } from "lucide-react";

const Journey = () => {
  const navigate = useNavigate();
  const [selectedActions, setSelectedActions] = useState<string[]>([]);
  const [customAction, setCustomAction] = useState("");
  const [customActions, setCustomActions] = useState<string[]>([]);
  const [journeySaved, setJourneySaved] = useState(false);
  const [completedActions, setCompletedActions] = useState<string[]>([]);

  const actionCategories = [
    {
      title: "Transição Social",
      description: "Mudanças na apresentação e identidade social",
      icon: User,
      color: "bg-blue-500/10 text-blue-600",
      actions: [
        "Escolher nome social",
        "Comunicar mudança para família",
        "Comunicar mudança no trabalho",
        "Atualizar redes sociais",
        "Experimentar com vestimentas",
        "Treinar voz",
      ]
    },
    {
      title: "Transição Médica",
      description: "Procedimentos e acompanhamento médico",
      icon: Stethoscope,
      color: "bg-pink-500/10 text-pink-600",
      actions: [
        "Consulta com endocrinologista",
        "Iniciar terapia hormonal",
        "Acompanhamento psicológico",
        "Exames de rotina",
        "Cirurgias (se desejado)",
        "Acompanhamento nutricional",
      ]
    },
    {
      title: "Transição Jurídica",
      description: "Documentação e direitos legais",
      icon: Scale,
      color: "bg-purple-500/10 text-purple-600",
      actions: [
        "Retificação de nome civil",
        "Mudança de gênero nos documentos",
        "Atualizar CPF",
        "Atualizar RG",
        "Atualizar passaporte",
        "Conhecer direitos trabalhistas",
      ]
    },
    {
      title: "Suporte Emocional",
      description: "Cuidado com saúde mental e bem-estar",
      icon: Heart,
      color: "bg-red-500/10 text-red-600",
      actions: [
        "Terapia individual",
        "Grupos de apoio",
        "Técnicas de autocuidado",
        "Mindfulness e meditação",
        "Exercícios físicos",
        "Hobbies e atividades prazerosas",
      ]
    }
  ];

  const toggleAction = (actionId: string) => {
    setSelectedActions(prev => 
      prev.includes(actionId) 
        ? prev.filter(id => id !== actionId)
        : [...prev, actionId]
    );
  };

  const addCustomAction = () => {
    if (customAction.trim()) {
      setCustomActions(prev => [...prev, customAction.trim()]);
      const actionId = `custom-${customActions.length}`;
      setSelectedActions(prev => [...prev, actionId]);
      setCustomAction("");
    }
  };

  const saveJourney = () => {
    setJourneySaved(true);
  };

  const editJourney = () => {
    setJourneySaved(false);
  };

  const toggleActionComplete = (actionId: string) => {
    setCompletedActions(prev =>
      prev.includes(actionId)
        ? prev.filter(id => id !== actionId)
        : [...prev, actionId]
    );
  };

  const getAllActions = () => {
    const predefinedActions: Array<{id: string, text: string, category: string}> = [];
    actionCategories.forEach((category, categoryIndex) => {
      category.actions.forEach((action, actionIndex) => {
        const actionId = `${categoryIndex}-${actionIndex}`;
        if (selectedActions.includes(actionId)) {
          predefinedActions.push({
            id: actionId,
            text: action,
            category: category.title
          });
        }
      });
    });

    const customSelectedActions = customActions.map((action, index) => ({
      id: `custom-${index}`,
      text: action,
      category: "Personalizada"
    })).filter(action => selectedActions.includes(action.id));

    return [...predefinedActions, ...customSelectedActions];
  };

  const progress = selectedActions.length > 0 ? (completedActions.length / selectedActions.length) * 100 : 0;

  if (journeySaved) {
    const allActions = getAllActions();
    
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
            <h1 className="text-lg font-semibold text-foreground">Minha Jornada</h1>
            <button 
              onClick={editJourney}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted/50 transition-colors"
            >
              <Edit3 className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </header>

        <div className="px-4 py-6">
          <div className="max-w-md mx-auto">
            {/* Progress Card */}
            <Card className="mb-6 border-0 shadow-soft bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">Progresso da Jornada</h3>
                  <Badge variant="secondary">{Math.round(progress)}%</Badge>
                </div>
                <Progress value={progress} className="h-2 mb-2" />
                <div className="text-sm text-muted-foreground">
                  {completedActions.length} de {selectedActions.length} ações concluídas
                </div>
              </CardContent>
            </Card>

            {/* Actions List */}
            <div className="space-y-3">
              {allActions.map((action) => {
                const isCompleted = completedActions.includes(action.id);
                return (
                  <Card key={action.id} className="border-0 shadow-soft">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleActionComplete(action.id)}
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                            isCompleted 
                              ? "bg-primary border-primary text-primary-foreground" 
                              : "border-muted-foreground hover:border-primary"
                          }`}
                        >
                          {isCompleted && <Check className="h-3 w-3" />}
                        </button>
                        <div className="flex-1">
                          <div className={`font-medium ${isCompleted ? "line-through text-muted-foreground" : "text-foreground"}`}>
                            {action.text}
                          </div>
                          <Badge variant="outline" className="text-xs mt-1">
                            {action.category}
                          </Badge>
                        </div>
                        {!isCompleted && <Clock className="h-4 w-4 text-muted-foreground" />}
                        {isCompleted && <CheckCircle className="h-4 w-4 text-primary" />}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          <h1 className="text-lg font-semibold text-foreground">Minha Jornada</h1>
          <div className="w-10" />
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Progress Summary */}
          <Card className="mb-6 border-0 shadow-soft bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {selectedActions.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  ações adicionadas à sua jornada
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Monte sua jornada personalizada
            </h2>
            <p className="text-muted-foreground text-sm">
              Selecione as ações que fazem sentido para o seu momento de transição
            </p>
          </div>

          {/* Custom Action Input */}
          <Card className="mb-4 border-0 shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Ação Personalizada</CardTitle>
              <p className="text-xs text-muted-foreground">Adicione uma ação específica para sua jornada</p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex gap-2">
                <Input
                  placeholder="Digite sua ação personalizada..."
                  value={customAction}
                  onChange={(e) => setCustomAction(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addCustomAction()}
                />
                <Button onClick={addCustomAction} size="icon" variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Custom Actions Display */}
          {customActions.length > 0 && (
            <Card className="mb-4 border-0 shadow-soft">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Ações Personalizadas</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid gap-2">
                  {customActions.map((action, index) => {
                    const actionId = `custom-${index}`;
                    const isSelected = selectedActions.includes(actionId);
                    
                    return (
                      <button
                        key={index}
                        onClick={() => toggleAction(actionId)}
                        className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                          isSelected
                            ? "bg-primary/10 border-primary/20 text-primary"
                            : "bg-muted/30 border-border hover:bg-muted/50 text-foreground"
                        }`}
                      >
                        <span className="text-sm font-medium text-left">{action}</span>
                        {isSelected ? (
                          <Check className="h-4 w-4 flex-shrink-0" />
                        ) : (
                          <Plus className="h-4 w-4 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Categories */}
          <div className="space-y-4">
            {actionCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Card key={categoryIndex} className="border-0 shadow-soft">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl ${category.color} flex items-center justify-center`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{category.title}</CardTitle>
                        <p className="text-xs text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid gap-2">
                      {category.actions.map((action, actionIndex) => {
                        const actionId = `${categoryIndex}-${actionIndex}`;
                        const isSelected = selectedActions.includes(actionId);
                        
                        return (
                          <button
                            key={actionIndex}
                            onClick={() => toggleAction(actionId)}
                            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                              isSelected
                                ? "bg-primary/10 border-primary/20 text-primary"
                                : "bg-muted/30 border-border hover:bg-muted/50 text-foreground"
                            }`}
                          >
                            <span className="text-sm font-medium text-left">{action}</span>
                            {isSelected ? (
                              <Check className="h-4 w-4 flex-shrink-0" />
                            ) : (
                              <Plus className="h-4 w-4 flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Save Journey Button */}
          {selectedActions.length > 0 && (
            <div className="mt-6 sticky bottom-24 bg-background/95 backdrop-blur-lg border-t border-border/50 pt-4 -mx-4 px-4">
              <Button 
                onClick={saveJourney}
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
              >
                Salvar Minha Jornada ({selectedActions.length} ações)
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Journey;