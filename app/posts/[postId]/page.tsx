import { getPostData, getSortedPostsData } from "@/src/lib/posts";
import { notFound } from "next/navigation";
import moment from "moment";
import Link from "next/link";

type Params = {
  params: {
    postId: string;
  };
};

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: Params) {
  const posts = getSortedPostsData();
  const { postId } = params;
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHTML } = await getPostData(postId);
  const pubDate = moment(date).format("DD-MM-YYYY");
  return (
    <main className="px-6 mt-20 prose porse-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4">{title}</h1>
      <p className="text-xs">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHTML }} />
      </article>
      <p>
        <Link href={"/"}> Back Home</Link>
      </p>
    </main>
  );
}
