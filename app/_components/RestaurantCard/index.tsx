import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

type RestaurantCardProps = {
  restaurant?: {
    title: string;
    location: string;
    cuisine: string;
    rating: string;
    reviewCount: number;
    imageUrl: string;
    // images: {data: {url: string}}[];
    images: any[];
  };
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant: { title, location, cuisine, rating, reviewCount, url, images },
}) => {
  console.log(images);
  const imageUrl = `${process.env.API_URL}${images?.data[0]?.attributes.url}`;
  console.log(imageUrl);
  return (
    <Link href={`/restaurants/${url}`} className={styles.card}>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={imageUrl}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <h3 className="text-black font-bold">{title}</h3>
            <p className="text-black text-tiny">📍{location}</p>
            <p className="text-black text-tiny">{cuisine}</p>
          </div>
          {rating ? (
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              {rating} / 5
            </Button>
          ) : null}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
