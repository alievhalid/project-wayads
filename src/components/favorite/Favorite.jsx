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
                src="https://36zaborov.ru/wp-content/uploads/2016/04/vysokij-zabor-v-2-5m-na-fundamente-profnastil-matovyj-dvuhstoronnij-1000.jpg"
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
            <div className={styles.sends}>
              <NavLink to="/card">
                <div className={styles.send}>Откликнуться</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
