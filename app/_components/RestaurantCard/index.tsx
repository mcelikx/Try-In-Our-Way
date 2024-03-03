// define Restaurant type
type Restaurant = {
  name: string;
  price: number;
  rating: number;
  image: string;
};

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div>
      <img src={restaurant.image} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>Price: {restaurant.price}</p>
      <p>Rating: {restaurant.rating}</p>
    </div>
  );
};
export default RestaurantCard;
