"use client";
import { Education } from "@/hooks/useCvForm";
import {
    Button,
    CloseButton,
    Drawer,
    Text,
    Input,
    Portal,
  } from "@chakra-ui/react";
  import { Cairo } from "next/font/google";

  const cairo = Cairo({
    subsets: ["latin"],
    weight: ["300", "400", "700", "800"],
    variable: "--font-cairo",
  });

  
  type AddEducationProps = {
    handleEducation: (index: number, field: keyof Education, value: string) => void;
    index: number;
    isOpen: boolean;
    onClose: () => void;
    educ: Education;
  };

 
  
  const EducationDraw  : React.FC<AddEducationProps> = ({ handleEducation, index, isOpen, onClose, educ }) => {

    const handleSave = () => {
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
  التعليم
        </Text>
        <Text fontWeight={400} color="gray.600" maxWidth="312px" fontSize="12px" mb={2}>
        شاركنا اسم الكلية أو الجامعة التي التحقت بها.
                </Text>
  </div>

              </Drawer.Header>

      <Drawer.Body>
       <div className="w-full flex flex-col gap-4" style={{ marginTop: "24px" }} >
      <Input
          placeholder="اسم المدرسة أو الجامعة"
          bg="#F5F5F5"
          variant="subtle"
          height="54px"
          size="md"
          color="gray.600"
          borderColor="gray.300"
          value={educ?.schoolName}
          name="schoolName"
          onChange={(e) => handleEducation(index, "schoolName", e.target.value)}


        />
        <Input
          placeholder="تخصص الدراسة"
          bg="#F5F5F5"
          variant="subtle"
          height="54px"
          size="md"
          color="gray.600"
          borderColor="gray.300"
          value={educ?.degree}
          name="major"
          onChange={(e) => handleEducation(index, "degree", e.target.value)}

         
        />
        <div className="flex flex-row gap-4">
       <Input
          placeholder="تاريخ البداية"
          bg="#F5F5F5"
          height="54px"
          variant="subtle"
          size="md"
          color="gray.800"
          borderColor="gray.300"
          value={educ?.startDate}
          name="startDate"
          onChange={(e) => handleEducation(index, "startDate", e.target.value)}

        />
        <Input
          placeholder="تاريخ الانتهاء"
          bg="#F5F5F5"
          height="54px"
          variant="subtle"
          size="md"
          color="gray.800"
          borderColor="gray.300"
          value={educ?.endDate}
          name="endDate"
          onChange={(e) => handleEducation(index, "endDate", e.target.value)}

        />
        </div>
       
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
  export default EducationDraw;