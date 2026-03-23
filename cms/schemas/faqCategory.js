import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default defineType({
  name: 'faqCategory',
  title: 'FAQ კატეგორიები',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        defineField({
          name: 'ka',
          title: 'Georgian (ქართული)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.ka',
        maxLength: 96,
      },
    }),

    orderRankField({ type: 'faqCategory' }),
  ],

  preview: {
    select: {
      ka: 'title.ka',
      en: 'title.en',
    },
    prepare({ ka, en }) {
      return {
        title: ka || en || 'Untitled Category',
        subtitle: en ? `EN: ${en}` : 'No English title yet',
      }
    },
  },
})