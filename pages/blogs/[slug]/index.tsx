import { getAllSlugs, getPostData } from "@/lib/posts";
import Header from "@/pages/components/header";
import Head from 'next/head'



export const getStaticPaths = async () => {
  const slugs = getAllSlugs();
  const paths = slugs.map(({ params }) => ({
    params: {
      slug: typeof params.slug === 'string' 
        ? params.slug 
        : JSON.stringify(params.slug) // or fix this properly in getAllSlugs
    }
  }));
  console.log(paths);
  return {
    paths,
    fallback: false, // or true/‘blocking’ depending on how you want to handle non-existent slugs
  };
}

export const getStaticProps = async ({ params }: { params: any }) => {
    const post = await getPostData(params.slug);
    console.log(post);
    return {
      props: { post }
    };
  }
  
  type BlogPostProps = {
    post: {
      frontmatter: {
        slug: any;
        keywords: any;
        description: string;
        title: string;
      };
      contentHtml: string;
    };
  };

export default function BlogPost({ post }: BlogPostProps) {
    return (
<>
<Head>
        <title>{`${post.frontmatter.title}`}</title>
        <meta name="description" content={post.frontmatter.description || "Default description"} />
        <meta name="keywords" content={post.frontmatter.keywords?.join(", ") || ""} />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.frontmatter.description || "Default description"} />
        <link rel="canonical" href={`https://harbaacv.com/blogs/${post.frontmatter.slug}`} />
        </Head>


      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
  <Header />
  <div
    className="w-full max-w-[520px] flex flex-col items-center"
    style={{  marginTop:"48px" }}  // align children left inside this container
  >

    <div
      className="article"
      style={{
        fontSize: "1.125rem",
        lineHeight: "1.8",
        color: "#333",
      }}
      dangerouslySetInnerHTML={{ __html: post.contentHtml }}
    />
  </div>
</div>
</>
    );
  }
  

