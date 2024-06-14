import Map from "@/app/_components/Map";
import Image from "next/image";
import classes from "./page.module.css";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "@/public/Icon/HearthIcon";
import Ratings from "@/app/_components/Ratings/Ratings";
import Card from "@/app/_components/Card/Card";

import ReserveTable from "@/app/_components/ReserveTable/ReserveTable";
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
  restaurant?.images?.data?.map((image) => {
    console.log(image.attributes.url);
    return image.attributes.url;
  });
  console.log(restaurant.images);
  const restaurantImage = `/api${restaurant.images.data[0].attributes.url}`;

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
  &q=${restaurant.title},${restaurant.map.address}`;

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
        <div className={classes.reserveTable}>
          <Card>
            <h1>Reserve a table</h1>
            <ReserveTable />
          </Card>
        </div>
        <div className={classes.restaurantImages}>
          {" "}
          <Card>
            <h1>Restaurant Images</h1>
            <div>
              <Image
                src={restaurantImage}
                alt={restaurant.images.data[0].attributes.caption || ""}
                width={300}
                height={200}
              />
            </div>
          </Card>
        </div>
        <div className={classes.ratingAndReview}>
          {" "}
          <Card>
            <h1>Ratings and Reviews</h1>
          </Card>
        </div>
        <div className={classes.details}>
          {" "}
          <Card>
            <div>
              <h5>Details</h5>
              <div className={classes.detailsList}>
                <ul>
                  <li>
                    <strong>Location:</strong> {restaurant.location}
                  </li>
                  <li>
                    <strong>Cuisine:</strong>{" "}
                    {restaurant.cuisine || "Not specified"}
                  </li>
                  <li>
                    <strong>Phone:</strong> {restaurant.phone}
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <Link href={restaurant.url}>{restaurant.url}</Link>
                  </li>
                  <li>
                    <strong>Opening Hours:</strong> {restaurant.openingHours}
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
        <div className={classes.location}>
          {" "}
          <Card>
            <h1>Location and contact</h1>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
