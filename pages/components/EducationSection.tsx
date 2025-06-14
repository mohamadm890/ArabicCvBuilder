"use client";
import React from "react";
import { Text } from "@chakra-ui/react";
import { IoIosAdd } from "react-icons/io";
import { CvForm, Education } from "@/hooks/useCvForm";
import EducationDraw from "./educationDraw";
import Card_edu from "./cardedu";



interface Props {
  formCv: CvForm;
  handleEducation: (index: number, field: keyof Education, value: string) => void;
  addEducation: () => void;
  deleteEudcation: (index: number) => void;
  openEducationIndex: number | null;
  setOpenEducationIndex: (index: number | null) => void;
}

const EducationSection: React.FC<Props> = ({
  formCv,
  handleEducation,
  addEducation,
  openEducationIndex,
  deleteEudcation,
  setOpenEducationIndex,
}) => {
  return (
    <div
      style={{
        marginTop: "8px",
      backgroundColor: "white",
      padding:"28px",
      borderRadius:"8px"

      }}
      className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    >
      <div className="">
        <Text fontWeight={800} color="gray.800" fontSize="20px" mb={2}>
          ملخص التعليم
        </Text>
        <Text
          fontWeight={400}
          color="gray.600"
          maxWidth="312px"
          fontSize="12px"
          mb={2}
        >
          إضافة، تعديل، أو حذف تعليمك
        </Text>
        <div className="w-[332px] lg:w-[440] xl:w-[440] flex flex-col gap-4" style={{ marginTop: "24px" }}>

          {formCv?.educations?.map((educ: Education, idx: number) => (
            <Card_edu
              key={idx}
              educ={educ}
              index={idx}
              isOpen={openEducationIndex === idx}
              onOpenChange={(isOpen) =>
                setOpenEducationIndex(isOpen ? idx : null)
              }
              onDelete={() => deleteEudcation(idx)}
            />
          ))}
        </div>
        <div style={{marginTop:"16px"}}>

        <div className="flex flex-row gap-2 mt-12">
          <IoIosAdd size={20} color="#007FFF" />
          <button
            style={{
              color: "#007FFF",
              fontWeight: "600",
              fontSize: "12px",
            }}
            onClick={addEducation}
          >
            أضف تعليمك
          </button>
        </div>

        </div>
        

        <div>
          {formCv?.educations?.map((educ: Education, idx: number) => (
            <EducationDraw
              key={idx}
              handleEducation={handleEducation}
              index={idx}
              educ={educ}
              isOpen={openEducationIndex === idx}
              onClose={() => setOpenEducationIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
