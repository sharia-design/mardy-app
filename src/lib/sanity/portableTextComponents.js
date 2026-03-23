export const myComponents = {
  listItem: {
    // აქ ვასწორებთ "normal" გაფრთხილებას და ვამატებთ სტილს
    normal: ({children}) => `<li>${children}</li>`, 
    bullet: ({children}) => `<li class="custom-bullet">${children}</li>`,
    number: ({children}) => `<li class="custom-number">${children}</li>`,
  },
  list: {
    bullet: ({children}) => `<ul class="my-list">${children}</ul>`,
    number: ({children}) => `<ol class="my-number-list">${children}</ol>`,
  },
  block: {
    // აქ შეგიძლიათ ჩვეულებრივი ტექსტის (p) სტილიც შეცვალოთ
    normal: ({children}) => `<p class="my-paragraph">${children}</p>`,
    h1: ({children}) => `<h1 class="my-title">${children}</h1>`,
  },
  marks: {
    // ლინკების სტილი
    link: ({children, value}) => {
      const href = value?.href || '';
      return `<a href="${href}" class="my-link" target="_blank">${children}</a>`;
    },
    // ბოლდირებული ტექსტი
    strong: ({children}) => `<strong class="text-bold">${children}</strong>`,
  }
};