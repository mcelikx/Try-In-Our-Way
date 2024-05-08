import Map from "@/app/_components/Map";
import Image from "next/image";
import styles from "./styles.module.css";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
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
  console.log(restaurant);
  return (
    <div className={styles.root}>
      <div className="bg-white shadow-md rounded-lg p-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {restaurant.title}
          </h1>
          <div>
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700">
              <span className="sr-only">Save</span>
              {/* Icon placeholder */}
            </button>
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700">
              <span className="sr-only">Share</span>
              {/* Icon placeholder */}
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <div className="flex items-center">
            <span className="text-green-500">★★★★★</span>
            <span>({restaurant.reviewCount})</span>
          </div>
          {/* <span className="text-gray-400">|</span>
          <span>#7 of 6,831 Restaurants in Singapore</span> */}
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <span>$$$$</span> · <span>{restaurant.cuisine}</span>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <address>{restaurant.map.address}</address>
        </div>
        <div className="flex space-x-4 mt-2 text-sm">
          <a
            href={`tel:${restaurant.telephone}`}
            className="text-blue-500 hover:underline"
          >
            {restaurant.telephone}
          </a>
          <Link target="_blank" href={`${restaurant.menuUrl}`}>
            <p className="text-blue-500 hover:underline">Menu</p>
          </Link>
          <span className="text-gray-400">|</span>
          <span>Closed now</span>
        </div>
      </div>

      <div className={styles.restaurantBody}>Restaurant Body</div>
    </div>
  );
  // return (
  //   <div className="container mx-auto px-4 py-8">
  //     <h1 className="text-3xl font-bold mb-4">{restaurant.title}</h1>
  //     <div className=" mb-4">
  //       <Image
  //         src={restaurantImage}
  //         alt={restaurant.images.data[0].attributes.caption || ""}
  //         width={300}
  //         height={200}
  //       />
  //     </div>
  //     <div className="mb-4">
  //       <p>
  //         <span className="font-bold">Location:</span> {restaurant.location}
  //       </p>
  //       <p>
  //         <span className="font-bold">Cuisine:</span>{" "}
  //         {restaurant.cuisine || "Not specified"}
  //       </p>
  //       {/* Diğer bilgiler buraya eklenmeli */}
  //     </div>

  //     <a
  //       href={restaurant.url}
  //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  //     >
  //       Visit Restaurant
  //     </a>
  //     {/* <Map address={restaurant.map} /> */}
  //     <iframe
  //       width="100%"
  //       height="450"
  //       style={{ border: 0 }}
  //       loading="lazy"
  //       src={mapSrc}
  //     ></iframe>
  //   </div>
  // );
};

export default RestaurantPage;
