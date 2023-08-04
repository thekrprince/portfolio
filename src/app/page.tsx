"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Summary from "@/components/summary";

export default function Home() {
  return (
    <main className="max-w-2xl mx-3 md:mx-auto mb-8">
      <Summary />
      <NavBar />
      <Footer />
    </main>
  );
}
