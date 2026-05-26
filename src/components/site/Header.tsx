import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import logoAceleraSaas from "@/assets/logo-acelera-saas.png";

export function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Serviços", hash: "#servicos" },
    { label: "Método", hash: "#metodo" },
    { label: "Diferenciais", hash: "#diferenciais" },
    { label: "Depoimentos", hash: "#depoimentos" },
    { label: "Contato", hash: "#contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-sm" : ""
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 lg:h-32">
            <Link to="/" className="flex items-center">
              <img src={logoAceleraSaas} alt="Acelera SaaS" className="h-32 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={isHome ? item.hash : `/${item.hash}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <ShinyButton className="hidden sm:flex" onClick={() => setIsDialogOpen(true)}>
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
