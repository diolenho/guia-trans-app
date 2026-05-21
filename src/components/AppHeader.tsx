import { Button } from "@/components/ui/button";
import { Heart, Menu, Bell } from "lucide-react";

const AppHeader = () => {
  return (
    <header className="bg-card/95 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="p-2">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-button-gradient bg-clip-text text-transparent">
              GUIA TRANS
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-secondary-foreground">U</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;