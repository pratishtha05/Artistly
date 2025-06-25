type Artist = {
  id: number;
  name: string;
  category: string[];
  location: string;
  feeRange: string;
};

export default function DashboardTable({ data }: { data: Artist[] }) {
  if (!data || data.length === 0) {
    return <p className="text-gray-600">No artist submissions found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3 text-left">Name</th>
            <th className="border p-3 text-left">Category</th>
            <th className="border p-3 text-left">City</th>
            <th className="border p-3 text-left">Fee</th>
            <th className="border p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist) => (
            <tr key={artist.id}>
              <td className="border p-3">{artist.name}</td>
              <td className="border p-3">{artist.category.join(", ")}</td>
              <td className="border p-3">{artist.location}</td>
              <td className="border p-3">{artist.feeRange}</td>
              <td className="border p-3">
                <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-500">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
