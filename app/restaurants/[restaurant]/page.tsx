const RestaurantPage = ({
  params,
}: {
  params: {
    restaurant(restaurant: any): unknown;
    slug: string;
  };
}) => {
  console.log(params.restaurant);
  return (
    <div>
      <h1>{String(params.restaurant)}</h1>
    </div>
  );
};

export default RestaurantPage;
