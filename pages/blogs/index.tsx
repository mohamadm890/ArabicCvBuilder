import { getAllSlugs, getPostData } from "@/lib/posts";
import PostCard from "../components/postCard";
import Header from "../components/header";
import Head from 'next/head';

export const getStaticProps = async () => {
  const slugs = getAllSlugs();
  console.log("slugs:", slugs);
  const posts = await Promise.all(slugs.map((slug) => getPostData(slug.params.slug)));
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
type BlogPostProps = {
  posts: {
    slug: string;
    frontmatter: {
      title: string;
    };
    contentHtml: string;
  }[];
};


export default function Blog({ posts }: BlogPostProps) {
  return (
    <>
     <Head>
        <title>مقالات ونصائح لكتابة سيرة ذاتية احترافية | HarbaaCV</title>
        <meta
          name="description"
          content="اكتشف أفضل المقالات والنصائح لكتابة سيرة ذاتية احترافية تزيد من فرصك في الحصول على وظيفة. تعلم كيف تكتب سيرة ذاتية ناجحة للطلاب والمبتدئين."
        />
        <meta
          name="keywords"
          content="مقالات كتابة السيرة الذاتية, نصائح كتابة السيرة الذاتية, كيف تكتب سيرة ذاتية احترافية, كتابة السيرة الذاتية للطلاب, نصائح لعمل سيرة ذاتية ناجحة, كيفية كتابة سيرة ذاتية تزيد فرص التوظيف, أفضل طرق كتابة السيرة الذاتية, أمثلة على السيرة الذاتية الناجحة, تعلم كتابة سيرة ذاتية احترافية, مقالات عن كتابة السيرة الذاتية, سيرة ذاتية للطلاب الجدد, سيرة ذاتية للمبتدئين, كتابة CV بالعربية"
        />
    <link rel="canonical" href={`https://harbaacv.com/blogs`} />
    </Head>
    <div className="min-h-screen  bg-white p-8">
      <div className="flex flex-col  w-full">
      <Header />
      <div style={{padding: "20px"}} className="flex flex-col items-center">
      <div className="w-full max-w-[440px] mx-auto text-center px-4 py-8">
  <h1 style={{fontSize:"18px", fontWeight:"800", color:"#4A4A4A"}} className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
    مقالات ونصائح لكتابة سيرة ذاتية احترافية
  </h1>
  <p className="text-[12px] md:text-lg text-[#B2B2B2] leading-relaxed">
    اكتشف أفضل الطرق لكتابة سيرة ذاتية تبرز مهاراتك وتزيد من فرصك في الحصول على وظيفة.
    ستجد هنا مقالات مميزة ونصائح عملية من خبراء التوظيف.
  </p>
</div>

     
      <div className="lg:w-[900px] xl:w-[900px] md:w-[520px] w-full flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-center gap-12 " style={{marginTop:"40px"}}>
       
      {posts?.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
     
      

      </div>
      </div>

      </div>
     
   
    </div>
    </>
  );
}
