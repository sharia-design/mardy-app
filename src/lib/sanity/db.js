import { sanity } from './client'
// =============== FAQ ============= //
export async function getFaqs() {
  const query = `
    *[_type == "faqCategory"] | order(orderRank) {
      _id,
      "title": title,
      "slug": slug.current,
      "items": *[_type == "faq" && references(^._id)][0].items[] {
        question_ka,
        answer_ka,
        question_en,
        answer_en
      }
    }
  `
  return await sanity.fetch(query)
}
 
// =============== FAQ ============= //