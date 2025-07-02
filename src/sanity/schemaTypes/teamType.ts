import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const teamType = defineType({
  name: "team",
  title: "Team Members",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          "Manager",
          "Professional Photographer",
          "Professional Videographer",
          "Photo Editor",
          "Assistant",
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Profile Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
    }),
    defineField({
      name: "social",
      title: "Social Media",
      type: "object",
      fields: [
        {
          name: "instagram",
          title: "Instagram URL",
          type: "url",
        },
        {
          name: "facebook",
          title: "Facebook URL",
          type: "url",
        },
        {
          name: "whatsapp",
          title: "WhatsApp Number",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
