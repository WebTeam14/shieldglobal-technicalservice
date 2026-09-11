import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "@/pages/Industries/Industries";

export const Route = createFileRoute("/industries")({
 head: () => ({ meta: [{ title: "Industries — Shield Global Technical Services" }, { name: "description", content: "Engineering product applications across demanding industrial environments." }, { property: "og:title", content: "Industries — Shield Global Technical Services" }, { property: "og:description", content: "Engineered for demanding industrial environments." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),   component: IndustriesPage,
});
