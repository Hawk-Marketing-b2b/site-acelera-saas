import { useState, useEffect } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import logoAceleraSaas from "@/assets/favicon.png";

export function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Método", href: "#metodo" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img src={logoAceleraSaas} alt="Acelera SaaS" className="h-8 w-8" />
              <span className="font-bold text-foreground">
                Acelera<span className="text-gradient">SaaS</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <ShinyButton onClick={() => setIsDialogOpen(true)}>
              Falar com Especialista
            </ShinyButton>
          </div>
        </div>
      </header>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Fale com um Especialista</DialogTitle>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
