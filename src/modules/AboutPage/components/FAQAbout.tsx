"use client"

import { Flex, Heading, Text } from '@/components/UI'
import { useState } from 'react'
import { TbCirclePlus } from 'react-icons/tb'

const faqs = [
  {
    question: "Do I need a reservation to dine at your restaurant?",
    answer: "While walk-ins are always welcome, we highly recommend making a reservation—especially on weekends—to ensure your table is ready upon arrival."
  },
  {
    question: "Do you offer vegetarian or vegan options?",
    answer: "Yes, we proudly offer a selection of vegetarian and vegan dishes prepared with the same care and creativity as the rest of our menu."
  },
  {
    question: "Can I book a private event or group dinner?",
    answer: "Absolutely! We provide tailored experiences for private events, celebrations, and corporate dinners. Contact us in advance, and we’ll be happy to assist."
  },
  {
    question: "Do you accommodate food allergies or dietary restrictions?",
    answer: "Of course. Please inform our staff of any allergies or dietary needs, and our chefs will gladly prepare a dish that meets your requirements."
  },
  {
    question: "Do you offer delivery or takeout?",
    answer: "Yes, we offer both takeout and delivery options so you can enjoy our food from the comfort of your home."
  }
]

export const FAQAbout = () => {
  // guardamos el índice activo o null
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index) // si hago click en el mismo, se cierra
  }

  return (
    <div className='py-8 mb-12'>
      <Heading className='uppercase text-center' fs='xxl' color='white'>
        got questions? <br />
        <span className='text-red'> we&apos;ve got answers!</span>
      </Heading>
      <Flex direction='col' className='mt-6'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='relative w-full md:w-4/6 lg:1/2 border-b-2 border-gray-300 rounded-sm p-3'
          >
            <Flex justify='between'>
              <Heading color='white' fs='lg' fw='medium'>
                {faq.question}
              </Heading>
              <button
                onClick={() => toggleFaq(index)}
                className='cursor-pointer'
              >
                <TbCirclePlus color='white' size={20} />
              </button>
            </Flex>
            <div
              className={`${activeFaq === index ? 'h-16' : 'h-0'
                } relative transition-all duration-300 overflow-hidden`}
            >
              <div className='w-full h-16 absolute top-0 left-0 right-0'>
                <Text className='text-gray-300'>{faq.answer}</Text>
              </div>
            </div>
          </div>
        ))}
      </Flex>
    </div>
  )
}
