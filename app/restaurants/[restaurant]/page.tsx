async function getData({ restaurantId }: { restaurantId: string }) {
  console.log(
    `${process.env.API_URL}/api/restaurants?filters[url][$eq]=${restaurantId}&populate=*`
  );
  const res = await fetch(
    `${process.env.API_URL}/api/restaurants/?filters[url][$eq]=${restaurantId}/?populate=*`
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
    restaurant(restaurant: string): string;
    slug: string;
  };
}) => {
  const data = await getData({ restaurantId: params.restaurant });

  console.log(data);
  return (
    <div>
      <h1>{String(params.restaurant)}</h1>
    </div>
  );
};

export default RestaurantPage;
