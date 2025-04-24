
import { useState } from "react";

const faqs = [
  {
    question: "About Cipla",
    answer: `Cipla Limited is an India-based global pharmaceutical company. The Company is engaged in manufacturing, developing and marketing a wide range of branded and generic formulations and Active Pharmaceutical Ingredients (APIs). The Company operates through two segments: Pharmaceuticals and New ventures. The Pharmaceuticals segment is engaged in developing, manufacturing, selling, and distributing generic or branded generic medicines, as well as Active Pharmaceutical Ingredients (API). The New ventures segment includes the operations of the Company, a consumer healthcare, Biosimilars and specialty business. Its product portfolio spans complex generics, as well as drugs in the respiratory, anti-retroviral, urology, cardiology, anti-infective and central nervous system (CNS).`
  },
  {
    question: "About Cipla",  
    answer: `Cipla Limited is an India-based global pharmaceutical company. The Company is engaged in manufacturing, developing and marketing a wide range of branded and generic formulations and Active Pharmaceutical Ingredients (APIs). The Company operates through two segments: Pharmaceuticals and New ventures.`
  },
];

export default function PriceFaqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="space-y-4 ">
      <h2 className="text-xl font-semibold text-white">Cipla Price FAQs</h2>

      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-cardDark rounded-2xl overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-6 py-4"
            >
              <span className="text-white text-sm font-medium">
                {item.question}
              </span>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            {isOpen && (
              <div className="px-6 pb-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
