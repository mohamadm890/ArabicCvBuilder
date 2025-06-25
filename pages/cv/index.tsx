"use client";

import { useCvFormContext } from "@/contexts/CvFormContext";
import React, { useState, useEffect, useCallback } from "react";
import ContactForm from "../components/ContactForm";
import { Line } from '@rc-component/progress';
import {
    Text,
  } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'



import dynamic from 'next/dynamic';

const ExperienceSection = dynamic(() => import("../components/ExperienceSection"));
const EducationSection = dynamic(() => import("../components/EducationSection"));
const SkillTagInput = dynamic(() => import("../components/skills"));
const LanguageSection = dynamic(() => import("../components/LanguageSection"));
const SummarySection = dynamic(() => import("../components/SummarySection"));

export default function HelloWorld() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get('id') ?? "";

  const { 
    
    formCv,
    handleInputChange,
    handleEducation,
    handleExperience,
    deleteExperience,
    addEducation,
    addExperience,
    handleKeyDown,
    handleSkillInputChange,
    handleRemoveSkill,
    handleLanguageChange,
    handleLevelChange,
    handleSelectTemplate,
    addSkill_,
    addLanguage,
    hanleImageDeletion,
    inputValue,
    handleImageChange,
    removeLanguage,
    deleteEudcation,
   } = useCvFormContext();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openEducationIndex, setOpenEducationIndex] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const router = useRouter();


  useEffect(() => {
    if (templateId) {
      const templateIdInt = parseInt(templateId, 10);  // convert string to int (base 10)
      if (!isNaN(templateIdInt)) {
        handleSelectTemplate(templateIdInt);
      } else {
        console.warn("Invalid templateId, not a number:", templateId);
      }
    }
  }, [templateId]);
  
  const handleClickPreview = useCallback(() => {
    if (currentStep === totalSteps - 1) {
      router.push('/preview');
    } else {
      nextStep();
    }
  }, [currentStep, router]);
  
  

 
  

 const getStepTitle = (step: number): string => {
  switch (step) {
    case 0:
      return "الخطوة 1 من 3: المعلومات الشخصية";
    case 1:
      return "الخطوة 2 من 3: الخبرات العملية والتعليمت";
    case 2:
      return "الخطوة 3 من 3:  الملخص، المهارات، واللغات ";
    default:
      return "";
  }
};

  

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));


  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen ">
   
    <div dir="rtl" className="w-full lg:w-[480px] xl:w-[480px] mt-4 sticky top-2 z-10 px-12 py-3   " style={{padding:"12px"}}>
    <div style={{padding:"12px",borderRadius: "18px"}}>
    <div className="flex flex-row justify-between w-full p-12">
   <label
     style={{
       marginBottom: '12px',
       display: 'block',
       color: 'gray',
       fontSize: '12px',
       marginTop: '8px',
     }}
   >
       {getStepTitle(currentStep)}
 
   </label>
 
   <label
     style={{
       marginBottom: '12px',
       display: 'block',
       color: '#48BA75',
       fontSize: '12px',
       marginTop: '8px',
       fontWeight:"400"
     }}
   >
    {Math.round(progress)}%
 
   </label>
 </div>
   
 <Line
   percent={progress}
   strokeWidth={1}
   strokeColor="#48BA75"
   style={{ transform: 'scaleX(-1)' }}
   className="progress-bar"
 />
 </div>
 </div>
 
 
     <div
     dir="rtl"
     className={`flex flex-col xl:flex-row lg:flex-row justify-center p-16 ml-40 mr-40 overflow-auto`}
   >
 <div className=" px-12"
 style={{ marginBottom: "4px", padding: "20px" }}>
         <div className=" lg:w-[440px] xl:w-[588px] flex flex-col justify-center items-center">
      
 
  
 {currentStep === 0 && (
           <>
           
           <ContactForm 
           handleImageChange={handleImageChange} 
     formCv={formCv} 
     handleInputChange={handleInputChange} 
     hanleImageDeletion={hanleImageDeletion}
     /> 
     
           </>
 
    
   )}
 
 
 {currentStep === 1 && (
   <>
     <ExperienceSection
       formCv={formCv}
       handleExperience={handleExperience}
       addExperience={addExperience}
       deleteExperience={deleteExperience}
       openIndex={openIndex}
       setOpenIndex={setOpenIndex}
     />
 
     <EducationSection
       formCv={formCv}
       handleEducation={handleEducation}
       addEducation={addEducation}
       openEducationIndex={openEducationIndex}
       setOpenEducationIndex={setOpenEducationIndex}
       deleteEudcation={deleteEudcation}
     />
 
 
 
 
   </>
 )}
 
 
 
 
 
 {currentStep === 2 && (
   <>
   <div>
 <div
       style={{
         backgroundColor: "white",
         padding: "28px",
         borderRadius:"8px",
         marginTop:"8px"
       }}
       className="flex flex-col shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
     >
               <Text fontWeight={800} color="gray.800" fontSize="20px" mb={2}>
         ملخص مهارات       </Text>
         <Text fontWeight={400} color="gray.600" maxWidth="312px" fontSize="12px" mb={2}>
         إضافة، تعديل، أو حذف  مهاراتك         </Text>
         
    <SkillTagInput addSkill_={addSkill_} formCv={formCv} handleKeyDown={handleKeyDown} handleSkillInputChange={handleSkillInputChange} handleRemoveSkill={handleRemoveSkill} inputValue={inputValue}  />
 
 </div>
 <LanguageSection formCv={formCv}   handleLanguageChange={handleLanguageChange}
     addLanguage={addLanguage} 
     handleLevelChange={handleLevelChange}
     removeLanguage={removeLanguage}
     />
 
      <div className="">
 
             <SummarySection formCv={formCv} handleInputChange={handleInputChange} />
      </div>
 
 
 
       </div>
 
     
  </>
     )}
 
 
 <div className="flex flex-row w-full mt-auto gap-2 lg:w-[480px] xl:w-[480px]" style={{marginTop:"28px"}}>
 <button
   style={{
     flex: 1,
     color: '#2184fd',
     backgroundColor: 'white',
     border: '1px solid #2184fd',
     padding: '10px 20px',
     borderRadius: '4px',
     cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
     opacity: currentStep === 0 ? 0.5 : 1
   }}
   onClick={prevStep}
   disabled={currentStep === 0}
 >
   السابق
 </button>
 
 <button
   style={{
     flex: 1,
     color: 'white',
     backgroundColor: '#2196F3',
     border: 'none',
     padding: '10px 20px',
     borderRadius: '4px',
     cursor: 'pointer'
   }}
   onClick={handleClickPreview}
 >
   {currentStep === totalSteps - 1 ? "معاينة" : "التالي"}
 </button>
 
 </div>
 
 
         </div>
 
 
       </div>
  
     </div>
 
     
     </div>
  );
}
