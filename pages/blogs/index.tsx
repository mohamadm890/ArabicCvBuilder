import { getAllSlugs, getPostData } from "@/lib/posts";
import PostCard from "../components/postCard";
import Header from "../components/header";

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
  );
}
