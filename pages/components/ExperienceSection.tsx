"use client";
import { IoIosAdd } from "react-icons/io";
import { CvForm, Experience } from "@/hooks/useCvForm";
import Card_compount from "./Card";
import AddExperience from "./experienceDraw";



interface Props {
    formCv: CvForm;
    handleExperience: (index: number, field: keyof Experience, value: string) => void;
    addExperience: () => void;
    deleteExperience: (index: number) => void;
    openIndex: number | null; // Indicates which experience is open
    setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>; // State setter for openIndex
  }

const ExperienceSection: React.FC<Props> = ({
  formCv,
  handleExperience,
  addExperience,
  deleteExperience,
  openIndex,
  setOpenIndex,
}) => {
  return (
    <div
    style={{
      marginTop: "2px",
      backgroundColor: "white",
      padding:"28px",
      borderRadius:"8px",

    }}
    className="flex flex-col shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    >
      <div className="mb-12">
      <p style={{ fontWeight: 800, color: "#1F2937", fontSize: "20px", marginBottom: "8px" }}>
  ملخص الخبرة
</p>
<p style={{ fontWeight: 400, color: "#4B5563", maxWidth: "312px", fontSize: "12px", marginBottom: "8px" }}>
  إضافة، تعديل، أو حذف خبراتك
</p>


        <div
          className="flex flex-col gap-4 m-12"
          style={{ marginTop: "28px", marginBottom: "20px" }}
        >
          {formCv?.experiences?.map((exp, idx) => (
            <Card_compount
              key={idx}
              exp={exp}
              index={idx}
              isOpen={openIndex === idx}
              onOpenChange={(isOpen) => setOpenIndex(isOpen ? idx : null)}
              onDelete={() => deleteExperience(idx)}
            />
          ))}
        </div>

        <div className="flex flex-row gap-2">
          <IoIosAdd size={20} color="#007FFF" />
          <button
            style={{ color: "#007FFF", fontWeight: "600", fontSize: "12px" }}
            onClick={addExperience}
          >
            أضف خبرة جديدة
          </button>
        </div>

        <div className="w-[332px] lg:w-[440] xl:w-[440] flex flex-col gap-4" style={{ marginTop: "24px" }}>
        {(formCv?.experiences ?? []).map((exp, idx) => (
            <AddExperience
              key={idx}
              handleExperience={handleExperience}
              index={idx}
              exp={exp}
              isOpen={openIndex === idx}
              onClose={() => setOpenIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
