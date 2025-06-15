
import React, { useState, useEffect, ChangeEvent } from "react";
import useLocalStorageState from "use-local-storage-state";

// Types
export type CvForm = {
  fullName: string;
  email: string;
  jobTitle: string;
  phoneNumber: string;
  country: string;
  city: string;
  summary: string;
  skills: string[];
  experiences: Experience[];
  educations: Education[];
  languages: Language[];
  templateId?: number | string | null;
};
export type Language = {
  language: string;
  level: "مبتدئ" | "متوسط" | "متقدم" | "لغة الأم"; // Beginner | Intermediate | Advanced | Native
};
export type Experience = {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  city: string;
};

export type Education = {
  schoolName: string;
  degree: string;
  startDate: string;
  endDate: string;
};



// ✅ Custom Hook
export function useCvForm() {
  const DEFAULT_CV_FORM: CvForm = {
    fullName: "",
    email: "",
    jobTitle:"",
    phoneNumber: "",
    country: "",
    city: "",
    summary: "",
    skills: [],
    experiences: [],
    educations: [],
    languages: [], 
    templateId: null,

  };
  const [formCv, setFormCv] = useLocalStorageState<CvForm>("cv-form", {
    defaultValue: DEFAULT_CV_FORM,
  });
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [inputValue, setInputValue] = useState("");

  
  const handleSelectTemplate = (templateId: string | number) => {
    setFormCv(prev => ({
      ...prev,
      templateId: templateId, 
    }));
    console.log("User selected template ID:", templateId);
  };

  // Save to localStorage on every update
 

  // ✅ Input text (fullName, email, etc.)
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormCv(prev => ({ ...prev, [name]: value }));
  };

 
  const addSkill_ = () => {
    if (inputValue.trim() === "") return;
  
    // Prevent duplicates (optional)
    if (formCv.skills.includes(inputValue.trim())) return;
  
    const newSkills = [...formCv.skills, inputValue.trim()];
    setFormCv({ ...formCv, skills: newSkills });
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
  
      // Create a copy of the skills array and add the new skill
      const newSkills = [...formCv.skills, inputValue.trim()];
  
      // Update formCv with new skills array
      setFormCv({ ...formCv, skills: newSkills });
  
      // Clear input after adding
      setInputValue("");
    }
  };
  


const handleSkillChange = (index: number, value: string) => {
  setFormCv(prev => {
    const updated = [...prev.skills]; // use prev, not formCv directly
    updated[index] = value;
    return {...prev, skills: updated };
  });
};

const handlePreview = async () => {
  try {
    console.log(formCv, "formCv");
    const response = await fetch(`${apiUrl}/preview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ formCv })
    });

    const html = await response.text();
    // You can return or save the result somewhere
    console.log("✅ Preview received:", html);
    return html;
  } catch (err) {
    console.error('❌ Error generating preview:', err);
    return null;
  }
};
const [pdfBase64, setPdfBase64] = useState(null);

const generatePdf = async () => {
  try {
    const response = await fetch(`${apiUrl}/generate-pdf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formCv: formCv }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate PDF');
    }

    const data = await response.json();
    setPdfBase64(data.pdfBase64);

    // Convert base64 to Blob and trigger download
    const linkSource = `data:application/pdf;base64,${data.pdfBase64}`;
    const downloadLink = document.createElement("a");
    const fileName = "cv.pdf";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  } catch (error) {
    console.error(error);
    alert('Error generating PDF');
  }
};



  const handleSkillInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    const updatedSkills = formCv.skills.filter(skill => skill !== skillToRemove);
    setFormCv(prev => ({ ...prev, skills: updatedSkills }));
  };

  const addSkill = () => {
    setFormCv(prev => ({
      ...prev,
      skills: [...prev.skills, ""]
    }));
  };
  const handleLanguageChange = (index: number, value: string) => {
    const updatedLanguages = [...formCv.languages];
    updatedLanguages[index].language = value;
    setFormCv(prev => ({ ...prev, languages: updatedLanguages }));
  };
  
  const handleLevelChange = (index: number, value: Language["level"]) => {
    const updatedLanguages = [...formCv.languages];
    updatedLanguages[index].level = value;
    setFormCv(prev => ({ ...prev, languages: updatedLanguages }));
  };
  
  const removeLanguage = (indexToRemove: number) => {
    setFormCv(prev => ({
      ...prev,
      languages: prev.languages.filter((_, idx) => idx !== indexToRemove),
    }));
  };

  const addLanguage = () => {
    setFormCv(prev => ({
      ...prev,
      languages: [...(prev.languages || []), { language: "", level: "مبتدئ" }],
    }));
  };



  // ✅ Experience
  const addExperience = () => {
    setFormCv(prev => {
      const updatedExperiences = [
        ...prev.experiences,
        {
          companyName: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
          city: ""
        }
      ];
      return {
        ...prev,
        experiences: updatedExperiences
      };
    });
  };

  const updateExperience = (index: number, field: keyof Experience, value: string) => {
    setFormCv(prev => {
      const updatedExperiences = [...prev.experiences];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        [field]: value
      };
      return {
        ...prev,
        experiences: updatedExperiences
      };
    });
  };

  const deleteExperience = (index: number) => {
    setFormCv(prev => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index)
    }));
  };

  const handleExperience = (index: number, field: keyof Experience, value: string) => {
    if (!formCv.experiences || !formCv.experiences[index]) {
      console.error("Invalid index or experiences array not initialized");
      return;
    }
    const newExperiences = [...formCv.experiences];
    newExperiences[index][field] = value;
    setFormCv({ ...formCv, experiences: newExperiences });
  };

  // ✅ Education
  const addEducation = () => {
    setFormCv(prev => ({
      ...prev,
      educations: [
        ...prev.educations,
        {
          schoolName: "",
          degree: "",
          startDate: "",
          endDate: ""
        }
      ]
    }));
  };

  const handleEducation = (index: number, field: keyof Education, value: string) => {
    const newEducations = [...formCv.educations];
    newEducations[index][field] = value;
    setFormCv({ ...formCv, educations: newEducations });
  };

  const deleteEudcation = (index: number) => {
    setFormCv(prev => ({
      ...prev,
      educations: prev.educations.filter((_, i) => i !== index)
    }));
  };

  return {
    formCv,
    setFormCv,
    addSkill_,
    handleInputChange,
    inputValue,
    handleKeyDown,
    handleSkillInputChange,
    handleRemoveSkill,
    addSkill,
    handlePreview,
    handleLanguageChange,
    generatePdf, 
    pdfBase64,
    handleLevelChange,
    handleSelectTemplate,
    addLanguage,
    handleSkillChange,
    handleEducation,
    handleExperience,
    updateExperience,
    deleteExperience,
    removeLanguage,
    addEducation,
    addExperience,
    deleteEudcation
  };
}

