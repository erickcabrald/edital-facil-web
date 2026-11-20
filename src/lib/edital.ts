import { api } from "./api";

export interface EditalResult {
  titulo?: string;
  instituicao?: string;
  resumo?: string;
  vagas?: string;
  beneficioOuRemuneracao?: string;

  inscricoes?: {
    inicio?: string;
    fim?: string;
    forma?: string;
    link?: string;
    taxa?: string;
    isencao?: string;
  };

  publicoAlvo?: string;
  requisitos?: string[];
  documentosNecessarios?: string[];
  cotas?: string[];

  etapas?: Array<
    | {
        nome?: string;
        descricao?: string;
        data?: string;
      }
    | string
  >;

  datasImportantes?: Array<
    | {
        data?: string;
        evento?: string;
      }
    | string
  >;

  criteriosClassificacao?: string[];
  motivosEliminacao?: string[];

  contato?: {
    email?: string;
    telefone?: string;
    site?: string;
  };

  observacoesImportantes?: string[];
}

export async function analisarEdital(
  file: File,
  onProgress?: (p: number) => void,
): Promise<EditalResult> {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post("/extrair-edital", formData, {
    onUploadProgress(progressEvent) {
      if (!progressEvent.total) return;

      const percent = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total,
      );

      onProgress?.(Math.min(percent, 90));
    },
  });

  onProgress?.(100);

  return response.data.data;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
