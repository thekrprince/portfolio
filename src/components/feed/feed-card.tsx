import Image from "next/image";
import { feedData } from "../../data/feed";

export default function Card() {
  return (
    <>
      {feedData.map((fd, idx) => {
        return (
          <div key={idx} className="flex p-4 mb-4 rounded-lg feed-card">
            <div>
              <Image src={fd.iconImgUrl} alt="" height="50" width="50" />
            </div>
            <div className="ml-2">
              <span className="font-bold">{fd.title}</span>
              <span className="mx-2">•</span>
              <span className="text-sm opacity-75">{fd.date}</span>
              <div className="my-1 p-2 bg-gray-500 w-fit rounded-full text-xs font-bold">
                {fd.feeling}
              </div>
              <section>
                {fd.article.heading && (
                  <h2 className="text-2xl font-bold">{fd.article.heading}</h2>
                )}
                <p>{fd.article.description}</p>
              </section>
              {fd.photoUrl && (
                <Image
                  src={fd.photoUrl}
                  alt="Prince at workstation"
                  width="615"
                  height="412"
                  className="my-2 rounded-lg"
                />
              )}
              {fd.videoUrl && (
                <video
                  width="630"
                  height="412"
                  controls
                  className="border border-pink-100 my-2"
                >
                  <source src={fd.videoUrl} />
                </video>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
