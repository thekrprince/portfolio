import { blogs } from "../../data/blogs";

export default function Content() {
  return (
    <div className="mt-8">
      <p className="mb-8">
        As much as I like to learn new technologies and read about it. Love to
        share the knowledge as well through my content.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Talks</h2>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Blogs</h2>
        {blogs.map((blog, idx) => {
          return (
            <div key={idx} className="my-2">
              <a
                href={blog.link}
                target="_blank"
                className="text-pink-600 blog-links"
              >
                {blog.title}
              </a>
              <p className="opacity-75">{blog.date}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
