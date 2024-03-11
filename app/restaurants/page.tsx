import RestaurantCard from "../_components/RestaurantCard";

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

const RestaurantsPage = async () => {
  const data = await getData();

  const restaurants = data?.data;
  return (
    <div>
      <h1>Restaurants</h1>
      <div>
        {restaurants?.map((restaurant: any) => {
          const restaurantInfo = restaurant.attributes;
          console.log(restaurantInfo);
          return (
            <RestaurantCard key={restaurant.id} restaurant={restaurantInfo} />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantsPage;
