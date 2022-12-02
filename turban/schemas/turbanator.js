export default {
  name: "turbanator",
  title: "Turbanator",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Turbanator name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Turbanator",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Turbanator",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the Turbanator",
    },
    {
      name: "address",
      type: "string",
      title: "Turbanator address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating from (1-5 Stars)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a Value between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "styles",
      type: "array",
      title: "Styles",
      of: [{ type: "reference", to: [{ type: "style" }] }],
    },
  ],
};
