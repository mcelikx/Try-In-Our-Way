import RestaurantCard from "../RestaurantCard";
import styles from "./style.module.css";
async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/restaurants?populate=*`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const NewLocalRestaurants: React.FC = async () => {
  const data = await getData();

  const restaurants = data?.data;

  return (
    <div>
      <h2>Explore our restaurant guide to Singapore</h2>
      <div className={styles.restaurants}>
        {restaurants?.map((restaurant: any, index: number) => {
          const restaurantInfo = restaurant.attributes;
          return <RestaurantCard key={index} restaurant={restaurantInfo} />;
        })}
      </div>
    </div>
  );
};
export default NewLocalRestaurants;
