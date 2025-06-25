"use client";
import { CvForm } from "@/hooks/useCvForm";
import { Box, Input, Text } from "@chakra-ui/react";
import { IoPerson } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";


interface Props {
    formCv?: CvForm;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hanleImageDeletion: () => void;
  }
  
const ContactForm: React.FC<Props> = ({ formCv, handleInputChange, handleImageChange, hanleImageDeletion }) => {
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

 
  

  return (
    <div
      style={{
        marginTop: "2px",
        backgroundColor: "white",
        padding: "28px",
        borderRadius:"8px",

      }}
      className="flex flex-col shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    >
      <div style={{marginTop:"4px", paddingBottom:"20px"}}>
        <Text fontWeight={800} color="gray.800" fontSize="20px" mb={2}>
          الاتصال
        </Text>
        <Text
          fontWeight={400}
          color="gray.600"
          maxWidth="312px"
          fontSize="12px"
          mb={2}
        >
          أول خطوة بسيطة! عشان أصحاب العمل يقدروا يتواصلوا معك بسهولة، أدخل اسمك، إيميلك، ورقم تليفونك.
        </Text>
   

      </div>


      <div className="w-[332px] lg:w-[440px] xl:w-[440px] flex flex-col gap-4" >
     

<Box display="flex"       
 alignItems="center" cursor="pointer" gap={4}>
<Box
onClick={handleClick}
      width="48px"
      height="48px"
      borderRadius="full"
      bg="gray.100"
      display="flex"
      alignItems="center"
      justifyContent="center"
     borderColor="gray.300"
     cursor="pointer"
     _hover={{
      bg: "#C6E0FF",
      borderColor: "#C6E0FF",
      color: "white",          // icon color on hover
    }}
    >
 {formCv?.profileImage?.dataUrl ? (
  <>
  
  {typeof formCv?.profileImage?.dataUrl === "string" && (
  <img
    src={formCv?.profileImage?.dataUrl}
    alt="Profile"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "8px",
    }}
  />
)}


  </>
    
  ) : (
    <div className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
      <IoPerson size={28}   onClick={handleClick} />
    </div>
  )}
        </Box>
       {formCv?.profileImage?.dataUrl ? (
        <div onClick={hanleImageDeletion} className="text-gray-500 hover:text-blue-600 transition-colors duration-300"> <RiDeleteBin7Line color="red"  /> </div>
       )
        : (
       <Text color="#167FFC"  onClick={handleClick}       fontSize="13px"> 
    ارفع صورتك
     </Text>

       )}
       
   


    <input
          type="file"
          accept="image/*"
          ref={inputFileRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
</Box>
        
<Input
  name="jobTitle"
  placeholder="المسمى الوظيفي"
  value={formCv?.jobTitle || ''}
  onChange={handleInputChange}
  height="54px"
  borderRadius="8px"
  bg="#F5F5F5"
  variant="subtle"
  size="md"
  color="gray.600"
  borderColor="gray.300"
/>

         <Input
          name="fullName"
          placeholder="الاسم الكامل"
          value={formCv?.fullName || ''}
          onChange={handleInputChange}
          height="54px"
          borderRadius="8px"
          bg="#F5F5F5"
          variant="subtle"
          size="md"
          color="gray.600"
          borderColor="gray.300"
        />
       

        <Input
          name="email"
          placeholder="الإيميل"
          value={formCv?.email || ''}
          onChange={handleInputChange}
          height="54px"
          borderRadius="8px"
          bg="#F5F5F5"
          variant="subtle"
          size="md"
          color="gray.600"
          borderColor="gray.300"
        />
        <Input
          name="phoneNumber"
          placeholder="رقم الهاتف"
          value={formCv?.phoneNumber || ''}
          onChange={handleInputChange}
          height="54px"
          borderRadius="8px"
          bg="#F5F5F5"
          variant="subtle"
          size="md"
          color="gray.600"
          borderColor="gray.300"
        />
        <Input
          name="country"
          placeholder="البلد"
          value={formCv?.country || ''}
          onChange={handleInputChange}
          height="54px"
          borderRadius="8px"
          bg="#F5F5F5"
          variant="subtle"
          size="md"
          color="gray.600"
          borderColor="gray.300"
        />
        <Input
          name="city"
          placeholder="المدينة"
          value={formCv?.city || ''}
          onChange={handleInputChange}
          height="54px"
          borderRadius="8px"
          bg="#F5F5F5"
          variant="subtle"
          size="md"
          color="gray.800"
          borderColor="gray.300"
        />
      </div>
    </div>
  );
};

export default ContactForm;
