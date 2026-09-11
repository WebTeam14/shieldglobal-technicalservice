import { createFileRoute } from "@tanstack/react-router";
import { CapabilitiesPage } from "@/pages/Capabilities/Capabilities";

export const Route = createFileRoute("/capabilities")({
 head: () => ({ meta: [{ title: "Capabilities — Shield Global Technical Services" }, { name: "description", content: "A technical framework for engineering, manufacturing, quality, and customization." }, { property: "og:title", content: "Capabilities — Shield Global Technical Services" }, { property: "og:description", content: "From concept and manufacture through validation." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),   component: CapabilitiesPage,
});
