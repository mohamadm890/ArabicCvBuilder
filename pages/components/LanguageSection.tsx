"use client";

import { IoIosAdd } from "react-icons/io";
import { Text, Input } from "@chakra-ui/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Language } from "@/hooks/useCvForm";


const levels: Language["level"][] = ["مبتدئ", "متوسط", "متقدم", "لغة الأم"];

interface LanguageSectionProps {
  formCv: { languages: Language[] };
  handleLanguageChange: (index: number, value: string) => void;
  handleLevelChange: (index: number, value: Language["level"]) => void; // <- change this line
  addLanguage: () => void;
  removeLanguage: (index: number) => void;
}

const LanguageSection: React.FC<LanguageSectionProps> = ({
  formCv,
  handleLanguageChange,
  handleLevelChange,
  addLanguage,
  removeLanguage,
}) => {

  
  return (
    <div
    style={{
      marginTop: "8px",
      backgroundColor: "white",
      padding: "28px",
      borderRadius: "8px",
    }}
    className="flex flex-col gap-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
  >
    <div>
      <Text fontWeight={800} color="gray.800" fontSize="20px" mb={2}>
        اللغات
      </Text>
      <Text
        fontWeight={400}
        color="gray.600"
        maxWidth="312px"
        fontSize="12px"
        mb={2}
      >
        أضف، عدّل، أو احذف اللغات التي تتحدثها
      </Text>
    </div>
  
    {/* Languages List */}
    <div className="flex flex-col gap-4 mb-4">
    <div className="flex flex-col gap-4 mb-4 ">
  

    </div>
    {(formCv?.languages || []).map((item, idx) => {
    const isLast = idx === formCv.languages.length - 1;

    if (!isLast) {
      // Show view mode for old languages
      return (
        <div
          key={idx}
          className=" w-[332px]  h-[70px] lg:w-[440px] xl:w-[440] p-8 flex flex-col justify-center"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.08)",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
           <div className="flex flex-row justify-between items-center">
    <div>
    <h1 className="text-xl text-black font-bold">
      {item?.language ? item?.language : "غير محدد"} {/* fallback if empty */}
    </h1>
    <p className="text-gray-500">
      {item?.level ? item?.level : "غير معروف"} {/* fallback if empty */}
    </p>
    </div>


<MdOutlineDeleteOutline onClick={() => removeLanguage(idx)} size={20} color="#7E7E7E"  className="cursor-pointer"
/>


</div>
        </div>
      );
    } else {
      // Show inputs only for the last (new) language
      return (
        <div key={idx}>
          <Input
            value={item.language}
            onChange={(e) => handleLanguageChange(idx, e.target.value)}
            fontWeight="md"
            fontSize="14px"
            placeholder="مثال: الإسبانية"
            height="54px"
            borderRadius="8px"
            variant="subtle"
            bg="#F5F5F5"
            size="md"
            borderColor="gray.300"
            color="gray.600"
            mb={2}
          />
          <select
            value={item.level}
            onChange={(e) => handleLevelChange(idx, e.target.value as Language["level"])}
            style={{
              fontSize: "12px",
              color: "#757575",
              border: "1px solid #ccc",
              borderRadius: "6px",
              padding: "4px",
              width: "100%",
              height: "54px",
              backgroundColor: "#F5F5F5",
              marginBottom: "8px",
            }}
          >
            {levels.map((level, i) => (
              <option key={i} value={level} className="text-gray-600 text-sm">
                {level}
              </option>
            ))}
          </select>
        </div>
      );
    }
  })}
    </div>
  
    {/* Add language button */}
    <div
      className="flex items-center gap-2 cursor-pointer mt-6"
      onClick={addLanguage}
    >
      <IoIosAdd size={20} color="#007FFF" />
      <button
        style={{ color: "#007FFF", fontWeight: "600", fontSize: "12px" }}
        type="button"
      >
        أضف لغة 
      </button>

    
    </div>

   

  </div>
  
  );
};

export default LanguageSection;
