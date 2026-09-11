import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/Contact/Contact";

export const Route = createFileRoute("/contact")({

  head: () => ({
    meta: [
      { title: "Contact Us — Shield Global Technical Services LLC" },
      {
        name: "description",
        content:
          "Contact Shield Global Technical Services LLC for technical project inquiries, tender submissions, RFQs, and quotation requests.",
      },
      { property: "og:title", content: "Contact — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
    component: ContactPage,
});
