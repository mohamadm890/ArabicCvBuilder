import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  console.log(fileNames);
  return fileNames.map((file) => ({
    params: { slug: file.replace(/\.md$/, '') },
  }));
}


export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  console.log(fullPath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString(); 

  return {
    slug,
    frontmatter: data,
    contentHtml,
  };
}
