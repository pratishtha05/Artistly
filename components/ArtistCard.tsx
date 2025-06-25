type Artist = {
  id: number;
  name: string;
  category: string[];
  location: string;
  feeRange: string;
};

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 space-y-2">
      <h3 className="text-lg font-semibold">{artist.name}</h3>
      <p className="text-sm text-gray-500">{artist.category.join(', ')}</p>
      <p className="text-sm">{artist.location}</p>
      <p className="text-sm font-medium text-indigo-600">{artist.feeRange}</p>
      <button className="bg-indigo-600 text-white px-4 py-2 mt-2 rounded hover:bg-indigo-500">Ask for Quote</button>
    </div>
  );
}
