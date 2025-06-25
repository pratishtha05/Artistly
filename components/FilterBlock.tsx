'use client'
import { useState } from "react";

type Props = {
  filters: {
    categories: string[];
    locations: string[];
  };
  onFilterChange: (filters: { category: string; location: string }) => void;
};

export default function FilterBlock({ filters, onFilterChange }: Props) {
  const [selectedCategory, setCategory] = useState("");
  const [selectedLocation, setLocation] = useState("");

  const applyFilters = () => {
    onFilterChange({ category: selectedCategory, location: selectedLocation });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <select
        value={selectedCategory}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        {filters.categories.map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>

      <select
        value={selectedLocation}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Locations</option>
        {filters.locations.map((loc, idx) => (
          <option key={idx} value={loc}>{loc}</option>
        ))}
      </select>

      <button
        onClick={applyFilters}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
      >
        Apply Filters
      </button>
    </div>
  );
}
