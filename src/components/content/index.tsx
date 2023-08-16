import Link from "next/link";
import { blogs } from "../../data/blogs";
import { talksData } from "../../data/talks";

export default function Content() {
  return (
    <div className="mt-8">
      <p className="mb-8">
        As much as I like to learn new technologies and read about it. Love to
        share the knowledge as well through my content.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Talks</h2>
        {talksData.map((talk, idx) => {
          return (
            <div key={idx} className="my-2">
              <Link
                href={talk.slideLink}
                target="_blank"
                className="text-pink-600 hover:underline hover:decoration-2"
              >
                {talk.title}
              </Link>
              <p className="opacity-75">
                {`${talk.meetupName} - ${talk.date}`}
              </p>
            </div>
          );
        })}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Blogs</h2>
        {blogs.map((blog, idx) => {
          return (
            <div key={idx} className="my-2">
              <Link
                href={blog.link}
                target="_blank"
                className="text-pink-600 hover:underline hover:decoration-2"
              >
                {blog.title}
              </Link>
              <p className="opacity-75">{blog.date}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
