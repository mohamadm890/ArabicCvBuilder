import dynamic from 'next/dynamic';
import NewCvButton from '../components/NewCvButton';
import Head from 'next/head';

// Dynamically import the Card component, disable SSR (server-side rendering)
const Card = dynamic(() => import('../components/cardTemplate'), { ssr: false });

const templates = [
  { id: 1, src: "/temp1.webp" },
  { id: 2, src: "/temp2.webp" },
];

export default function TemplatesPage() {
 

  return (
   <>
     <Head>
    <title>قوالب سيرة ذاتية جاهزة للتعبئة والتعديل - صمّم سيرتك بسهولة</title>
    <title>قوالب سيرة ذاتية للطلاب قابلة للتعديل والتحميل PDF</title>
  <meta name="description" content="أنشئ سيرتك الذاتية بسهولة كطالب أو حديث تخرج باستخدام قوالب قابلة للتعديل مباشرة وصدّرها كملف PDF احترافي." />
  <meta name="keywords" content="قوالب سيرة ذاتية للطلاب, سيرة ذاتية جاهزة للتعديل, تصميم CV للطلاب, كتابة سيرة ذاتية, تحميل سيرة ذاتية PDF" />
    <link rel="canonical" href={`https://harbaacv.com/templates`} />
  </Head>
    
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="flex flex-col 
                w-full           /* default: full width on smallest screens */
                sm:w-[480px]     /* small screens (≥640px) */
                md:w-[768px]     /* medium screens (≥768px) */
                lg:w-[952px]     /* large screens (≥1024px) */
                xl:w-[1100px]  
                p-4">

        {/* Replace Chakra Flex with div */}
        <div className="flex justify-between items-center " style={{ padding: "16px" }}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.2224 15.1869L15.0463 17.1513C15.6422 17.5658 16.4583 17.1394 16.4583 16.4134C16.4583 15.7117 17.2267 15.2806 17.8256 15.6464L20.3763 17.2043C21.0427 17.6113 21.8975 17.1318 21.8975 16.3509V15.8113C21.8975 15.259 22.3487 14.8201 22.894 14.7323C25.481 14.3161 27.1616 12.3487 27.8457 11.1014C27.9524 10.9069 27.9733 10.6763 27.9191 10.4612C26.0786 3.15015 20.1458 0.594935 16.6279 0.0916755C16.1034 0.0166348 15.6624 0.44166 15.6624 0.97155C15.6624 1.49948 15.2221 1.92073 14.6943 1.91277C4.25884 1.75551 4.30879 5.61761 1.73285 8.30542C-0.920389 11.0739 -1.84902 25.6084 8.8966 27.6847C16.7718 29.2064 19.7557 24.881 20.439 21.945C20.5429 21.4988 20.2697 21.0673 19.8401 20.9082L17.408 20.0078C16.8855 19.8143 16.311 20.0906 16.0775 20.5965C14.3082 24.4307 11.4876 23.8824 8.8966 21.1788C6.87524 19.0697 9.28433 16.4975 11.1357 15.1765C11.4607 14.9447 11.8947 14.959 12.2224 15.1869Z" fill="#167FFC"/>
              <ellipse cx="19.6008" cy="7.58341" rx="2.8" ry="2.91667" fill="white"/>
              <ellipse cx="20.1591" cy="6.99992" rx="1.12" ry="1.16667" fill="#167FFC"/>
            </svg>
          </div>

          <NewCvButton />

        </div>

        <div className="pt-10 flex flex-col items-center pb-10 px-4 sm:px-10 lg:px-20" style={{ marginTop: "60px" }}>
          <div className="w-[320px] mx-auto">
            <p className="font-bold mb-4 text-[#373738] text-center" style={{ fontWeight: '800', fontSize:"18px" }}>
              أول خطوة نحو وظيفة أحلامك تبدأ من هنا. اختر القالب الذي يبرزك بين الآخرين.
            </p>
            <p className="text-[#8D8D8D] text-center" style={{marginTop:"12px", fontSize:"16px"}}>
              اجعل سيرتك الذاتية تعبر عنك بأفضل شكل ممكن بخطوة بسيطة وسريعة.
            </p>
          </div>

          <div className="flex flex-row flex-wrap gap-4 px-20 justify-center" style={{marginTop:"24px", padding:"60px"}}>
            {templates?.map((item) => (
              <Card
                name={item.src}
                id={item.id}
                key={item.id}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
     </>
  );
}

