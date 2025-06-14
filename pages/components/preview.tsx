"use client";
import React, { useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import { IoIosClose } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { useCvFormContext } from '@/contexts/CvFormContext';


const PdfPreview: React.FC = () => {
  const router = useRouter();
  const [previewHtml, setPreviewHtml] = React.useState<string | null>(null);
  const { handlePreview, generatePdf, formCv } = useCvFormContext();
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const previewCv = async () => {
      if (!formCv?.templateId) {
        console.log("No valid templateId yet, skipping preview");
        return;
      }
      const html = await handlePreview();
      setPreviewHtml(html);
    };
  
    previewCv();
  }, [formCv]);
  
  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      await generatePdf();
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };



  return (
    <div className="flex flex-col h-screen w-screen bg-white  ">

 <div className=" h-16 sm:h-16 lg:h-20 bg-[#000E1F] ">
  <div className=" h-full flex items-center justify-between" style={{padding:"12px"}}>
  <button
  onClick={handleDownload}
  style={{
    backgroundColor: "#1F50FF",
    width: "120px",
    color: "white",
    borderRadius: "24px",
  }}
  className="flex items-center justify-center gap-2 py-2 rounded cursor-pointer hover:bg-blue-700 transition h-10"
>
 
      <LuDownload size={16} />
      تحميل
</button>


     <IoIosClose
      onClick={() => router.back()}
      color="#A9A9A9"
      size={24}
      className="cursor-pointer"
    />

   

   
  </div>
</div>



<div className="flex-1 flex items-center justify-center  bg-gray-100">

{isGenerating ? (
  <div
  style={{
    display: "flex",
    alignItems: "center",      // vertically center items
    justifyContent: "center",  // center container horizontally (optional)
    gap: "8px",                // space between spinner and text
    marginTop: "8px",          // margin on top (optional)
  }}
>
  <p
    className="text-sm"
    style={{
      textAlign: "center",
      color: "#373738",
      fontWeight: "800",
      fontSize: "18px",
      margin: 0,               // remove default margin from <p>
    }}
  >
    جاري تحضير الـ PDF، يرجى الانتظار...
  </p>
</div>


) :  

<div  className="px-12 h-auto w-full max-h-full overflow-y-auto flex flex-col items-center">
  <div className=" flex  items-center justify-center">
  <div
  className="transform scale-90 xs:scale-100 sm:scale-110 md:scale-130 lg:scale-160"  style={{
    position: "relative",
    width: "745px",
    minHeight: "1022px",
    height: "fit-content",
    boxSizing: "border-box",
    zIndex: 4,
    WebkitTextSizeAdjust: "100%",
    transition: "font-size .2s ease-in-out",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    cursor: "pointer",
    overflow: "hidden",
    border: "0 solid #fff",
    borderRadius: "4px",
    marginTop:"20px",
    transform: "scale(0.6)",
    transformOrigin: "center",
   
  }}
>


  <iframe
    title="CV Preview"
    srcDoc={previewHtml ?? undefined} // if null, set undefined instead
    style={{
      position: "absolute",
      minHeight: "1022px",
      width: "790px",
      marginLeft: "-100px",
      border: "none",
      transformOrigin: "center",
      transform: "scale(0.91)",
      left:"90px",

    }}
    key={previewHtml}
  />
</div>
</div>


  </div>
  }
 
</div>


</div>

  );
}

export default PdfPreview;


