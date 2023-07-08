import moment from "moment";
import Link from "next/link";

type Props = {
  post: Blogpost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = moment(date).format("DD-MM-YYYY");
  return (
    <li className="mt-4 text-2xl dark:text-white/90" key={id}>
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-xs mt-1">{formattedDate}</p>
    </li>
  );
}
