"use client"
import { Education } from "@/hooks/useCvForm";
import { Text } from "@chakra-ui/react"
import BottomActionsDialog from "./BottomActionsDialog";

type CardCompountProps = {
  educ: Education;
  index: number;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onDelete: () => void;

};

const Card_edu = ({educ, index, isOpen, onDelete, onOpenChange}: CardCompountProps) => {

  return (
      <div className=" w-[332px]  h-[70px] lg:w-[440] xl:w-[440]  flex flex-col justify-center"   style={{

   border: "1px solid rgba(0, 0, 0, 0.08)", 
   borderRadius: "8px",


      }}     key={index}
      >
<div className="flex flex-row justify-between items-center" style={{padding:"20px"}}>

<div className="flex flex-col" >
<Text color="#323232" fontWeight={800}  fontSize="12px" onClick={() => onOpenChange(true)}  _hover={{ color: "#167FFC", cursor: "pointer" }}
 >{educ?.schoolName || educ?.degree
    ? educ?.schoolName || educ?.degree
    : "غير محدد"}</Text>
<Text color="#929292" fontWeight={400}  fontSize="12px"> {educ?.startDate} - {educ?.endDate}</Text>
</div>
<BottomActionsDialog index={index} onDelete={onDelete}  />

</div>

      </div>
       
      
  )
}
export default Card_edu;