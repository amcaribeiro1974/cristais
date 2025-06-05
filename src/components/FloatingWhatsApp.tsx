
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/559891753189";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => window.open(whatsappUrl, '_blank')}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};
