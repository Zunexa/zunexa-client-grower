import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Rocket,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/zunexa-web-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zunexa Web — Diseño web profesional para pequeños negocios" },
      {
        name: "description",
        content:
          "Zunexa Web crea páginas web profesionales, rápidas y adaptadas a móvil para pequeños negocios desde 199 €.",
      },
      { property: "og:title", content: "Zunexa Web — Diseño web profesional" },
      {
        property: "og:description",
        content:
          "Páginas web modernas, rápidas y orientadas a conseguir clientes para pequeños negocios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  {
    title: "Diseño profesional",
    description: "Una web moderna y personalizada para tu negocio.",
    icon: Palette,
  },
  {
    title: "Adaptada a móvil",
    description: "La web se verá correctamente en móviles, tablets y ordenadores.",
    icon: MonitorSmartphone,
  },
  {
    title: "WhatsApp y contacto",
    description: "Facilita que tus clientes contacten contigo rápidamente.",
    icon: MessageCircle,
  },
  {
    title: "Publicación online",
    description: "Me encargo de dejar tu página publicada y funcionando.",
    icon: Rocket,
  },
];

const projects = [
  {
    name: "Urban Cut",
    description: "Web de demostración para una barbería moderna.",
    url: "https://zunexa.github.io/mi-primera-web/",
  },
  {
    name: "AutoMax Garage",
    description: "Web de demostración para un taller mecánico.",
    url: "https://zunexa.github.io/taller-mecanico/",
  },
  {
    name: "AS Barber Studio",
    description: "Web de demostración para barbería con sistema de reservas.",
    url: "https://asbarberstudio.simplybook.it/",
  },
];

const processSteps = [
  { number: "01", title: "Cuéntame tu idea" },
  { number: "02", title: "Diseño tu página" },
  { number: "03", title: "Revisamos los detalles" },
  { number: "04", title: "Publicamos tu web" },
];

const priceFeatures = [
  "Diseño personalizado",
  "Adaptación a móvil",
  "Servicios",
  "Información del negocio",
  "WhatsApp",
  "Formulario de contacto",
  "Publicación online",
];

const needsOptions = ["WhatsApp", "Formulario", "Reservas", "Galería", "Precios", "Redes sociales"];

const initialForm = {
  name: "",
  email: "",
  businessName: "",
  businessType: "",
  budget: "",
  currentWebsite: "",
  message: "",
};

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [form, setForm] = useState(initialForm);

  const whatsappBaseUrl = "https://wa.me/34667314506";

  const whatsappMessage = useMemo(() => {
    return [
      "Nueva consulta para Zunexa Web",
      "",
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      `Negocio: ${form.businessName}`,
      `Tipo de negocio: ${form.businessType}`,
      `Presupuesto: ${form.budget}`,
      `Página web actual: ${form.currentWebsite}`,
      `Necesidades: ${selectedNeeds.length > 0 ? selectedNeeds.join(", ") : ""}`,
      `Mensaje: ${form.message}`,
    ].join("\n");
  }, [form, selectedNeeds]);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleNeed(need: string, checked: boolean) {
    setSelectedNeeds((current) => {
      if (checked) {
        return current.includes(need) ? current : [...current, need];
      }
      return current.filter((item) => item !== need);
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex min-w-0 items-center gap-3" aria-label="Zunexa Web inicio">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-glow bg-primary-gradient font-display text-xl font-bold text-primary-foreground shadow-glow">
              Z
            </span>
            <span className="truncate font-display text-lg font-bold uppercase tracking-normal text-foreground">
              ZUNEXA WEB
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button asChild variant="hero" size="default" className="hidden lg:inline-flex">
            <a href="#contacto">Quiero mi web</a>
          </Button>

          <Button
            type="button"
            variant="glass"
            size="icon"
            className="lg:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-border bg-background px-4 pb-5 pt-2 shadow-premium lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Navegación móvil">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden bg-hero pt-28">
          <div className="absolute inset-0 -z-10 glow-grid opacity-70" aria-hidden="true" />
          <div className="mx-auto grid min-h-[calc(100svh-2rem)] max-w-7xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,0.97fr)] lg:px-8 lg:pb-20">
            <div className="animate-rise-in">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-md border border-glow bg-subtle-gradient px-3 py-2 text-sm font-semibold text-primary-glow">
                <Sparkles className="h-4 w-4 shrink-0" />
                <span className="min-w-0 truncate">Diseño web para pequeños negocios</span>
              </div>
              <h1 className="max-w-4xl text-balance font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-7xl">
                Tu negocio merece una web que destaque.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Creo páginas web profesionales, rápidas y adaptadas a móvil para pequeños negocios.
              </p>
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                  <a href="#contacto">
                    Quiero mi página web
                    <ArrowRight />
                  </a>
                </Button>
                <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
                  <a href="#proyectos">Ver proyectos</a>
                </Button>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Desde 199 €", "100% adaptada a móvil", "Presencia online 24/7"].map((item) => (
                  <div
                    key={item}
                    className="flex min-w-0 items-center gap-2 rounded-md border border-border bg-surface-glass px-3 py-3 text-sm font-semibold text-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                    <span className="min-w-0">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-w-0 animate-float-soft lg:justify-self-end">
              <div className="absolute -inset-1 rounded-lg bg-primary-gradient opacity-60 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-lg border border-glow bg-card-premium shadow-premium">
                <img
                  src={heroImage}
                  alt="Diseños web móviles con estilo tecnológico premium"
                  width={1400}
                  height={1000}
                  className="aspect-[7/5] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-md border border-border bg-background/80 p-4 backdrop-blur-xl">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">Web lista para captar contactos</p>
                      <p className="truncate text-xs text-muted-foreground">Móvil · WhatsApp · Publicación online</p>
                    </div>
                    <Globe2 className="h-6 w-6 shrink-0 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Servicios"
              title="Todo lo necesario para que tu negocio se vea profesional online."
              description="Diseño claro, contacto directo y una experiencia preparada para móvil desde el primer día."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="group rounded-lg border border-border bg-card-premium p-5 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-glow"
                  >
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-subtle-gradient text-primary shadow-glow">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="proyectos" className="border-y border-border bg-surface py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Proyectos"
              title="Proyectos de demostración"
              description="Estos proyectos son demos creadas para mostrar estilos y funcionalidades. No se presentan como clientes reales."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className="grid min-h-[280px] content-between rounded-lg border border-border bg-card-premium p-5 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-glow"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className="rounded-md border border-glow bg-subtle-gradient px-3 py-1.5 text-xs font-bold uppercase text-primary-glow">
                        Demo {index + 1}
                      </span>
                      <span className="font-display text-3xl font-bold text-gradient-brand">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{project.name}</h3>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">{project.description}</p>
                    <p className="mt-5 rounded-md border border-border bg-background/50 px-3 py-2 text-sm font-semibold text-foreground">
                      Proyecto de demostración
                    </p>
                  </div>
                  <Button asChild variant="glass" size="lg" className="mt-8 w-full">
                    <a href={project.url} target="_blank" rel="noreferrer noopener">
                      Ver demo
                      <ExternalLink />
                    </a>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Proceso"
              title="Un proceso sencillo para pasar de idea a web publicada."
              description="Cuatro pasos claros para avanzar sin complicaciones y revisar lo importante antes de publicar."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {processSteps.map((step) => (
                <article key={step.number} className="relative rounded-lg border border-border bg-card-premium p-5">
                  <p className="font-display text-4xl font-bold text-gradient-brand">{step.number}</p>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{step.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="precios" className="border-y border-border bg-surface py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.8fr)] lg:px-8">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase text-primary-glow">Precios</p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                Web profesional desde 199 €
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                El precio final depende de las necesidades de cada negocio.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
                <a href="#contacto">
                  Solicitar presupuesto
                  <ArrowRight />
                </a>
              </Button>
            </div>
            <div className="rounded-lg border border-glow bg-card-premium p-5 shadow-premium sm:p-6">
              <ul className="grid gap-4">
                {priceFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-base font-semibold text-foreground">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                    <span className="min-w-0">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contacto" className="relative overflow-hidden bg-hero py-16 sm:py-24">
          <div className="absolute inset-0 glow-grid opacity-50" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(320px,1fr)] lg:px-8">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase text-primary-glow">Contacto</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                ¿Hablamos de tu proyecto?
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Cuéntame qué negocio tienes y qué necesitas. Te responderé con una propuesta adaptada a tu caso.
              </p>
              <div className="mt-8 grid gap-3">
                <Button asChild variant="hero" size="xl" className="w-full sm:w-auto sm:justify-self-start">
                  <a href={whatsappBaseUrl} target="_blank" rel="noreferrer noopener">
                    <MessageCircle />
                    Hablar por WhatsApp
                  </a>
                </Button>
                <a
                  href="mailto:zunexa.digital@gmail.com"
                  className="inline-flex min-w-0 items-center gap-3 rounded-md border border-border bg-surface-glass px-4 py-4 text-base font-semibold text-foreground transition-colors hover:border-glow"
                >
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <span className="min-w-0 break-all">zunexa.digital@gmail.com</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-lg border border-glow bg-card-premium p-4 shadow-premium sm:p-6">
              <div className="grid gap-5">
                <FormField label="Nombre" htmlFor="name">
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    required
                  />
                </FormField>

                <FormField label="Email" htmlFor="email">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    required
                  />
                </FormField>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Nombre del negocio" htmlFor="businessName">
                    <Input
                      id="businessName"
                      name="businessName"
                      value={form.businessName}
                      onChange={(event) => updateField("businessName", event.target.value)}
                      required
                    />
                  </FormField>
                  <FormField label="Tipo de negocio" htmlFor="businessType">
                    <Input
                      id="businessType"
                      name="businessType"
                      value={form.businessType}
                      onChange={(event) => updateField("businessType", event.target.value)}
                      placeholder="Barbería, taller, restaurante..."
                      required
                    />
                  </FormField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Presupuesto aproximado" htmlFor="budget">
                    <select
                      id="budget"
                      name="budget"
                      className="flex h-12 w-full rounded-md border border-input bg-input px-4 py-2 text-base text-foreground shadow-sm transition-colors focus-visible:border-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      value={form.budget}
                      onChange={(event) => updateField("budget", event.target.value)}
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Desde 199 €">Desde 199 €</option>
                      <option value="200 € - 400 €">200 € - 400 €</option>
                      <option value="400 € - 700 €">400 € - 700 €</option>
                      <option value="Más de 700 €">Más de 700 €</option>
                    </select>
                  </FormField>
                  <FormField label="¿Tienes actualmente una página web?" htmlFor="currentWebsite">
                    <select
                      id="currentWebsite"
                      name="currentWebsite"
                      className="flex h-12 w-full rounded-md border border-input bg-input px-4 py-2 text-base text-foreground shadow-sm transition-colors focus-visible:border-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      value={form.currentWebsite}
                      onChange={(event) => updateField("currentWebsite", event.target.value)}
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                      <option value="Está en proceso">Está en proceso</option>
                    </select>
                  </FormField>
                </div>

                <fieldset className="grid gap-3">
                  <legend className="text-sm font-semibold text-foreground">¿Qué necesitas?</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {needsOptions.map((need) => {
                      const id = `need-${need.toLowerCase().replaceAll(" ", "-")}`;
                      return (
                        <label
                          key={need}
                          htmlFor={id}
                          className="flex min-h-12 cursor-pointer items-center gap-3 rounded-md border border-border bg-background/40 px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:border-glow"
                        >
                          <Checkbox
                            id={id}
                            checked={selectedNeeds.includes(need)}
                            onCheckedChange={(checked) => toggleNeed(need, checked === true)}
                          />
                          <span>{need}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <FormField label="Cuéntame qué necesitas" htmlFor="message">
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="Describe tu negocio, qué quieres mostrar y cualquier idea importante."
                    required
                  />
                </FormField>

                <Button type="submit" variant="hero" size="xl" className="w-full">
                  <Send />
                  Enviar consulta por WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:px-8">
          <div className="min-w-0">
            <p className="font-display text-xl font-bold text-foreground">ZUNEXA WEB</p>
            <p className="mt-2 text-sm text-muted-foreground">© 2026 Zunexa Web</p>
          </div>
          <nav className="flex flex-wrap gap-2" aria-label="Enlaces del pie de página">
            {[
              { label: "Inicio", href: "#inicio" },
              { label: "Servicios", href: "#servicios" },
              { label: "Proyectos", href: "#proyectos" },
              { label: "Contacto", href: "#contacto" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase text-primary-glow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
    </div>
  );
}

function FormField({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor} className="text-sm font-semibold text-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
