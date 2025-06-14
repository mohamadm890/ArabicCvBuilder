"use client";
import { CvForm } from "@/hooks/useCvForm";
import { Input, Text } from "@chakra-ui/react";


interface Props {
    formCv: CvForm;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }
  
const ContactForm: React.FC<Props> = ({ formCv, handleInputChange }) => {
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
      <div className="mb-12">
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

      <div className="w-[332px] lg:w-[440px] xl:w-[440px] flex flex-col gap-4" style={{ marginTop: "24px" }}>
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
