import React from "react";
import styles from "./filter.module.scss";
function FIlter() {
  return (
    <div className={styles["filters"]}>
      <div className={styles["filters__group"]}>
        <label className={styles["filters__label"]} htmlFor="filter1">Город</label>
        <select className={styles["filters__select"]} id="filter1">
          <option value="option1">Все</option>
          <option value="option1">Москва</option>
          <option value="option2">Тюмень</option>
          <option value="option3">Тобольск</option>
          <option value="option3">Грозный</option>
          <option value="option3">Аргун</option>
          <option value="option3">Шали</option>
          <option value="option3">Гудермес</option>
        </select>
      </div>
      <div className={styles["filters__group"]}>
        <label className={styles["filters__label"]} htmlFor="filter3">Цена от</label>
        <select className={styles["filters__select"]} id="filter3">
          <option value="option1">Все</option>
          <option value="option1">-5.000 р</option>
          <option value="option2">-10.000 р</option>
          <option value="option3">-20.000 р</option>
          <option value="option3">почасовая</option>
        </select>
      </div>
      <div className={styles["filters__group"]}>
        <label className={styles["filters__label"]} htmlFor="filter2">Категория</label>
        <select className={styles["filters__select"]} id="filter2">
          <option value="option1">Все</option>
          <option value="option1">Строительство</option>
          <option value="option2">Уход</option>
          <option value="option2">Обслуживаение</option>
          <option value="option3">Сантехника</option>
          <option value="option3">Электрика</option>
          <option value="option3">Присмотр</option>
          <option value="option3">Переезд</option>
        </select>
      </div>
      <div className={styles["filters__group"]}>
        <label className={styles["filters__label"]} htmlFor="filter3">Вызывные</label>
        <select className={styles["filters__select"]} id="filter3">
          <option value="option1">Все</option>
          <option value="option1">Официант</option>
          <option value="option2">Бармен</option>
          <option value="option3">Бариста</option>
          <option value="option3">Диджей</option>
          <option value="option3">Уборщик(ца)</option>
          <option value="option3">Прачка</option>
          <option value="option3">Менеджер</option>
        </select>
      </div>
    </div>
  );
}

export default FIlter;
