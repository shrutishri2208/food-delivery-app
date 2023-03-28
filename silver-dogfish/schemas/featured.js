export default {
  name: 'featured',
  type: 'document',
  title: 'Featured Items',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'ratings',
      type: 'number',
      title: 'Ratings (1-5 stars)',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Pleaese enter a value between 1 and 5'),
    },
    {
      name: 'noOfRatings',
      type: 'number',
      title: 'Number of Ratings',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'distance',
      type: 'number',
      title: 'Distance',
    },
    {
      name: 'time',
      type: 'number',
      title: 'Time',
    },
    {
      name: 'liked',
      type: 'boolean',
      title: 'Liked',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'discountPercent',
      type: 'number',
      title: 'Discount Percent',
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Discount',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price for 2',
    },
    {
      name: 'menu',
      type: 'array',
      title: 'Menu',
      of: [
        {
          name: 'menuItem',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Name of the dish',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image for the dish',
            },
            {
              name: 'price',
              type: 'number',
              title: 'Price',
            },
            {
              name: 'ratings',
              type: 'number',
              title: 'Rating',
            },
            {
              name: 'noOfRatings',
              type: 'number',
              title: 'Number of Ratings',
            },
            {
              name: 'veg',
              type: 'boolean',
              title: 'Veg/Non-Veg',
            },
            {
              name: 'bestseller',
              type: 'boolean',
              title: 'Is a bestseller?',
            },
          ],
        },
      ],
    },
  ],
}
