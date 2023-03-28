export default {
  name: 'categories',
  type: 'document',
  title: 'Category of Food',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name of the Category',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
