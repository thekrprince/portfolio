import Image from "next/image";
import { feedData } from "../../data/feed";

export default function Card() {
  return (
    <>
      {feedData.map((fd, idx) => {
        return (
          <div key={idx} className="my-8">
            <div className="flex items-center my-2">
              <Image
                src="/images/pfp.png"
                alt=""
                height="40"
                width="40"
                className="inline"
              />
              <p className="ml-2 font-bold">{fd.title}</p>•
              <p className="ml-2 text-sm opacity-75">{fd.date}</p>
            </div>
            <div className="ml-12">
              <h2>{fd.article.heading}</h2>
              <p>{fd.article.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
