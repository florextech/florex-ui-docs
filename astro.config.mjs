import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.ui.florexlabs.com",
  integrations: [
    starlight({
      title: "@florexlabs/ui",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/florextech/florex-ui" },
      ],
      defaultLocale: "en",
      locales: {
        en: { label: "English", lang: "en" },
        es: { label: "Español", lang: "es" },
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        { label: "Getting Started", translations: { es: "Inicio" }, autogenerate: { directory: "getting-started" } },
        { label: "Forms", translations: { es: "Formularios" }, items: [
          "components/button", "components/icon-button", "components/input",
          "components/textarea", "components/select", "components/checkbox",
          "components/radio", "components/switch", "components/label", "components/form-message",
        ]},
        { label: "Data Display", translations: { es: "Datos" }, items: [
          "components/card", "components/badge", "components/tag", "components/avatar",
          "components/table", "components/code", "components/code-block", "components/kbd",
          "components/status", "components/stat", "components/data-list",
        ]},
        { label: "Typography", translations: { es: "Tipografía" }, items: [
          "components/heading", "components/text", "components/blockquote",
          "components/highlight", "components/list",
        ]},
        { label: "Feedback", items: [
          "components/alert", "components/empty-state", "components/spinner",
          "components/skeleton", "components/progress",
        ]},
        { label: "Navigation", translations: { es: "Navegación" }, items: [
          "components/tabs", "components/accordion", "components/breadcrumb",
          "components/pagination", "components/steps", "components/menu",
        ]},
        { label: "Overlays", items: [
          "components/modal", "components/drawer", "components/popover", "components/tooltip",
        ]},
        { label: "Layout", items: [
          "components/container", "components/section", "components/navbar",
          "components/stack", "components/divider", "components/timeline",
          "components/tree-view", "components/visually-hidden",
        ]},
      ],
    }),
  ],
});
