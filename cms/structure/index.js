import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import {
  TagsIcon,
  HelpCircleIcon,
} from '@sanity/icons'

export const structure = (S, context) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.divider().title('ინსტრუქციები დოკუმენტაცია'),
      S.documentTypeListItem('faq').title('FAQ').icon(HelpCircleIcon),
      orderableDocumentListDeskItem({
        type: 'faqCategory',
        title: 'FAQ კატეგორიები',
        icon: TagsIcon,
        S,
        context
      }),
      S.divider().title('ფორმები'),
    ])