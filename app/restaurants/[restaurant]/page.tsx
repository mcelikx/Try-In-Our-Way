import Map from "@/app/_components/Map";
import Image from "next/image";

async function getData({ restaurantId }: { restaurantId: string }) {
  const res = await fetch(
    `${process.env.API_URL}/api/restaurants?filters[url][$eq]=${restaurantId}&populate=*`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const RestaurantPage = async ({
  params,
}: {
  params: {
    restaurant: string;
    slug: string;
  };
}) => {
  const data = await getData({ restaurantId: params.restaurant });

  const restaurant = data?.data[0]?.attributes;
  const restaurantImage = `/api${restaurant.images.data[0].attributes.url}`;
  console.log(restaurantImage);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
  &q=${restaurant.title},${restaurant.map.address}`;
  // console.log(data);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{restaurant.title}</h1>
      <div className=" mb-4">
        <Image
          src={restaurantImage}
          alt={restaurant.images.data[0].attributes.caption || ""}
          width={300}
          height={200}
        />
      </div>
      <div className="mb-4">
        <p>
          <span className="font-bold">Location:</span> {restaurant.location}
        </p>
        <p>
          <span className="font-bold">Cuisine:</span>{" "}
          {restaurant.cuisine || "Not specified"}
        </p>
        {/* Diğer bilgiler buraya eklenmeli */}
      </div>
      <a
        href={restaurant.url}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Visit Restaurant
      </a>
      {/* <Map address={restaurant.map} /> */}
      <iframe
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        src={mapSrc}
      ></iframe>
    </div>
  );
};

export default RestaurantPage;
