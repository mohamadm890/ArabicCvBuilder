import Header from "./components/header";
import NewCvButton from "./components/NewCvButton";
import CollapsibleBasic from "./components/question";



export default function LeadingPage() {



  return (
<div className="min-h-screen flex justify-center bg-[white]" style={{ fontFamily: 'var(--font-cairo)' }}>
<div
        className="
          flex flex-col
          w-full
          sm:w-[480px]
          md:w-[768px]
          lg:w-[952px]
          xl:w-[1100px]
          p-4
        "
      >
        {/* Header */}
        <Header />


        {/* Leading content */}
        <div className="pt-10 flex flex-col items-center pb-10 px-4 sm:px-10 lg:px-20" style={{ marginTop: "60px" }}>
          <div className="w-[380px] mx-auto flex flex-col gap-4 items-center">
            <h1
    className="mb-4 text-[#323232] text-center font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
    style={{ fontSize: "40px", fontWeight:"800" }}
            >
أنشئ سيرتك الذاتية باحترافية خلال دقائق!
            </h1>
            <p
              className="text-[#7E7E7E] text-center"
              style={{ fontSize: "18px", marginTop: "8px" }}
            >
أداة سهلة وسريعة لإنشاء سيرة ذاتية أنيقة باللغة العربية، جاهزة للتحميل بصيغة PDF – بدون تسجيل  .            </p>

<NewCvButton />


          </div>

          {/* Steps section */}
       
          {/* CTA to choose template */}

          <div style={{marginTop:"200px", width:"100%", padding:"20px"}} >
            
          <h2   style={{ fontSize: "24px", fontWeight:"600", color:"#323232",textAlign:"center", marginBottom:"80px"  }}
       >ما الذي يميز أداة بناء السيرة الذاتية الخاصة بنا؟</h2>

          <div style={{marginTop:"20px"}}>
          <div className="flex lg:flex-row xl:flex-row flex-col justify-between w-full gap-12">
          <div 

style={{
  border: '1px solid #E5E5E5',
  borderRadius: '24px',
  padding: '16px',
}}
  className="w-full  sm:w-full md:max-w-[295px] h-[234px] border border-[#E5E5E5] rounded-[24px] p-4"
>
              <div style={{padding:"12px"}}>
              <h2 style={{ color: '#1f2937', fontWeight: 'bold', fontSize: '20px' }}>
  توفير الوقت والتوتر
</h2>
<p style={{ color: '#4b5563', fontSize: '16px', marginTop: '40px' }}>
  بدلاً من القلق من التنسيق والكتابة، ركّز على محتوى سيرتك وأنت مطمئن لأن التصميم محسوب بشكل احترافي.
</p>

              </div>
            
            </div>


            <div 

style={{
  border: '1px solid #E5E5E5',
  borderRadius: '24px',
  padding: '16px',
}}
  className="w-full  sm:w-full md:max-w-[295px] h-[234px] border border-[#E5E5E5] rounded-[24px] p-4"
>
              <div style={{padding:"12px"}}>
              <h2 style={{ color: '#1f2937', fontWeight: 'bold', fontSize: '20px' }}>
              تصدير ملفات بجودة عالية</h2>
<p style={{ color: '#4b5563', fontSize: '16px', marginTop: '40px' }}>
تحميل سيرتك بصيغ PDF متوافقة مع كل منصات التوظيف والجامعات.
</p>

              </div>
            
            </div>

            <div 

style={{
  border: '1px solid #E5E5E5',
  borderRadius: '24px',
  padding: '16px',
}}
  className="w-full  sm:w-full md:max-w-[295px] h-[234px] border border-[#E5E5E5] rounded-[24px] p-4"
>
              <div style={{padding:"12px"}}>
              <h2 style={{ color: '#1f2937', fontWeight: 'bold', fontSize: '20px' }}>
              إنشاء سيرة ذاتية احترافية بسهولة بدون خبرة مسبقة</h2>
<p style={{ color: '#4b5563', fontSize: '16px', marginTop: '40px' }}>
حتى لو لم تكن تعرف كيف تبدأ، الأداة تعطيك دليل واضح وخطوات بسيطة تجعل سيرتك جاهزة بسرعة.</p>

              </div>
            
            </div>


            </div>


            <div className="bg-[#167FFC]" style={{borderRadius:"24px", height:"250px", marginTop:"80px"}}>

              <div style={{padding:"40px"}}>
              <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
              اختر القالب الذي يناسبك
              </h2>
              <p
  style={{
    color: 'white',
    fontSize: '1rem', // 16px relative, but scalable
    marginTop: '40px',
    width: '90%',     // use percentage instead of fixed pixels
    maxWidth: '420px', // but limit max width on bigger screens
  }}
>

نوفر لك مجموعة متنوعة من القوالب المصممة بعناية لتناسب كل الأذواق وتلفت انتباه أصحاب العمل.</p>

</div>

  </div>


          </div>


          </div>





          <div className="  w-full flex flex-col items-center  " style={{marginTop:"80px"}}>
            <h2   style={{ fontSize: "24px", fontWeight:"600", color:"#323232",  }}
            >
            كيف يعمل؟
            </h2>
         <div className="flex flex-col lg:flex-row xl:flex-row gap-12 flex-wrap "
         
         style={{
          marginTop:"40px",
          padding:"20px"
         }}
         >

<div 

style={{
 
  padding: '16px',
}}
  className="w-full  sm:w-full md:max-w-[295px] h-[234px] border border-[#E5E5E5] rounded-[24px] p-4"
>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M8.75 13C9.34674 13 9.91903 13.2371 10.341 13.659C10.7629 14.081 11 14.6533 11 15.25V18.75C11 19.3467 10.7629 19.919 10.341 20.341C9.91903 20.7629 9.34674 21 8.75 21H5.25C4.65326 21 4.08097 20.7629 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V15.25C3 14.6533 3.23705 14.081 3.65901 13.659C4.08097 13.2371 4.65326 13 5.25 13H8.75ZM18.75 3C19.3467 3 19.919 3.23705 20.341 3.65901C20.7629 4.08097 21 4.65326 21 5.25V8.75C21 9.34674 20.7629 9.91903 20.341 10.341C19.919 10.7629 19.3467 11 18.75 11H15.25C14.6533 11 14.081 10.7629 13.659 10.341C13.2371 9.91903 13 9.34674 13 8.75V5.25C13 4.65326 13.2371 4.08097 13.659 3.65901C14.081 3.23705 14.6533 3 15.25 3H18.75Z" fill="#BBDAFF"/>
<path d="M8.75 3C9.34674 3 9.91903 3.23705 10.341 3.65901C10.7629 4.08097 11 4.65326 11 5.25V8.75C11 9.34674 10.7629 9.91903 10.341 10.341C9.91903 10.7629 9.34674 11 8.75 11H5.25C4.65326 11 4.08097 10.7629 3.65901 10.341C3.23705 9.91903 3 9.34674 3 8.75V5.25C3 4.65326 3.23705 4.08097 3.65901 3.65901C4.08097 3.23705 4.65326 3 5.25 3H8.75Z" fill="#167FFC"/>
<path opacity="0.3" d="M18.75 13C19.3467 13 19.919 13.2371 20.341 13.659C20.7629 14.081 21 14.6533 21 15.25V18.75C21 19.3467 20.7629 19.919 20.341 20.341C19.919 20.7629 19.3467 21 18.75 21H15.25C14.6533 21 14.081 20.7629 13.659 20.341C13.2371 19.919 13 19.3467 13 18.75V15.25C13 14.6533 13.2371 14.081 13.659 13.659C14.081 13.2371 14.6533 13 15.25 13H18.75Z" fill="#BBDAFF"/>
</svg>
<div style={{marginTop:"20px"}}>

<h2 style={{ color: '#484848', fontWeight: 'bold', fontSize: '20px' }}>اختر قالب السيرة الذاتية</h2>
<p className="text-[#575757] " style={{ fontSize: "12px", marginTop: "8px", fontWeight:"400"}}>ابدأ باختيار التصميم اللي يعجبك ويعكس شخصيتك المهنية.</p>
</div>

</div>

<div 

style={{
 
  padding: '16px',
}}
  className="w-full  sm:w-full md:max-w-[295px] h-[234px] border border-[#E5E5E5] rounded-[24px] p-4"
>
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 16H3.425L13.2 6.225L11.775 4.8L2 14.575V16ZM1 18C0.716667 18 0.479333 17.904 0.288 17.712C0.0966668 17.52 0.000666667 17.2827 0 17V14.575C0 14.3083 0.0500001 14.054 0.15 13.812C0.25 13.57 0.391667 13.3577 0.575 13.175L13.2 0.575C13.4 0.391667 13.621 0.25 13.863 0.15C14.105 0.0500001 14.359 0 14.625 0C14.891 0 15.1493 0.0500001 15.4 0.15C15.6507 0.25 15.8673 0.4 16.05 0.6L17.425 2C17.625 2.18333 17.7707 2.4 17.862 2.65C17.9533 2.9 17.9993 3.15 18 3.4C18 3.66667 17.954 3.921 17.862 4.163C17.77 4.405 17.6243 4.62567 17.425 4.825L4.825 17.425C4.64167 17.6083 4.429 17.75 4.187 17.85C3.945 17.95 3.691 18 3.425 18H1ZM12.475 5.525L11.775 4.8L13.2 6.225L12.475 5.525Z" fill="#167FFC"/>
</svg>

<div style={{marginTop:"20px"}}>

<h2 style={{ color: '#484848', fontWeight: 'bold', fontSize: '20px' }}> عبّئ معلوماتك </h2>
<p className="text-[#575757] " style={{ fontSize: "12px", marginTop: "8px", fontWeight:"400"}}>املأ النموذج بسهولة بالمعلومات المطلوبة: الاسم، الخبرات، التعليم، المهارات، وغيرها.       .</p>
</div>


</div>

<div 

style={{
  
  padding: '16px',
}}
  className="w-full  sm:w-full md:max-w-[295px] h-[234px] border border-[#E5E5E5] rounded-[24px] p-4"
>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 11.575C7.86667 11.575 7.74167 11.5543 7.625 11.513C7.50833 11.4717 7.4 11.4007 7.3 11.3L3.7 7.7C3.5 7.5 3.404 7.26667 3.412 7C3.42 6.73334 3.516 6.5 3.7 6.3C3.9 6.1 4.13767 5.996 4.413 5.988C4.68833 5.98 4.92567 6.07567 5.125 6.275L7 8.15V1C7 0.71667 7.096 0.479337 7.288 0.288004C7.48 0.0966702 7.71733 0.000670115 8 3.44827e-06C8.28267 -0.000663218 8.52033 0.0953369 8.713 0.288004C8.90567 0.48067 9.00133 0.718003 9 1V8.15L10.875 6.275C11.075 6.075 11.3127 5.979 11.588 5.987C11.8633 5.995 12.1007 6.09934 12.3 6.3C12.4833 6.5 12.5793 6.73334 12.588 7C12.5967 7.26667 12.5007 7.5 12.3 7.7L8.7 11.3C8.6 11.4 8.49167 11.471 8.375 11.513C8.25833 11.555 8.13333 11.5757 8 11.575ZM2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196666 15.0217 0.000666667 14.5507 0 14V12C0 11.7167 0.0960001 11.4793 0.288 11.288C0.48 11.0967 0.717333 11.0007 1 11C1.28267 10.9993 1.52033 11.0953 1.713 11.288C1.90567 11.4807 2.00133 11.718 2 12V14H14V12C14 11.7167 14.096 11.4793 14.288 11.288C14.48 11.0967 14.7173 11.0007 15 11C15.2827 10.9993 15.5203 11.0953 15.713 11.288C15.9057 11.4807 16.0013 11.718 16 12V14C16 14.55 15.8043 15.021 15.413 15.413C15.0217 15.805 14.5507 16.0007 14 16H2Z" fill="#167FFC"/>
</svg>

<div style={{marginTop:"20px"}}>
<h2 style={{ color: '#484848', fontWeight: 'bold', fontSize: '20px' }}>حمّل سيرتك بصيغة PDF   </h2>
<p className="text-[#575757] " style={{ fontSize: "12px", marginTop: "8px", fontWeight:"400"}}>بعد ما تكتمل، حمّل سيرتك بجودة عالية وابدأ التقديم على وظائف أحلامك.       .</p>
</div>

</div>

</div>
          </div>

        </div>


        <div className="  w-full flex flex-col   " style={{marginTop:"80px"}}>
        <h2 style={{ fontSize: "24px", fontWeight:"600", color:"#323232",textAlign:"center", marginBottom:"80px"  }}> الأسئلة الشائعة حول إنشاء السيرة الذاتية (CV)</h2>
<CollapsibleBasic />

</div>



      </div>


    </div>
  );
}


