import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/blogposts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((filename) => {
    const id = filename.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResulst = matter(fileContents);

    const blogpost: Blogpost = {
      id,
      title: matterResulst.data.title,
      date: matterResulst.data.date,
    };

    return blogpost;
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResulst = matter(fileContents);
  const processedContent = await remark()
    //@ts-ignore
    .use(remarkHtml)
    .process(matterResulst.content);

  const contentHTML = processedContent.toString();

  const blogPostWithHTML: Blogpost & { contentHTML: string } = {
    id,
    title: matterResulst.data.title,
    date: matterResulst.data.date,
    contentHTML,
  };

  return blogPostWithHTML;
}
