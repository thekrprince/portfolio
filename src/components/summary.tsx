import Image from "next/image";

export default function Summary() {
  return (
    <section className="flex flex-col items-center p-4">
      <Image src="/pfp.png" alt="my-pic" width="84" height="84" />
      <h2 className="m-2 sm:m-3 text-4xl font-bold">Hi, This is Prince </h2>
      <p className="m-2">
        A passionate Fullstack developer with expertise in MERN stack and a
        knack for creating captivating Frontend experiences. Currently a
        Software Engineer 3 at Walmart. When not coding, you can find him
        strumming a guitar, reading books, writing tech blogs, and sharing
        stuffs on Twitter.
      </p>
    </section>
  );
}
