import { LinkCardTypes } from "@/types";
import Link from "next/link";

export default function LinkCard(props: LinkCardTypes) {
  const { url, title } = props;
  return (
    <span className="box-border mr-4 p-3 rounded-lg border-2 bg-opacity-10 bg-gray-600 dark:bg-opacity-100 hover:bg-transparent hover:text-pink-500 hover:border-pink-500 hover:cursor-pointer">
      <Link href={url} target="_blank">
        {title}
      </Link>
    </span>
  );
}
