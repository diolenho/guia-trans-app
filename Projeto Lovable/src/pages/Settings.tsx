import { ArrowLeft, User, Bell, Shield, HelpCircle, LogOut, Edit3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Settings = () => {
  const navigate = useNavigate();
  const [pronouns, setPronouns] = useState("ela/dela");
  const [notifications, setNotifications] = useState(true);

  const settingsItems = [
    {
      icon: User,
      label: "Editar Perfil",
      description: "Nome, foto e informações pessoais",
      action: () => {},
      hasArrow: true
    },
    {
      icon: Bell,
      label: "Notificações",
      description: "Receber atualizações da comunidade",
      action: () => setNotifications(!notifications),
      hasSwitch: true,
      switchValue: notifications
    },
    {
      icon: Shield,
      label: "Privacidade",
      description: "Controle quem pode ver seu perfil",
      action: () => {},
      hasArrow: true
    },
    {
      icon: HelpCircle,
      label: "Ajuda e Suporte",
      description: "FAQ e contato",
      action: () => {},
      hasArrow: true
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
          <h1 className="text-lg font-semibold text-foreground">Configurações</h1>
          <div className="w-10" />
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Profile Card */}
          <Card className="mb-6 border-0 shadow-soft bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary/20 text-primary text-lg">
                    U
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    Usuário
                  </h3>
                  <Badge variant="secondary" className="mb-2">
                    {pronouns}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Membro desde janeiro 2024
                  </p>
                </div>
                <Button size="icon" variant="ghost">
                  <Edit3 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Pronouns Selection */}
          <Card className="mb-6 border-0 shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Pronomes</CardTitle>
              <p className="text-xs text-muted-foreground">
                Como você gostaria de ser tratade na comunidade?
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <Select value={pronouns} onValueChange={setPronouns}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ela/dela">ela/dela</SelectItem>
                  <SelectItem value="ele/dele">ele/dele</SelectItem>
                  <SelectItem value="elu/delu">elu/delu</SelectItem>
                  <SelectItem value="qualquer">qualquer pronome</SelectItem>
                  <SelectItem value="personalizado">personalizado</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Settings List */}
          <div className="space-y-3 mb-6">
            {settingsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="p-4">
                    <button
                      onClick={item.action}
                      className="flex items-center space-x-3 w-full text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">
                          {item.label}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      {item.hasSwitch && (
                        <Switch 
                          checked={item.switchValue} 
                          onCheckedChange={item.action}
                        />
                      )}
                      {item.hasArrow && (
                        <div className="text-muted-foreground">
                          <ArrowLeft className="h-4 w-4 rotate-180" />
                        </div>
                      )}
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Logout */}
          <Card className="border-0 shadow-soft border-destructive/20">
            <CardContent className="p-4">
              <button className="flex items-center space-x-3 w-full text-left text-destructive">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center">
                  <LogOut className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">
                    Sair da conta
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fazer logout do aplicativo
                  </p>
                </div>
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;