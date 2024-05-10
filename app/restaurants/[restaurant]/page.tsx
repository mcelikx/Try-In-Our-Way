import Map from "@/app/_components/Map";
import Image from "next/image";
import classes from "./page.module.css";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "@/public/Icon/HearthIcon";
import Ratings from "@/app/_components/Ratings/Ratings";

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
    <div className={classes.root}>
      <div className={classes.restaurantDetailInfo}>
        <div className={classes.titleAndActions}>
          <h1>{restaurant.title}</h1>
          <div className={classes.actions}>
            <div className={classes.action}>
              <Button isIconOnly color="danger" aria-label="Like">
                <HeartIcon />
              </Button>
              Save
            </div>
            <Divider orientation="vertical" />
            <div className={classes.action}>
              <Button isIconOnly color="danger" aria-label="Like">
                <HeartIcon />
              </Button>
              Review
            </div>
            <Divider orientation="vertical" />
            <div className={classes.action}>
              <Button isIconOnly color="danger" aria-label="Like">
                <HeartIcon />
              </Button>
              Share
            </div>
          </div>
        </div>
        <div className={classes.restaurantRating}>
          <Ratings />
          {restaurant.reviewCount}
          <Divider orientation="vertical" />
          {restaurant.map.address}
          <Divider orientation="vertical" />
          {restaurant.cuisine}
        </div>
      </div>
      <div className={classes.restaurantInformation}>
        <div className={classes.reserveTable}>Reserve a table</div>
        <div className={classes.restaurantImages}>Restaurant Images</div>
        <div className={classes.ratingAndReview}>Ratings and reviews</div>
        <div className={classes.details}>Details</div>
        <div className={classes.location}>Location and contact</div>
      </div>
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
