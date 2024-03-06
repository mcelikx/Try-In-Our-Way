import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
type RestaurantCardProps = {
  restaurant?: {
    name: string;
    location: string;
    cuisine: string;
    rating: string;
    reviewCount: number;
    imageUrl: string;
  };
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant: { name, location, cuisine, rating, reviewCount, imageUrl, url },
}) => {
  return (
    <Link href={`/restaurants/${url}`} className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.cardImage} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardLocation}>{location}</p>
        <p className={styles.cardCuisine}>{cuisine}</p>
        <div className={styles.cardRating}>
          <span>{rating}</span>/5
        </div>
        <p className={styles.cardReviewCount}>{reviewCount} reviews</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
