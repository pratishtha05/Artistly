'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import { useEffect, useState } from "react";

// Define the shape of each artist object
type Artist = {
  id: number;
  name: string;
  category: string[];
  location: string;
  feeRange: string;
};

export default function ArtistListPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);
  const [filters, setFilters] = useState({
    categories: [] as string[],
    locations: [] as string[],
  });

  useEffect(() => {
    fetch("/data/artists.json")
      .then((res) => res.json())
      .then((data: Artist[]) => {
        setArtists(data);
        setFilteredArtists(data);

        const categories = Array.from(
          new Set(data.flatMap((a) => a.category))
        );
        const locations = Array.from(
          new Set(data.map((a) => a.location))
        );

        setFilters({ categories, locations });
      });
  }, []);

  const handleFilterChange = ({
    category,
    location,
  }: {
    category: string;
    location: string;
  }) => {
    let filtered = [...artists];

    if (category) {
      filtered = filtered.filter((a) => a.category.includes(category));
    }

    if (location) {
      filtered = filtered.filter((a) => a.location === location);
    }

    setFilteredArtists(filtered);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Browse Artists</h1>

        <FilterBlock filters={filters} onFilterChange={handleFilterChange} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-black">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
