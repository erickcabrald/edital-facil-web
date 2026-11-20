import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/lib/theme";
import { ThemeToggle } from "@/components/theme-toggle";
import { EditalApp } from "@/components/edital-app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edital Fácil — Analise editais em segundos com IA" },
      {
        name: "description",
        content:
          "Envie o PDF de um edital e receba automaticamente datas, requisitos, documentos e informações essenciais para sua inscrição.",
      },
      { property: "og:title", content: "Edital Fácil" },
      {
        property: "og:description",
        content:
          "Analise editais em segundos com IA. Datas, requisitos e documentos direto ao ponto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-dvh bg-gradient-to-b from-background via-background to-primary/5">
        <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md print:hidden">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-semibold tracking-tight">
                  Edital Fácil
                </span>
                <span className="text-[11px] text-muted-foreground">
                  Editais claros com IA
                </span>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main>
          <EditalApp />
        </main>

        <footer className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground print:hidden">
          © {new Date().getFullYear()} Edital Fácil. Todos os direitos
          reservados.
        </footer>

        <Toaster richColors position="top-center" />
      </div>
    </ThemeProvider>
  );
}
