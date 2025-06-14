"use client"
import { Experience } from "@/hooks/useCvForm";
import BottomActionsDialog from "./BottomActionsDialog";

type CardCompountProps = {
  exp: Experience;
  index: number;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onDelete: () => void;

};

const Card_compount = ({exp, index, onDelete, onOpenChange}: CardCompountProps) => {

  return (
      <div className=" w-[100%]  h-[70px]  lg:w-[440] xl:w-[440] flex flex-col justify-center"   style={{

   border: "1px solid rgba(0, 0, 0, 0.08)", 
   borderRadius: "8px",
      }}     
      key={index}
      >
<div className="flex flex-row justify-between items-center" style={{padding:"20px"}}>

<div className="flex flex-col" >
<p
  style={{
    color: "#323232",
    fontWeight: 800,
    fontSize: "12px",
    cursor: "pointer",
  }}
  onClick={() => onOpenChange(true)}
  onMouseOver={(e) => (e.currentTarget.style.color = "#167FFC")}
  onMouseOut={(e) => (e.currentTarget.style.color = "#323232")}
>
  {exp?.position || exp?.companyName ? exp?.position || exp?.companyName : "غير محدد"}
</p>

<p style={{ color: "#929292", fontWeight: 400, fontSize: "12px" }}>
  {exp?.startDate} - {exp?.endDate}
</p>

</div>
<BottomActionsDialog index={index} onDelete={onDelete}  />

</div>

      </div>
       
      
  )
}
export default Card_compount;