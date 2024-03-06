import RestaurantCard from "../RestaurantCard";
import styles from "./style.module.css";
const NewLocalRestaurants: React.FC = () => {
  const restaurants = [
    {
      name: "Anatolia Restaurant",
      location: "Singapore, Arab Street",
      cuisine: "Turkish, Lebanese, Middle Eastern Cuisine",
      rating: "4.9",
      reviewCount: 976,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8lFlcdU_Jg-cjm6pUw70kLj77sRi3eN53w&usqp=CAU",
      url: "anatolia-restaurant-sg",
    },
    {
      name: "Cappadocia Restaurant",
      location: "Singapore, Clarke Quay",
      cuisine: "Turkish & Lebanese Cuisine",
      rating: "4.7",
      reviewCount: 4567,
      imageUrl:
        "https://static.wixstatic.com/media/186b8a_115c783a4cbe468eb0e3c1798c82280bf000.jpg/v1/fill/w_912,h_1068,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/186b8a_115c783a4cbe468eb0e3c1798c82280bf000.jpg",
      url: "cappadocia-restaurant-sg",
    },
  ];

  return (
    <div>
      <h2>Explore our restaurant guide to Singapore</h2>
      <div className={styles.restaurants}>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default NewLocalRestaurants;
