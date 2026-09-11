import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/pages/Products/Products";

export const Route = createFileRoute("/products")({
 head: () => ({ meta: [{ title: "Engineering Products — Shield Global Technical Services" }, { name: "description", content: "Explore placeholder precision engineering product families." }, { property: "og:title", content: "Engineering Products — Shield Global Technical Services" }, { property: "og:description", content: "Product systems for demanding industrial applications." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),   component: ProductsPage,
});
