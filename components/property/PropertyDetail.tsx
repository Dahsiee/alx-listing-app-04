interface PropertyDetailProps {
  property: {
    id: string;
    name: string;
    location: string;
    price: number;
    description: string;
    imageUrl: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="p-6">
      <img
        src={property.imageUrl}
        alt={property.name}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{property.name}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-lg font-semibold mt-2">${property.price}</p>
      <p className="mt-4">{property.description}</p>
    </div>
  );
}
