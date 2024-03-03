import RestaurantCard from "../RestaurantCard";

const NewLocalRestaurants: React.FC = () => {
  const restaurants = [
    {
      name: "restaurant 1",
      price: 10,
      rating: 4,
      image: "/images/restaurant1.jpg",
    },
    {
      name: "restaurant 2",
      price: 20,
      rating: 3,
      image: "/images/restaurant2.jpg",
    },
  ];

  return (
    <div>
      <h2>Explore our restaurant guide to Antalya</h2>
      <div>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default NewLocalRestaurants;
