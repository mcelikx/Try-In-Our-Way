import Image from "next/image";
import styles from "./styles.module.css";
import Banner from "./_components/Banner";
import NewLocalRestaurants from "./_components/NewLocalRestaurants";
export default function Home() {
  return (
    <main className={styles.root}>
      {/* banner */}
      <Banner />
      <NewLocalRestaurants />
    </main>
  );
}
