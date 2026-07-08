import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Container from "../ui/Container";

const faqs = [
  {
    question: "Who can benefit from occupational therapy?",
    answer:
      "Occupational therapy can help children experiencing delays in motor skills, sensory processing, handwriting, self-care, attention, social participation, and other developmental challenges.",
  },
  {
    question: "What age groups do you work with?",
    answer:
      "We primarily work with infants, toddlers, preschoolers, school-age children, and adolescents depending on their individual therapy needs.",
  },
  {
    question: "How long is a therapy session?",
    answer:
      "A typical therapy session lasts between 45 and 60 minutes. The duration may vary depending on your child's assessment and therapy goals.",
  },
  {
    question: "Do I need a doctor's referral?",
    answer:
      "A referral is not always required. However, if your pediatrician or specialist has recommended occupational therapy, you are welcome to bring their reports during your visit.",
  },
  {
    question: "How many sessions will my child need?",
    answer:
      "Every child is unique. After an initial assessment, we'll recommend a personalized therapy plan based on your child's goals and progress.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "Simply call us, send us a WhatsApp message, or reach out through our contact details. We'll be happy to assist you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#2D5FA8]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Everything Parents Often Ask
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We understand that starting therapy can feel overwhelming.
            Here are answers to some of the most common questions.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(open ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <FiChevronDown
                    className={`text-2xl text-[#2D5FA8] transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}