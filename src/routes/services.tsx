import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/Services/Services";

export const Route = createFileRoute("/services")({

  head: () => ({
    meta: [
      { title: "Services — Shield Global Technical Services LLC" },
      {
        name: "description",
        content:
          "Comprehensive technical services: Building Construction, Facility Management, Oil & Gas, Energy & Utilities, MEP, Welding & Fabrication, Technical Support.",
      },
      { property: "og:title", content: "Services — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
    component: ServicesPage,
});
