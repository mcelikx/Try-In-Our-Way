import React from "react";
import styles from "./styles.module.css"; // Make sure to create a corresponding CSS module file

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>It is time to treat yourself.</h1>
          <p>Book a table – the Try In Our Way way.</p>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Find restaurants or cuisines"
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>Find</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
