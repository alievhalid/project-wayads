import React from "react";
import styles from "./favorite.module.scss";
import { NavLink } from "react-router-dom";
function Favorite() {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>Избранные объявления</div>
      <div className={styles["favorite-blocks"]}>
        <div className={styles.card}>
          <NavLink to="/card">
            <div className={styles["ads-image"]}>
              <img
                src="https://city-workshop.ru/upload/iblock/41e/41e49cbd6c9e92275ad55fd4a2d038a8.jpg"
                alt=""
              />
            </div>
          </NavLink>
          <div className={styles.info}>
            <NavLink to="/card">
              <div className={styles.name}>нужно сделать забор на участке</div>
            </NavLink>
            <div className={styles.price}>от 10.000 до 15.000 р</div>
            <div className={styles.address}>Грозный</div>
            <div className={styles.data}>30 марта в 14:28</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
