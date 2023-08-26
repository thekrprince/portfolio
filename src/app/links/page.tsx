import LinkCard from "@/components/link-card";
import { links } from "../../data/links";

export default function Links() {
  return (
    <div className="max-w-2xl mx-3 md:mx-auto mb-8">
      <h1 className="text-3xl font-bold">Links to find me!</h1>
      <section>
        <h2 className="text-xl font-bold mt-6 mb-4">Social Media</h2>
        {links.socialMedia.map((link, id) => (
          <LinkCard url={link.url} title={link.title} key={id} />
        ))}
      </section>
      <section></section>
      <section></section>
    </div>
  );
}
