import Image from "next/image";

export default function Summary() {
  return (
    <section className="flex flex-col items-center p-4 bg-stone-900 rounded-2xl">
      <Image
        src="/pfp.png"
        alt="my-pic"
        width="84"
        height="84"
        className="border-4 border-decoration-pink-500 rounded-full"
      />
      <h2 className="m-2 sm:m-3 text-4xl font-bold">Kumar Prince</h2>
      <div className="m-2">
        <p>Tinkers with Code!⚡</p>
        <p className="mt-1">
          Software Engineer 3 @ <span className="text-pink-500">Walmart</span>.
          ♥️ Frontend. Tech Enthusiast. Public Speaker.
        </p>
      </div>
    </section>
  );
}
