import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'კატეგორია / Category',
      type: 'reference',
      to: [{ type: 'faqCategory' }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            // ── Georgian (default) ──────────────────────────
            defineField({
              name: 'question_ka',
              title: 'კითხვა (ქართული)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer_ka',
              title: 'პასუხი (ქართული)',
              type: 'array',
              of: [defineArrayMember({ type: 'block' })],
              validation: (Rule) => Rule.required(),
            }),

            // ── English ─────────────────────────────────────
            defineField({
              name: 'question_en',
              title: 'Question (English)',
              type: 'string',
            }),
            defineField({
              name: 'answer_en',
              title: 'Answer (English)',
              type: 'array',
              of: [defineArrayMember({ type: 'block' })],
            }),
          ],
          preview: {
            select: {
              question_ka: 'question_ka',
              question_en: 'question_en',
            },
            prepare({ question_ka, question_en }) {
              return {
                title: question_ka || question_en || 'Untitled question',
                subtitle: question_en ? `EN: ${question_en}` : 'No English translation yet',
              }
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      categoryKa: 'category.title.ka',
      categoryEn: 'category.title.en',
    },
    prepare({ categoryKa, categoryEn }) {
      return {
        title: categoryKa || categoryEn || 'FAQ',
        subtitle: categoryEn ? `Category: ${categoryEn}` : 'No English category title',
      }
    },
  },
})
