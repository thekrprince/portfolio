import Image from "next/image";

export default function About() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Bonjour! 👋</h2>
      <p className="mt-2">
        I&#39;m Prince. I am a Software Developer proficient in developing Web
        apps and Mobile apps!
      </p>
      <p className="mt-6">
        I eat🍴JavaScript for Breakfast, Lunch and Dinner. I keep exploring and
        learning new technology. I do believe in Community Learning so I keep
        going to the meetup and conferences to meet amazing like-minded people.
        Have presented to some meetup as well.
      </p>
      <figure className="my-8">
        <Image
          src="/images/me-giving-talk.jpeg"
          alt="me-presenting"
          width="320"
          height="480"
          className="m-auto rounded-lg"
        />
        <figcaption className="text-center mt-2 text-gray-400 text-sm">
          Prince presenting at JSLovers Meetup 2023 in Bengaluru, India
        </figcaption>
      </figure>
      <p className="mt-6">
        I&#39;ve been fortunate to work with some top-notch companies such as
        Walmart, Fractal Analytics, Wells Fargo, and SAP. I&#39;m currently
        working at Walmart as a Frontend Developer where I build web
        applications for Walmart Pharmacy division.
      </p>
      <p className="mt-6">
        Apart than coding, I love to Travel, Riding Bike, Cooking, Playing
        Indoor-Outdoor games & trying different experiences.
      </p>
    </div>
  );
}
