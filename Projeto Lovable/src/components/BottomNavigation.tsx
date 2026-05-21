import { Home, User, BookOpen, MessageCircle, Settings } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  
  const tabs = [
    { id: "home", icon: Home, label: "Início" },
    { id: "journey", icon: User, label: "Jornada" },
    { id: "resources", icon: BookOpen, label: "Recursos" },
    { id: "community", icon: MessageCircle, label: "Comunidade" },
    { id: "settings", icon: Settings, label: "Config" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border/50 px-2 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                switch(tab.id) {
                  case "journey":
                    navigate('/journey');
                    break;
                  case "resources":
                    navigate('/resources');
                    break;
                  case "community":
                    navigate('/community');
                    break;
                  case "settings":
                    navigate('/settings');
                    break;
                  default:
                    navigate('/');
                }
              }}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 min-w-[60px] ${
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Icon className={`h-5 w-5 mb-1 ${isActive ? "scale-110" : ""}`} />
              <span className="text-xs font-medium">{tab.label}</span>
              {isActive && (
                <div className="w-4 h-0.5 bg-primary rounded-full mt-1" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;