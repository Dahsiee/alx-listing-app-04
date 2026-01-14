interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    location: string;
    price: number;
    imageUrl: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded shadow p-4">
      <img
        src={property.imageUrl}
        alt={property.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{property.name}</h2>
      <p className="text-sm text-gray-600">{property.location}</p>
      <p className="text-md font-semibold">${property.price}</p>
    </div>
  );
}
