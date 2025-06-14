"use client";
import { Cairo } from "next/font/google";
import { MdClose } from "react-icons/md";
import { Experience } from "@/hooks/useCvForm";
import { useCvFormContext } from "@/contexts/CvFormContext";
import {
    Button,
    CloseButton,
    Drawer,
    Textarea,
    Text,
    Input,
    Portal,
  } from "@chakra-ui/react";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-cairo",
});

type AddExperienceProps = {
  handleExperience: (index: number, field: keyof Experience, value: string) => void;
  index: number;
  isOpen: boolean;
  onClose: () => void;
  exp: Experience;
};

const AddExperience: React.FC<AddExperienceProps> = ({
  handleExperience,
  index,
  isOpen,
  onClose,
  exp,
}) => {
  const { formCv } = useCvFormContext();

 

  const handleSave = () => {
    console.log("Form to Save:", formCv);
    onClose();
  };

  return (
    <Drawer.Root size={"full"} 
      open={isOpen}
      onOpenChange={(openState) => {
        if (!openState) onClose();
      }}
      >
       

        <Portal>
  <Drawer.Backdrop />
  <Drawer.Positioner>
    <Drawer.Content dir="rtl" bg="#fff" color="black"  className={` ${cairo.className} `}   >  
      <Drawer.Header >
  <Drawer.CloseTrigger asChild>
          <CloseButton size="sm"  dir="rtl" color="#167FFC" bg="#D4E8FF" onClick={onClose}  borderRadius="full" />
  </Drawer.CloseTrigger>
  <div className="flex flex-col">
    
  <Text fontWeight={800} color="gray.800" fontSize="20px" mb={2}>
  ملخص الخبرة
        </Text>
        <Text fontWeight={400} color="gray.600" maxWidth="312px" fontSize="12px" mb={2}>
        إضافة، تعديل، أو حذف خبراتك        </Text>
  </div>

              </Drawer.Header>

      <Drawer.Body>
       <div className="w-full flex flex-col gap-4" style={{ marginTop: "24px" }} >
      <Input
          placeholder="اسم الشركة"
          bg="#F5F5F5"
          variant="subtle"
          height="54px"
          size="md"
          color="gray.600"
          borderColor="gray.300"
          value={exp?.companyName}
          name="companyName"
          onChange={(e) => handleExperience(index, "companyName", e.target.value)}

        />
        <Input
          placeholder="اسم الوظيفة"
          bg="#F5F5F5"
          variant="subtle"
          height="54px"
          size="md"
          color="gray.600"
          borderColor="gray.300"
          value={exp?.position}
          name="position"
          onChange={(e) => handleExperience(index, "position", e.target.value)}

        />
        <div className="flex flex-row gap-4">
       <Input
          placeholder="تاريخ البداية"
          bg="#F5F5F5"
          height="54px"
          variant="subtle"
          size="md"
          value={exp?.startDate}
          color="gray.800"
          borderColor="gray.300"
          onChange={(e) => handleExperience( index, "startDate", e.target.value)}

        />
        <Input
          placeholder="تاريخ الانتهاء"
          bg="#F5F5F5"
          height="54px"
          variant="subtle"
          size="md"
          color="gray.800"
          value={exp?.endDate}
          borderColor="gray.300"
          onChange={(e) => handleExperience(index, "endDate", e.target.value)}

        />
        </div>
        <Input
          placeholder="المدينة"
          bg="#F5F5F5"
          height="54px"
          variant="subtle"
          size="md"
          color="gray.800"
          value={exp?.city}
          borderColor="gray.300"
          onChange={(e) => handleExperience( index, "city", e.target.value)}

        />
        <Textarea
  placeholder="اكتب المهام التي قمت بها في هذه الوظيفة بشكل واضح ودقيق."
  bg="#F5F5F5"
  height="153px"
  variant="subtle"
  size="md"
  color="gray.800"
  value={exp?.description}
  borderColor="gray.300"
  onChange={(e) => handleExperience( index, "description", e.target.value)}

/>
      </div>
<div style={{ marginTop: "60px" }} >
      <Button width="full" bg="#007FFF" color="white" onClick={handleSave}  >حفظ</Button>
</div>

      </Drawer.Body>

      </Drawer.Content>
  </Drawer.Positioner>
</Portal>
      </Drawer.Root>
  );
};

export default AddExperience;
