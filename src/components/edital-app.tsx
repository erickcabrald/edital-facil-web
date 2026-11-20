import { useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Copy,
  Download,
  FileDown,
  FileText,
  Info,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Sparkles,
  Upload,
  UploadCloud,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import type { EditalResult } from "@/lib/edital";
import { analisarEdital, formatBytes } from "@/lib/edital";

type Status = "idle" | "loading" | "success" | "error";

const PT = "pt-BR";

// Preserva quebras de linha/espacamento originais, sem interpretar Markdown.
function PlainText({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  if (children == null || children === "") return null;
  return <span className={`whitespace-pre-wrap break-words ${className}`}>{children}</span>;
}

function Section({
  id,
  icon: Icon,
  title,
  children,
  tone = "default",
}: {
  id?: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  tone?: "default" | "warning" | "danger";
}) {
  const toneCls =
    tone === "warning"
      ? "border-amber-500/30 bg-amber-500/5"
      : tone === "danger"
        ? "border-destructive/30 bg-destructive/5"
        : "";
  return (
    <Card id={id} className={`scroll-mt-24 transition-shadow hover:shadow-md ${toneCls}`}>
      <CardHeader className="flex flex-row items-center gap-3 space-y-0">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-lg font-semibold tracking-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-foreground/90">{children}</CardContent>
    </Card>
  );
}

function InfoRow({ label, value }: { label: string; value?: React.ReactNode }) {
  if (!value) return null;
  return (
    <div className="grid grid-cols-[minmax(0,140px)_minmax(0,1fr)] gap-3 py-2 border-b border-border/60 last:border-0">
      <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="text-sm"><PlainText>{value}</PlainText></div>
    </div>
  );
}

function BulletList({ items }: { items?: (string | undefined)[] }) {
  if (!items?.length) return <p className="text-sm text-muted-foreground">Nenhuma informação disponível.</p>;
  return (
    <ul className="space-y-2">
      {items.filter(Boolean).map((it, i) => (
        <li key={i} className="flex gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <PlainText>{it as string}</PlainText>
        </li>
      ))}
    </ul>
  );
}

function DangerList({ items }: { items?: string[] }) {
  if (!items?.length) return <p className="text-sm text-muted-foreground">Nenhuma informação disponível.</p>;
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2 rounded-md border border-destructive/20 bg-destructive/5 p-2">
          <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <PlainText>{it}</PlainText>
        </li>
      ))}
    </ul>
  );
}

function Timeline({
  items,
}: {
  items?: Array<{ nome?: string; data?: string; descricao?: string } | string>;
}) {
  if (!items?.length) return <p className="text-sm text-muted-foreground">Nenhuma etapa informada.</p>;
  return (
    <ol className="relative ml-3 space-y-5 border-l border-border pl-6">
      {items.map((raw, i) => {
        const it = typeof raw === "string" ? { descricao: raw } : raw;
        return (
          <li key={i} className="relative">
            <span className="absolute -left-[31px] top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground text-[10px] font-semibold">
              {i + 1}
            </span>
            {it.nome && <div className="text-sm font-semibold"><PlainText>{it.nome}</PlainText></div>}
            {it.data && (
              <div className="text-xs font-medium text-primary"><PlainText>{it.data}</PlainText></div>
            )}
            {it.descricao && (
              <div className="mt-1 text-sm text-muted-foreground"><PlainText>{it.descricao}</PlainText></div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function ResultView({
  data,
  file,
  onReset,
}: {
  data: EditalResult;
  file: File | null;
  onReset: () => void;
}) {
  const jsonStr = useMemo(() => JSON.stringify(data, null, 2), [data]);

  const copyAll = async () => {
    await navigator.clipboard.writeText(jsonStr);
    toast.success("Informações copiadas para a área de transferência.");
  };

  const downloadJson = () => {
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `edital-${(data.titulo ?? "resultado").slice(0, 40)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPdf = () => {
    // Usa a impressão do navegador para gerar um PDF do resultado (Salvar como PDF).
    window.print();
  };

  const sections: Array<{ id: string; label: string }> = [
    { id: "gerais", label: "Gerais" },
    { id: "inscricoes", label: "Inscrições" },
    { id: "participantes", label: "Participantes" },
    { id: "documentos", label: "Documentos" },
    { id: "cotas", label: "Cotas" },
    { id: "etapas", label: "Etapas" },
    { id: "datas", label: "Datas" },
    { id: "classificacao", label: "Classificação" },
    { id: "eliminacao", label: "Eliminação" },
    { id: "contato", label: "Contato" },
    { id: "observacoes", label: "Observações" },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-6 print:space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="gap-1.5 rounded-full py-1">
            <FileText className="h-3.5 w-3.5" />
            {file?.name ?? "edital.pdf"}
          </Badge>
          <Badge variant="outline" className="rounded-full py-1">Análise concluída</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={copyAll}><Copy className="h-4 w-4" />Copiar</Button>
          <Button variant="outline" size="sm" onClick={downloadJson}><Download className="h-4 w-4" />JSON</Button>
          <Button variant="outline" size="sm" onClick={downloadPdf}><FileDown className="h-4 w-4" />PDF</Button>
          <Button size="sm" onClick={onReset}><RotateCcw className="h-4 w-4" />Analisar outro edital</Button>
        </div>
      </div>

      <nav
        aria-label="Ir para a seção"
        className="flex flex-wrap gap-2 rounded-xl border bg-card/60 p-2 text-xs print:hidden"
      >
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-md px-2.5 py-1 font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {s.label}
          </a>
        ))}
      </nav>

      <Section id="gerais" icon={Info} title="Informações gerais">
        <div className="divide-y divide-border/60">
          <InfoRow label="Título" value={data.titulo} />
          <InfoRow label="Instituição" value={data.instituicao} />
          <InfoRow label="Resumo" value={data.resumo} />
          <InfoRow label="Vagas" value={data.vagas} />
          <InfoRow label="Benefícios" value={data.beneficioOuRemuneracao} />
        </div>
      </Section>

      <Section id="inscricoes" icon={CalendarDays} title="Inscrições">
        {data.inscricoes ? (
          <div className="divide-y divide-border/60">
            <InfoRow label="Início" value={data.inscricoes.inicio} />
            <InfoRow label="Encerramento" value={data.inscricoes.fim} />
            <InfoRow label="Forma" value={data.inscricoes.forma} />
            <InfoRow
              label="Link"
              value={
                data.inscricoes.link ? (
                  <a
                    href={data.inscricoes.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline underline-offset-2 break-all"
                  >
                    {data.inscricoes.link}
                  </a>
                ) : undefined
              }
            />
            <InfoRow label="Taxa" value={data.inscricoes.taxa} />
            <InfoRow label="Isenção" value={data.inscricoes.isencao} />
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Nenhuma informação de inscrição disponível.</p>
        )}
      </Section>

      <Section id="participantes" icon={CheckCircle2} title="Quem pode participar">
        <InfoRow label="Público-alvo" value={data.publicoAlvo} />
        <div className="pt-2">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">Requisitos</div>
          <BulletList items={data.requisitos} />
        </div>
      </Section>

      <Section id="documentos" icon={FileText} title="Documentos necessários">
        <BulletList items={data.documentosNecessarios} />
      </Section>

      <Section id="cotas" icon={Sparkles} title="Cotas">
        {data.cotas?.length ? (
          <div className="grid gap-2 sm:grid-cols-2">
            {data.cotas.map((c, i) => (
              <div key={i} className="rounded-lg border bg-primary/5 p-3 text-sm">
                <PlainText>{c}</PlainText>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Nenhuma cota informada.</p>
        )}
      </Section>

      <Section id="etapas" icon={CalendarDays} title="Etapas do processo">
        <Timeline items={data.etapas} />
      </Section>

      <Section id="datas" icon={CalendarDays} title="Datas importantes">
        <Timeline
  items={data.datasImportantes?.map((d) =>
    typeof d === "string"
      ? { descricao: d }
      : {
          data: d.data,
          descricao: d.evento,
        },
  )}
/>
      </Section>

      <Section id="classificacao" icon={CheckCircle2} title="Critérios de classificação">
        <BulletList items={data.criteriosClassificacao} />
      </Section>

      <Section id="eliminacao" icon={XCircle} title="Motivos de eliminação" tone="danger">
        <DangerList items={data.motivosEliminacao} />
      </Section>

      <Section id="contato" icon={Mail} title="Contato">
        {data.contato ? (
          <div className="grid gap-3 sm:grid-cols-3">
            {data.contato.email && (
              <a href={`mailto:${data.contato.email}`} className="flex items-center gap-2 rounded-lg border p-3 text-sm hover:bg-accent">
                <Mail className="h-4 w-4 text-primary" /> <PlainText>{data.contato.email}</PlainText>
              </a>
            )}
            {data.contato.telefone && (
              <a href={`tel:${data.contato.telefone}`} className="flex items-center gap-2 rounded-lg border p-3 text-sm hover:bg-accent">
                <Phone className="h-4 w-4 text-primary" /> <PlainText>{data.contato.telefone}</PlainText>
              </a>
            )}
            {data.contato.site && (
              <a href={data.contato.site} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border p-3 text-sm hover:bg-accent">
                <MapPin className="h-4 w-4 text-primary" /> <span className="truncate">{data.contato.site}</span>
              </a>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Nenhum contato disponível.</p>
        )}
      </Section>

      <Section id="observacoes" icon={AlertTriangle} title="Observações importantes" tone="warning">
        {data.observacoesImportantes?.length ? (
          <ul className="space-y-2">
            {data.observacoesImportantes.map((o, i) => (
              <li key={i} className="flex gap-2">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                <PlainText>{o}</PlainText>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">Nenhuma observação.</p>
        )}
      </Section>
    </div>
  );
}

function UploadCard({
  onFile,
  error,
}: {
  onFile: (f: File) => void;
  error: string | null;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const pick = () => inputRef.current?.click();

  const handleFile = (f?: File | null) => {
    if (!f) return;
    onFile(f);
  };

  return (
    <Card className="mx-auto max-w-2xl border-2 shadow-sm">
      <CardContent className="p-6 sm:p-8">
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && pick()}
          onClick={pick}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            handleFile(e.dataTransfer.files?.[0]);
          }}
          className={`group flex cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed p-8 text-center transition-colors sm:p-12 ${
            dragging
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50 hover:bg-accent/40"
          }`}
        >
          <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-105">
            <UploadCloud className="h-7 w-7" />
          </div>
          <div>
            <div className="text-base font-semibold">Arraste o PDF do edital para cá</div>
            <div className="mt-1 text-sm text-muted-foreground">ou clique para escolher um arquivo do seu dispositivo</div>
          </div>
          <Button type="button" className="mt-2" onClick={(e) => { e.stopPropagation(); pick(); }}>
            <Upload className="h-4 w-4" />
            Selecionar Edital
          </Button>
          <p className="text-xs text-muted-foreground">Apenas arquivos PDF · até ~25 MB</p>
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf,.pdf"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </div>
        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            <AlertTriangle className="h-4 w-4" />
            {error}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function LoadingCard({ progress, file }: { progress: number; file: File | null }) {
  return (
    <Card className="mx-auto max-w-2xl shadow-sm">
      <CardContent className="space-y-5 p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
          <Sparkles className="h-7 w-7 animate-pulse" />
        </div>
        <div>
          <div className="text-lg font-semibold">Analisando edital...</div>
          <p className="mt-1 text-sm text-muted-foreground">
            Extraindo datas, requisitos, documentos e demais informações importantes.
          </p>
        </div>
        <Progress value={progress} className="h-2" />
        {file && (
          <div className="text-xs text-muted-foreground">
            <PlainText>{file.name}</PlainText> · {formatBytes(file.size)}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ErrorCard({ onRetry }: { onRetry: () => void }) {
  return (
    <Card className="mx-auto max-w-2xl border-destructive/30 shadow-sm">
      <CardContent className="space-y-4 p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="h-7 w-7" />
        </div>
        <div>
          <div className="text-lg font-semibold">Não foi possível analisar o edital</div>
          <p className="mt-1 text-sm text-muted-foreground">Tente novamente ou envie outro arquivo PDF.</p>
        </div>
        <Button onClick={onRetry}><RotateCcw className="h-4 w-4" />Tentar novamente</Button>
      </CardContent>
    </Card>
  );
}

export function EditalApp() {
  const [status, setStatus] = useState<Status>("idle");
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<EditalResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const start = async (f: File) => {
    if (f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      setError("Somente arquivos PDF são permitidos.");
      return;
    }
    setError(null);
    setFile(f);
    setStatus("loading");
    setProgress(5);
    try {
      const data = await analisarEdital(f, setProgress);
      setResult(data);
      setStatus("success");
    } catch (e) {
       console.error(e);

  setError(
    e instanceof Error
      ? e.message
      : "Erro ao processar o edital.",
  );

  setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setFile(null);
    setProgress(0);
    setResult(null);
    setError(null);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="container mx-auto px-4 py-10 sm:py-14">
      {status === "idle" && (
        <>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full py-1">
              <Sparkles className="h-3.5 w-3.5" /> Análise com IA
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Entenda qualquer edital em segundos
            </h1>
            <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
              Envie um PDF e receba apenas as informações realmente importantes para sua inscrição.
            </p>
          </div>
          <UploadCard onFile={start} error={error} />
        </>
      )}

      {status === "loading" && <LoadingCard progress={progress} file={file} />}

      {status === "error" && <ErrorCard onRetry={reset} />}

      {status === "success" && result && <ResultView data={result} file={file} onReset={reset} />}
    </section>
  );
}
