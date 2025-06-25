import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = [
  { name: "Singers", color: "bg-indigo-100" },
  { name: "Dancers", color: "bg-pink-100" },
  { name: "Speakers", color: "bg-yellow-100" },
  { name: "DJs", color: "bg-green-100" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="text-center py-20 px-4 bg-gradient-to-b from-indigo-100 to-white">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Welcome to Artistly</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Discover and connect with talented performers for your next event. Find singers, dancers, DJs, and more!
        </p>
        <Link href="/artists" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-500 transition">
          Explore Artists
        </Link>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-12 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <div key={i} className={`rounded-xl p-6 text-center shadow-md ${cat.color}`}>
            <h3 className="text-xl font-semibold text-gray-800">{cat.name}</h3>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
