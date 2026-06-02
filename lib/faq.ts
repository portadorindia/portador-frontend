export type FAQItem = {
  question: string;
  answer: string;
};

const yesNoQuestionPattern = /^(can|do|does|is|are|should|will|would|could)\b/i;
const negativeIntentPattern = /(without documentation|without documents|without proper documentation|without.*declaration|without.*approval|always possible|guaranteed|guarantee|fixed for)/i;

export function normalizeFaqAnswer(faq: FAQItem): FAQItem {
  const answer = faq.answer.trim();

  if (/^yes[.,]/i.test(answer)) {
    return { ...faq, answer: answer.replace(/^yes[.,]/i, "YES.") };
  }

  if (/^no[.,]/i.test(answer)) {
    return { ...faq, answer: answer.replace(/^no[.,]/i, "NO.") };
  }

  if (!yesNoQuestionPattern.test(faq.question)) {
    return { ...faq, answer };
  }

  const prefix = negativeIntentPattern.test(`${faq.question} ${answer}`) ? "NO." : "YES.";
  return {
    ...faq,
    answer: `${prefix} ${answer}`
  };
}

export function normalizeFaqs(faqs: FAQItem[]): FAQItem[] {
  return faqs.map(normalizeFaqAnswer);
}
