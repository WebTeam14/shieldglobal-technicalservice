import { createFileRoute } from "@tanstack/react-router";
import { HSEQualityPage } from "@/pages/HSEQuality/HSEQuality";

export const Route = createFileRoute("/hse-quality")({

  head: () => ({
    meta: [
      { title: "HSE & Quality — Shield Global Technical Services LLC" },
      {
        name: "description",
        content:
          "Health, Safety, Environment, and Quality commitment at Shield Global Technical Services LLC. Zero-incident culture and rigorous ISO quality assurance.",
      },
      { property: "og:title", content: "HSE & Quality — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
    component: HSEQualityPage,
});
