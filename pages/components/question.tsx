"use client";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
    {
      question: "كيف أنشئ CV؟",
      answer: "لإنشاء CV احترافي، حدد أولاً نوع الوظيفة التي تستهدفها، ثم اجمع بياناتك (المعلومات الشخصية، الخبرات، التعليم، المهارات). يمكنك استخدام قوالب جاهزة أو منصتنا Harbaacv لتوليد CV بتصميم جذاب خلال دقائق."
    },
    {
      question: "كيف أكتب سيرة ذاتية CV احترافية؟",
      answer: "ابدأ بمعلومات الاتصال، ثم ملخص عنك، ثم الخبرات العملية، التعليم، المهارات، واللغات. اجعل التنسيق منظمًا، وابتعد عن التفاصيل غير المهمة. منصتنا توفر لك تنسيقًا تلقائيًا واحترافيًا."
    },
    {
      question: "كيف يتم إنشاء CV؟",
      answer: "يمكنك إنشاء CV باستخدام Word أو Google Docs، أو بطريقة أسهل عبر Harbaacv التي ترشدك خطوة بخطوة لإدخال معلوماتك واختيار تصميم احترافي."
    },
    {
      question: "كيف أعمل CV وأنا طالب؟",
      answer: "حتى لو ما عندك خبرة، يمكنك كتابة CV يحتوي على تعليمك، الدورات، المهارات، المشاريع الدراسية، والعمل التطوعي. استخدم لغة بسيطة وركّز على ما تعلمته."
    },
    {
      question: "ما هي خطوات كتابة CV؟",
      answer: "١. كتابة البيانات الشخصية\n٢. تحديد الهدف المهني\n٣. سرد الخبرات السابقة\n٤. ذكر التعليم والمؤهلات\n٥. إضافة المهارات\n٦. اللغات والهوايات (اختياري)\n٧. التأكد من التنسيق والتدقيق الإملائي"
    },
    {
      question: "كيف أنشئ CV خاص بي بسهولة؟",
      answer: "ادخل على Harbaacv.com، اختر القالب المناسب، وأدخل بياناتك. في دقائق، سيكون لديك CV جاهز للتحميل أو الطباعة."
    },
   
    {
      question: "كيف أنشئ سيرة ذاتية احترافية مجانًا؟",
      answer: "من خلال Harbaacv، يمكنك إنشاء سيرة ذاتية احترافية مجانًا بالكامل بدون تسجيل أو دفع."
    }
  ];
  
export default function CollapsibleBasic() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container text-gray-800 p-6 rounded-lg" dir="rtl">
  {faqs.map((faq, index) => (
    <div className="faq-item " key={index} style={{padding:"32px"}}>
      <button
        className="faq-question w-full text-right bg-white text-gray-900 p-3 rounded  flex justify-between items-center"
        onClick={() => toggle(index)}
      >
        {faq.question}
        <span className="arrow">{activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />        }</span>
      </button>
      <div
      style={{padding:"20px", marginTop:"12px"}}
        className={`faq-answer mt-2 px-4 py-2 bg-gray-50 rounded transition-all duration-300 ease-in-out ${
          activeIndex === index ? "block" : "hidden"
        }`}
      >
        {faq.answer}
      </div>
    </div>
  ))}
</div>

  );
}
