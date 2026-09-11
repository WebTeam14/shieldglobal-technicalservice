import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/About/About";

export const Route = createFileRoute("/about")({

  head: () => ({
    meta: [
      { title: "About Us — Shield Global Technical Services LLC" },
      {
        name: "description",
        content:
          "Shield Global Technical Services LLC provides engineering contracting, MEP, civil construction, facility management, and technical support services.",
      },
      { property: "og:title", content: "About — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
    component: AboutPage,
});
