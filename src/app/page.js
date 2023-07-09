import Navbar from "@/components/navbar";
import Summary from "@/components/summary";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white dark:bg-zinc-900 max-w-2xl mx-auto">
      <Summary />
    </main>
  );
}
