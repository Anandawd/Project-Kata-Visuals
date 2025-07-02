import { StarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clientRole",
      title: "Client Role/Type",
      type: "string",
      options: {
        list: [
          "Wedding Client",
          "Corporate Client",
          "Family Client",
          "Lifestyle Client",
        ],
      },
    }),
    defineField({
      name: "clientImage",
      title: "Client Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "content",
      title: "Testimonial Content",
      type: "text",
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
    }),
    defineField({
      name: "project",
      title: "Related Project",
      type: "reference",
      to: [{ type: "portfolio" }],
    }),
  ],
});
