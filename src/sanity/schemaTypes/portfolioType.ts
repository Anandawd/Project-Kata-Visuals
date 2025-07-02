import { defineField, defineType } from "sanity";

export const portfolioType = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Wedding Photography", value: "wedding" },
          { title: "Lifestyle Photography", value: "lifestyle" },
          { title: "Family Photography", value: "family" },
          { title: "Couple Photography", value: "couple" },
          { title: "Activity Photography", value: "activity" },
          { title: "Party Photography", value: "party" },
        ],
      },
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Photo Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "text",
    }),
    defineField({
      name: "date",
      title: "Project Date",
      type: "date",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "photographer",
      title: "Photographer",
      type: "string",
      initialValue: "Kata Visual",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "featuredImage",
      category: "category",
    },
    prepare(selection) {
      const { title, media, category } = selection;
      return {
        title: title,
        subtitle: category,
        media: media,
      };
    },
  },
});
