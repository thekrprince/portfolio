import Image from "next/image";

export default function Summary() {
  return (
    <section className="flex justify-center">
      <Image src="/pfp.png" alt="my-pic" width="64" height="64" />
      <p className="self-end">
        Hey, I am Kumar Prince (call me Prince). I am working in Walmart
        currently and have so much experience.
      </p>
    </section>
  );
}
