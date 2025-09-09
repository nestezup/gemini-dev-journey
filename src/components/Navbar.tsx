import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">
            DATA HUNTER
          </div>
          
          <Button variant="hero" size="sm" className="rounded-full">
            지금 바로 신청
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;