'use client'
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardTable from "@/components/DashboardTable";

type Artist = {
  id: number;
  name: string;
  category: string[];
  location: string;
  feeRange: string;
};

export default function DashboardPage() {
  const [data, setData] = useState<Artist[]>([]);

  useEffect(() => {
    fetch("/data/manager-artists.json")
      .then((res) => res.json())
      .then((artists) => setData(artists));
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Manager Dashboard</h1>
        <DashboardTable data={data} />
      </div>
      <Footer />
    </main>
  );
}
