import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "@/pages/Careers/Careers";

export const Route = createFileRoute("/careers")({

  head: () => ({
    meta: [
      { title: "Careers — Shield Global Technical Services LLC" },
      {
        name: "description",
        content:
          "Build your career with Shield Global Technical Services LLC. Explore opportunities in civil engineering, MEP, welding, project management, and HSE.",
      },
      { property: "og:title", content: "Careers — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
    component: CareersPage,
});
