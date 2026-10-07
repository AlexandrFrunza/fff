import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as ArrowDownRight, n as Asterisk, r as ArrowUpRight, t as Circle } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DcxWmZpd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
var noirLoopSrc = "/noir-gold-loop.mp4";
var SHOW_SIGNAL_CARD = false;
var capabilities = [
	[
		"01",
		"Strategy & architecture",
		"The structure, story and systems your product needs before pixels enter the room."
	],
	[
		"02",
		"Design that moves",
		"Distinctive art direction, interaction and responsive detail—built to hold attention."
	],
	[
		"03",
		"Development without limits",
		"From razor-sharp landing pages to complex digital platforms and custom tools."
	],
	[
		"04",
		"SEO from zero",
		"Technical foundations, metadata and search-ready structure are part of the build, not an afterthought."
	]
];
var stages = [
	"Define the signal",
	"Design the tension",
	"Build the system",
	"Launch with intent"
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 sm:px-8",
					"aria-label": "Main navigation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "font-display text-xl font-bold uppercase tracking-tight",
							"aria-label": "fff.cy home",
							children: [
								"fff",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "."
								}),
								"cy"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-muted-foreground md:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "transition-colors hover:text-gold",
								href: "#services",
								children: "Capabilities"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "transition-colors hover:text-gold",
								href: "#approach",
								children: "Approach"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "rounded-none uppercase tracking-widest",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:hello@fff.cy",
								children: ["Start a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative grid min-h-[900px] grid-cols-1 items-end px-5 pb-10 pt-28 sm:px-8 lg:min-h-screen lg:grid-cols-12 lg:gap-8 lg:pb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "video-frame absolute inset-0",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							src: noirLoopSrc,
							autoPlay: true,
							muted: true,
							loop: true,
							playsInline: true,
							preload: "auto"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "noir-grid pointer-events-none absolute inset-0 opacity-60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 lg:col-span-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "status-dot" }), " INDEPENDENT DIGITAL STUDIO · WORLDWIDE"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-[clamp(4.3rem,11vw,10.5rem)] font-bold uppercase leading-[0.85] tracking-tighter",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block animate-rise",
										children: "Websites"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-stroke-gold block animate-rise animation-delay-1",
										children: "without"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gold-sheen block animate-rise animation-delay-2",
										children: "limits."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between lg:max-w-5xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xl text-lg leading-relaxed text-foreground/60 sm:text-xl",
									children: "We turn ambitious ideas into sharp digital experiences—strategy, design, development and search performance in one build."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "group h-14 shrink-0 rounded-none px-6 uppercase tracking-widest",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										children: ["Make it real ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "transition-transform group-hover:translate-x-1 group-hover:translate-y-1" })]
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mt-16 lg:col-span-4 lg:mt-0",
						children: [SHOW_SIGNAL_CARD, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid grid-cols-2 border-t border-gold/15 pt-5 text-xs uppercase tracking-widest text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Strategy → Launch" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right text-gold",
								children: "Built to perform"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee border-y border-gold/20 bg-gold py-4 text-gold-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "marquee-track font-display text-xl font-bold uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Strategy ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, {}),
						" Design ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, {}),
						" Development ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, {}),
						" SEO ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, {}),
						" Motion ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, {}),
						" Performance ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, {})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						"aria-hidden": "true",
						children: [
							"Strategy ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, {}),
							" Design ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, {}),
							" Development ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, {}),
							" SEO ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, {}),
							" Motion ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, {}),
							" Performance ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Asterisk, {})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "services",
				className: "px-5 py-24 sm:px-8 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1500px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-20 grid gap-8 lg:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label lg:col-span-3",
							children: "01 / Capabilities"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:col-span-9 lg:text-8xl",
							children: [
								"Complexity is",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "the point."
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border border-y border-border",
						children: capabilities.map(([number, title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group grid gap-4 py-8 transition-colors md:grid-cols-12 md:items-center md:py-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-gold md:col-span-1",
									children: number
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-bold uppercase transition-transform duration-300 group-hover:translate-x-2 md:col-span-5 md:text-4xl",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-xl leading-relaxed text-muted-foreground md:col-span-5",
									children: text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "hidden size-7 justify-self-end text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold md:block" })
							]
						}, number))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "video-frame relative flex min-h-[70vh] items-center justify-center border-y border-gold/20",
				"aria-label": "Showreel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: noirLoopSrc,
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					preload: "metadata",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 px-5 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-label mb-6",
						children: "In motion"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display max-w-4xl text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl",
						children: [
							"Every pixel",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gold-sheen",
								children: "earns its place."
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "approach",
				className: "border-b border-border bg-card px-5 py-24 sm:px-8 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label mb-10",
							children: "02 / Approach"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl",
							children: [
								"No templates.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"No noise.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-stroke-gold",
									children: "No ceiling."
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 lg:pt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-16 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl",
							children: "Every project gets its own visual language and technical system. The process stays private. The result does the talking."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "grid gap-px bg-border sm:grid-cols-2",
							children: stages.map((stage, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "group min-h-44 bg-card p-6 transition-colors hover:bg-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mb-14 flex items-center justify-between font-mono text-xs text-muted-foreground",
									children: [
										"0",
										index + 1,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "size-3 fill-gold text-gold" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl font-bold uppercase",
									children: stage
								})]
							}, stage))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "contact",
				className: "relative flex min-h-[78vh] items-end overflow-hidden px-5 py-14 sm:px-8 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "noir-grid pointer-events-none absolute inset-0 opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto w-full max-w-[1500px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-label mb-10",
							children: "03 / Your move"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-bold uppercase leading-[0.85] tracking-tight",
							children: "Have a difficult idea?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:hello@fff.cy",
							className: "group mt-12 flex items-center justify-between border-y border-border py-6 font-display text-2xl font-bold uppercase transition-colors hover:border-gold hover:text-gold sm:text-4xl lg:text-6xl",
							children: ["hello@fff.cy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-8 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 sm:size-12" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "mt-16 flex flex-col gap-4 text-xs uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "fff.cy © 2026" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built for attention. Engineered for action." })]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Index as component };
