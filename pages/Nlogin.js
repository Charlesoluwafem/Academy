import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What courses do you offer?",
      answer:
        "We offer a wide range of online courses, including technology, business, marketing, design, and personal development. Our courses are designed to help you enhance your skills and achieve your professional goals.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "To enroll in a course, simply browse our course catalog, select the course you're interested in, and click 'Enroll'. You can create an account or log in to complete your registration.",
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer:
        "Yes! Upon successful completion of a course, you will receive a certificate that you can download or share on LinkedIn and other platforms to showcase your achievement.",
    },
    {
      question: "Are the courses free?",
      answer:
        "While many of our courses are free to enroll in, some of our premium courses require a one-time payment or subscription. Please check the course details for pricing information.",
    },
    {
      question: "Can I access the course materials after completion?",
      answer:
        "Yes! Once enrolled, you will have lifetime access to the course materials, including video lectures, quizzes, and additional resources.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "We offer a 30-day money-back guarantee for most courses. If you're not satisfied with your course, you can request a refund within 30 days of purchase.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-12">
          Here are some answers to commonly asked questions about our platform.
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div
              className="border-t border-gray-200 px-6 py-4 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
                <span className="text-gray-500 text-lg">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
            </div>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-600 bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

