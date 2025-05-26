import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
  } from '@radix-ui/react-accordion'
  import React from 'react'
  import { Plus } from 'lucide-react'
  
  const faqItems = [
    {
      question: 'Is hiring a cleaning service worth it?',
      answer:
        'Yes, it saves you time and ensures a professional, deep clean of your space.'
    },
    {
      question: 'What does a house cleaning service include?',
      answer:
        'Typically, it includes dusting, vacuuming, mopping, kitchen and bathroom cleaning, and more depending on the service plan.'
    },
    {
      question: 'What should I look for when hiring a cleaning service?',
      answer:
        'Look for reviews, certifications, insured services, eco-friendly practices, and flexibility in scheduling.'
    },
    {
      question: 'How often should I hire a maid service?',
      answer:
        'It depends on your needs — weekly, bi-weekly, or monthly cleanings are common for households.'
    },
    {
      question: 'What is the purpose of green cleaning?',
      answer:
        'Green cleaning uses non-toxic, biodegradable products that are safer for people, pets, and the environment.'
    },
    {
      question:
        'Who offers high-quality green house cleaning services near me in St. Louis and the area?',
      answer:
        'Several local cleaning companies offer eco-friendly services in St. Louis. Look for providers with green certifications.'
    }
  ]
  
  const Faq = () => {
    return (
      <section className="w-full px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-pink-600">
          Frequently Asked Questions
        </h2>
  
        <Accordion type="single" className="flex flex-col gap-4 border-t border-gray-200">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}

              value={`item-${index}`}
              className="border-b border-gray-200 py-4"
            >
              <AccordionTrigger className="flex justify-between items-center w-full text-left font-semibold text-pink-600 text-lg transition-all duration-300 ease-in-out ">
                {item.question}
                <Plus className="w-4 h-4 text-gray-500 transition-transform duration-300 ease-in-out" />
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm text-gray-700 mt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    )
  }
  
  export default Faq
  