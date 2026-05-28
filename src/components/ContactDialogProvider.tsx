import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

type Ctx = { open: () => void; close: () => void };

const ContactDialogContext = createContext<Ctx | null>(null);

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ContactDialogContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Fale com um Especialista</DialogTitle>
          </DialogHeader>
          <ContactForm onSuccess={close} />
        </DialogContent>
      </Dialog>
    </ContactDialogContext.Provider>
  );
}

export function useContactDialog() {
  const ctx = useContext(ContactDialogContext);
  if (!ctx) throw new Error("useContactDialog must be used inside ContactDialogProvider");
  return ctx;
}
