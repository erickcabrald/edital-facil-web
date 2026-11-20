import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Slot } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { _ as CircleCheck, a as RotateCcw, c as MapPin, d as FileText, f as FileDown, g as CircleX, h as CloudUpload, i as Sparkles, l as Mail, m as Copy, n as TriangleAlert, o as Phone, p as Download, r as Sun, s as Moon, t as Upload, u as Info, v as CalendarDays } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { t as axios } from "../_libs/axios+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DvORFn3c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var ThemeContext = (0, import_react.createContext)({
	theme: "light",
	toggle: () => {}
});
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const stored = typeof window !== "undefined" && localStorage.getItem("theme");
		const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
		setTheme(stored ?? (prefersDark ? "dark" : "light"));
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			toggle: () => setTheme((t) => t === "dark" ? "light" : "dark")
		},
		children
	});
}
var useTheme = () => (0, import_react.useContext)(ThemeContext);
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function ThemeToggle() {
	const { theme, toggle } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		size: "icon",
		onClick: toggle,
		"aria-label": theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro",
		className: "rounded-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" })]
	});
}
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var api = axios.create({ baseURL: "https://edital-facil-server.onrender.com" });
async function analisarEdital(file, onProgress) {
	const formData = new FormData();
	formData.append("file", file);
	const response = await api.post("/extrair-edital", formData, { onUploadProgress(progressEvent) {
		if (!progressEvent.total) return;
		const percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
		onProgress?.(Math.min(percent, 90));
	} });
	onProgress?.(100);
	return response.data.data;
}
function formatBytes(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
function PlainText({ children, className = "" }) {
	if (children == null || children === "") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `whitespace-pre-wrap break-words ${className}`,
		children
	});
}
function Section({ id, icon: Icon, title, children, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		id,
		className: `scroll-mt-24 transition-shadow hover:shadow-md ${tone === "warning" ? "border-amber-500/30 bg-amber-500/5" : tone === "danger" ? "border-destructive/30 bg-destructive/5" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "flex flex-row items-center gap-3 space-y-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-lg font-semibold tracking-tight",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "text-sm text-foreground/90",
			children
		})]
	});
}
function InfoRow({ label, value }) {
	if (!value) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[minmax(0,140px)_minmax(0,1fr)] gap-3 py-2 border-b border-border/60 last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainText, { children: value })
		})]
	});
}
function BulletList({ items }) {
	if (!items?.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "Nenhuma informação disponível."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2",
		children: items.filter(Boolean).map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainText, { children: it })]
		}, i))
	});
}
function DangerList({ items }) {
	if (!items?.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "Nenhuma informação disponível."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2",
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-2 rounded-md border border-destructive/20 bg-destructive/5 p-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mt-0.5 h-4 w-4 shrink-0 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainText, { children: it })]
		}, i))
	});
}
function Timeline({ items }) {
	if (!items?.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "Nenhuma etapa informada."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative ml-3 space-y-5 border-l border-border pl-6",
		children: items.map((raw, i) => {
			const it = typeof raw === "string" ? { descricao: raw } : raw;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -left-[31px] top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground text-[10px] font-semibold",
						children: i + 1
					}),
					it.nome && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainText, { children: it.nome })
					}),
					it.data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainText, { children: it.data })
					}),
					it.descricao && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-sm text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainText, { children: it.descricao })
					})
				]
			}, i);
		})
	});
}
function ResultView({ data, file, onReset }) {
	const jsonStr = (0, import_react.useMemo)(() => JSON.stringify(data, null, 2), [data]);
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
		window.print();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl space-y-6 print:space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 print:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "secondary",
						className: "gap-1.5 rounded-full py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), file?.name ?? "edital.pdf"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "rounded-full py-1",
						children: "Análise concluída"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: copyAll,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), "Copiar"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: downloadJson,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "JSON"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: downloadPdf,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "h-4 w-4" }), "PDF"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: onReset,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "Analisar outro edital"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Ir para a seção",
				className: "flex flex-wrap gap-2 rounded-xl border bg-card/60 p-2 text-xs print:hidden",
				children: [
					{
						id: "gerais",
						label: "Gerais"
					},
					{
						id: "inscricoes",
						label: "Inscrições"
					},
					{
						id: "participantes",
						label: "Participantes"
					},
					{
						id: "documentos",
						label: "Documentos"
					},
					{
						id: "cotas",
						label: "Cotas"
					},
					{
						id: "etapas",
						label: "Etapas"
					},
					{
						id: "datas",
						label: "Datas"
					},
					{
						id: "classificacao",
						label: "Classificação"
					},
					{
						id: "eliminacao",
						label: "Eliminação"
					},
					{
						id: "contato",
						label: "Contato"
					},
					{
						id: "observacoes",
						label: "Observações"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${s.id}`,
					className: "rounded-md px-2.5 py-1 font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
					children: s.label
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "gerais",
				icon: Info,
				title: "Informações gerais",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y divide-border/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Título",
							value: data.titulo
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Instituição",
							value: data.instituicao
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Resumo",
							value: data.resumo
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Vagas",
							value: data.vagas
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Benefícios",
							value: data.beneficioOuRemuneracao
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "inscricoes",
				icon: CalendarDays,
				title: "Inscrições",
				children: data.inscricoes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y divide-border/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Início",
							value: data.inscricoes.inicio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Encerramento",
							value: data.inscricoes.fim
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Forma",
							value: data.inscricoes.forma
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Link",
							value: data.inscricoes.link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: data.inscricoes.link,
								target: "_blank",
								rel: "noreferrer",
								className: "text-primary underline underline-offset-2 break-all",
								children: data.inscricoes.link
							}) : void 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Taxa",
							value: data.inscricoes.taxa
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							label: "Isenção",
							value: data.inscricoes.isencao
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Nenhuma informação de inscrição disponível."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "participantes",
				icon: CircleCheck,
				title: "Quem pode participar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
					label: "Público-alvo",
					value: data.publicoAlvo
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground",
						children: "Requisitos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletList, { items: data.requisitos })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "documentos",
				icon: FileText,
				title: "Documentos necessários",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletList, { items: data.documentosNecessarios })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "cotas",
				icon: Sparkles,
				title: "Cotas",
				children: data.cotas?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-2",
					children: data.cotas.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg border bg-primary/5 p-3 text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainText, { children: c })
					}, i))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Nenhuma cota informada."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "etapas",
				icon: CalendarDays,
				title: "Etapas do processo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, { items: data.etapas })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "datas",
				icon: CalendarDays,
				title: "Datas importantes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, { items: data.datasImportantes?.map((d) => typeof d === "string" ? { descricao: d } : {
					data: d.data,
					descricao: d.evento
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "classificacao",
				icon: CircleCheck,
				title: "Critérios de classificação",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletList, { items: data.criteriosClassificacao })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "eliminacao",
				icon: CircleX,
				title: "Motivos de eliminação",
				tone: "danger",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DangerList, { items: data.motivosEliminacao })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "contato",
				icon: Mail,
				title: "Contato",
				children: data.contato ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						data.contato.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${data.contato.email}`,
							className: "flex items-center gap-2 rounded-lg border p-3 text-sm hover:bg-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainText, { children: data.contato.email })
							]
						}),
						data.contato.telefone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${data.contato.telefone}`,
							className: "flex items-center gap-2 rounded-lg border p-3 text-sm hover:bg-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainText, { children: data.contato.telefone })
							]
						}),
						data.contato.site && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: data.contato.site,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-2 rounded-lg border p-3 text-sm hover:bg-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: data.contato.site
								})
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Nenhum contato disponível."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "observacoes",
				icon: TriangleAlert,
				title: "Observações importantes",
				tone: "warning",
				children: data.observacoesImportantes?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: data.observacoesImportantes.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainText, { children: o })]
					}, i))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Nenhuma observação."
				})
			})
		]
	});
}
function UploadCard({ onFile, error }) {
	const inputRef = (0, import_react.useRef)(null);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const pick = () => inputRef.current?.click();
	const handleFile = (f) => {
		if (!f) return;
		onFile(f);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "mx-auto max-w-2xl border-2 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "p-6 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "button",
				tabIndex: 0,
				onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && pick(),
				onClick: pick,
				onDragOver: (e) => {
					e.preventDefault();
					setDragging(true);
				},
				onDragLeave: () => setDragging(false),
				onDrop: (e) => {
					e.preventDefault();
					setDragging(false);
					handleFile(e.dataTransfer.files?.[0]);
				},
				className: `group flex cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed p-8 text-center transition-colors sm:p-12 ${dragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-accent/40"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-105",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-base font-semibold",
						children: "Arraste o PDF do edital para cá"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "ou clique para escolher um arquivo do seu dispositivo"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						className: "mt-2",
						onClick: (e) => {
							e.stopPropagation();
							pick();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), "Selecionar Edital"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Apenas arquivos PDF · até ~25 MB"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						type: "file",
						accept: "application/pdf,.pdf",
						className: "hidden",
						onChange: (e) => handleFile(e.target.files?.[0])
					})
				]
			}), error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }), error]
			})]
		})
	});
}
function LoadingCard({ progress, file }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "mx-auto max-w-2xl shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "space-y-5 p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-7 w-7 animate-pulse" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-lg font-semibold",
					children: "Analisando edital..."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Extraindo datas, requisitos, documentos e demais informações importantes."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: progress,
					className: "h-2"
				}),
				file && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlainText, { children: file.name }),
						" · ",
						formatBytes(file.size)
					]
				})
			]
		})
	});
}
function ErrorCard({ onRetry }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "mx-auto max-w-2xl border-destructive/30 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "space-y-4 p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-destructive/10 text-destructive",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-7 w-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-lg font-semibold",
					children: "Não foi possível analisar o edital"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Tente novamente ou envie outro arquivo PDF."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: onRetry,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "Tentar novamente"]
				})
			]
		})
	});
}
function EditalApp() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [file, setFile] = (0, import_react.useState)(null);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [result, setResult] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const start = async (f) => {
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
			setError(e instanceof Error ? e.message : "Erro ao processar o edital.");
			setStatus("error");
		}
	};
	const reset = () => {
		setStatus("idle");
		setFile(null);
		setProgress(0);
		setResult(null);
		setError(null);
		if (typeof window !== "undefined") window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container mx-auto px-4 py-10 sm:py-14",
		children: [
			status === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-10 max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "secondary",
						className: "mb-4 rounded-full py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Análise com IA"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-balance text-4xl font-bold tracking-tight sm:text-5xl",
						children: "Entenda qualquer edital em segundos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-pretty text-base text-muted-foreground sm:text-lg",
						children: "Envie um PDF e receba apenas as informações realmente importantes para sua inscrição."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UploadCard, {
				onFile: start,
				error
			})] }),
			status === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingCard, {
				progress,
				file
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorCard, { onRetry: reset }),
			status === "success" && result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultView, {
				data: result,
				file,
				onReset: reset
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-gradient-to-b from-background via-background to-primary/5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md print:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container mx-auto flex h-16 items-center justify-between px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-semibold tracking-tight",
								children: "Edital Fácil"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground",
								children: "Editais claros com IA"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditalApp, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border/60 py-6 text-center text-xs text-muted-foreground print:hidden",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Edital Fácil. Todos os direitos reservados."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				richColors: true,
				position: "top-center"
			})
		]
	}) });
}
//#endregion
export { Index as component };
