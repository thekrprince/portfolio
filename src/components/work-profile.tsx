import Image from "next/image";

const WorkProfile = () => {
  return (
    <section className="mt-4 flex flex-col items-center">
      <h2 className="text-2xl">Companies I have worked for</h2>
      <div className="flex">
        <Image
          src="/walmart.png"
          alt="Walmart"
          width="80"
          height="80"
          className="m-2"
        />
        <Image
          src="/fractal.png"
          alt="Fractal"
          width="80"
          height="80"
          className="my-2"
        />
        <Image
          src="/wells-fargo.png"
          alt="Wells Fargo"
          width="80"
          height="80"
          className="m-2"
        />
        <Image
          src="/sap.png"
          alt="SAP"
          width="80"
          height="80"
          className="my-2"
        />
      </div>
    </section>
  );
};

export default WorkProfile;
