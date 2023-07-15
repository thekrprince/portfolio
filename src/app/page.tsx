"use client";

import NavBar from "@/components/navbar";
import Summary from "@/components/summary";
import WorkProfile from "@/components/work-profile";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto">
      <Summary />
      <NavBar />
    </main>
  );
}
