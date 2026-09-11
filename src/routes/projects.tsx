import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/pages/Projects/Projects";

export const Route = createFileRoute("/projects")({
 head: () => ({ meta: [{ title: "Projects — Shield Global Technical Services" }, { name: "description", content: "Illustrative precision engineering project formats." }, { property: "og:title", content: "Projects — Shield Global Technical Services" }, { property: "og:description", content: "A case-study framework for engineering work." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),   component: ProjectsPage,
});
