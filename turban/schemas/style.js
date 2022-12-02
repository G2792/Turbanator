export default {
  name: "style",
  title: "Style",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of style",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the style in GBP",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Style",
    },
  ],
};
