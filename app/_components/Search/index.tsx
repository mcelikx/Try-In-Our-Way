import styles from "./search.module.css";
const Search = () => {
  // this search component should show results by grouping them by type
  // there are 3 different types: restraunts, hotels, and tours
  // the results should be displayed in a list
  // each item should show the name, price, and rating

  const results = {
    retaurants: [
      {
        name: "restaurant 1",
        price: 10,
        rating: 4,
      },
      {
        name: "restaurant 2",
        price: 20,
        rating: 3,
      },
    ],
    hotels: [
      {
        name: "hotel 1",
        price: 100,
        rating: 5,
      },
      {
        name: "hotel 2",
        price: 200,
        rating: 4,
      },
    ],
    tours: [
      {
        name: "tour 1",
        price: 1000,
        rating: 5,
      },
      {
        name: "tour 2",
        price: 2000,
        rating: 4,
      },
    ],
  };
  return (
    <div>
      {/* Search input should show results by grouping them */}
      <input type="text" placeholder="search" />
    </div>
  );
};

export default Search;
