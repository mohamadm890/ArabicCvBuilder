
"use client";

import { HStack, Tag, CloseButton, Input } from "@chakra-ui/react";
import { IoIosAdd } from "react-icons/io";


interface SkillTagInputProps {
  formCv: {
    skills: string[];
  };
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSkillInputChange: (value: string) => void;
  handleRemoveSkill: (skill: string) => void;
  inputValue: string;
  addSkill_: () => void;
}

const SkillTagInput: React.FC<SkillTagInputProps> = ({formCv,
  handleKeyDown,
  handleSkillInputChange,
  handleRemoveSkill,
  inputValue,
  addSkill_
}) => {
 



 
 

  return (

   
            <div className="w-[332px] lg:w-[440] xl:w-[440] flex flex-col gap-4 " style={{ marginTop: "24px" }}>
    
      <Input
        mt={4}
        placeholder="مهاراتك"

        bg="#F5F5F5"
          height="54px"
          variant="subtle"
          borderRadius="12px"

          size="md"
          color="gray.800"
          borderColor="gray.300"
        value={inputValue}
        onChange={(e) => handleSkillInputChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
<HStack  flexWrap="wrap" width="332px">
    {formCv?.skills?.map((skill) => (
 <Tag.Root
 key={skill}
 style={{
   backgroundColor: "white",
   color: "#636363",

   border: "1px solid rgba(0, 0, 0, 0.08)", 
   borderRadius: "8px",
   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" // Soft shadow
 }}
>
                <Tag.Label style={{fontWeight:"600"}}>{skill}</Tag.Label>
            <CloseButton   _hover={{
        bg: "transparent",  // Remove background hover effect
        color: "#FC1616",   // Optionally, you can also remove color change on hover
      }} onClick={() => handleRemoveSkill(skill)} />
          </Tag.Root>
        ))}




<div
      className="flex items-center gap-2 cursor-pointer mt-6"
      onClick={addSkill_}
    >
      <IoIosAdd size={20} color="#007FFF"  />
      <button
        style={{ color: "#007FFF", fontWeight: "600", fontSize: "12px" }}
        type="button"
      >
        أضف مهارة
      </button>

    
    </div>

      </HStack>

    </div>
  
  );
};

export default SkillTagInput;