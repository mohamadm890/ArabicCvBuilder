"use client";
import { Box, Textarea, Text } from "@chakra-ui/react";


// Type definition for the form state

interface Props {
  formCv: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
const SummarySection: React.FC<Props> = ({ formCv, handleInputChange }) => {
  return (
<div
      style={{
        backgroundColor: "white",
        padding: "28px",
        borderRadius:"8px",
        marginTop: "8px",
      }}
      className="flex flex-col shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    >
            <div >
        <Text fontWeight={800} color="gray.800" fontSize="20px" mb={2}>
          ملخص
        </Text>
        <Text fontWeight={400} color="gray.600" maxWidth="312px" fontSize="12px" mb={2}>
          قم بتضمين ملخص قصير عن خبرتك المهنية
        </Text>

        <div className="flex flex-col gap-4 m-12">
          <Box
            position="relative"
            bg="#F5F5F5"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="12px"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            padding="8px"
            height="auto" // Allow the Box to grow with the content
          >
            {/* Textarea-like element */}
            <Textarea
              placeholder="كتب هنا ملخص قصير عن خبرتك المهنية"
              bg="transparent"
              width="100%"
              size="md"
              fontWeight={500}
              color="gray.800"
              border="none"
              resize="none"
              value={formCv?.summary}
              onChange={handleInputChange}
              name="summary"
              minHeight="120px" // Allow the Textarea to have a minimum height
            />
            {/* Button inside the Textarea */}
          
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;