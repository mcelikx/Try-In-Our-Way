import Image from "next/image";
import styles from "./styles.module.css";
import Banner from "./_components/Banner";
export default function Home() {
  return (
    <main className={styles.root}>
      {/* banner */}
      <Banner />
    </main>
  );
}
