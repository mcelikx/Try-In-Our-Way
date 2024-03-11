import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
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
      <Image
        width={300}
        height={200}
        src={imageUrl}
        alt={title}
        className={styles.cardImage}
      />
      <div className={styles.cardBody}>
        {title ? <h3 className={styles.cardTitle}>{title}</h3> : null}

        {location ? <p className={styles.cardLocation}>{location}</p> : null}
        {cuisine ? <p className={styles.cardCuisine}>{cuisine}</p> : null}

        {rating ? (
          <div className={styles.cardRating}>
            <span>{rating}</span>/5
          </div>
        ) : null}
        {reviewCount ? (
          <p className={styles.cardReviewCount}>{reviewCount} reviews</p>
        ) : null}
      </div>
    </Link>
  );
};

export default RestaurantCard;
