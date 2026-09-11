import { type ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/shared/quote-modal";

export function MainLayout({ children }: { children: ReactNode }) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
      <Header onQuoteOpen={() => setQuoteModalOpen(true)} />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer onQuoteOpen={() => setQuoteModalOpen(true)} />
    </div>
  );
}
