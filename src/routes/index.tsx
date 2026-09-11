import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/Home/Home";

export const Route = createFileRoute("/")({

  head: () => ({
    meta: [
      { title: "Shield Global Technical Services LLC — Engineering & Project Excellence" },
      {
        name: "description",
        content:
          "Delivering integrated technical, construction, maintenance and project support solutions across Building Construction, Facility Management, Oil & Gas, Energy & Utilities and MEP sectors in the UAE and beyond.",
      },
      { property: "og:title", content: "Shield Global Technical Services LLC" },
      {
        property: "og:description",
        content:
          "Engineering. Technical Services. Project Excellence. Integrated solutions across the UAE & beyond.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
    component: HomePage,
});
