import LinkCard from "@/components/link-card";
import { links } from "../../data/links";

export default function Links() {
  return (
    <div className="max-w-2xl mx-3 md:mx-auto mb-8">
      <h1 className="text-3xl font-bold">🔗Links to find me and my work!</h1>
      <section className="my-10">
        {links.personalLinks.map((personal, id) => (
          <LinkCard url={personal.url} title={personal.title} key={id} />
        ))}
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mt-6 mb-6">Social Media</h2>
        {links.socialMedia.map((social, id) => (
          <LinkCard url={social.url} title={social.title} key={id} />
        ))}
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mt-6 mb-6">Code</h2>
        {links.codeSiteLinks.map((code, id) => (
          <LinkCard url={code.url} title={code.title} key={id} />
        ))}
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mt-6 mb-6">Publications</h2>
        {links.publicationLinks.map((publication, id) => (
          <LinkCard url={publication.url} title={publication.title} key={id} />
        ))}
      </section>
    </div>
  );
}
