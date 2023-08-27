import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./cards.module.scss";
import { BiCategoryAlt } from "react-icons/bi";
import email from "../../images/email.svg";
import user from "../../images/user.svg";
import location from "../../images/location.svg";
import Maps from "./map/Map";
import Carousel from "./Carousel";
import { useEffect } from "react";
// import { AiFillStar } from "react-icons/ai";
function Card() {
  // let level = 42;
  let arr = 10000;
  if (arr <= 10) {
    arr = Array(1).fill(0);
  } else if (arr <= 20) {
    arr = Array(2).fill(0);
  } else if (arr <= 30) {
    arr = Array(3).fill(0);
  } else if (arr <= 40) {
    arr = Array(4).fill(0);
  } else if (arr <= 50) {
    arr = Array(5).fill(0);
  } else {
    arr = Array(5).fill(0);
  }
  const [number, setNumber] = useState(false);
  const handleChange = () => {
    setNumber(!number);
  };
  const param = useParams().id;
  const cards = [
    {
      name: "нужно сделать забор на участке ",
      firstName: "Халид",
      lastName: "Алиев",
      price: "10 000",
      images:
        "https://atgarant.ru/drive/files/public/big/369394178ae89f681e88fbe61fda5fcc3013f78430.jpg",
      categories: "Строительство",
      address: "Грозный, р-н Центральный",
      data: "30 марта в 14:28",
      number: "79633971674",
      email: "s7600180@gmail.com",
      description:
        "нужно построить забор на участке 15 соток,обед включен,есть место отдыха,оплата вовремя",
      id: "1",
    },
    {
      name: "нужно сделать проводку в доме",
      firstName: "Халид",
      lastName: "Алиев",
      price: "10 000",
      images:
        "https://gymnasia2.ru/wp-content/uploads/5/a/d/5ad77b102cab5ffd94ad7a7e783cae75.jpeg",
      categories: "Строительство",
      address: "Автуры, р-н Центральный",
      data: "30 марта в 14:28",
      number: "79633971674",
      email: "alievhalid95@gmail.com",
      description:
        "есть дом 2-этажный,нужно полностью провести проводку,поставить считок и все что нужно,скажем так работа под ключ",
      id: "2",
    },
    {
      name: "нужно покрасить дом",
      firstName: "Халид",
      lastName: "Алиев",
      price: "10 000",
      images:
        "https://www.sibwindows.ru/wp-content/uploads/2020/05/srub-vnutri-germetik.jpg",
      categories: "Строительство",
      address: "Гудермес, р-н Центральный",
      data: "30 марта в 14:28",
      number: "79633971674",
      email: "user231414@gmail.com",
      description:
        "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
      id: "3",
    },
    {
      name: "нужны люди для сбора яблок",
      firstName: "Халид",
      lastName: "Алиев",
      price: "10 000",
      images: "https://cdnn1.img.sputnik-ossetia.ru/images/309/77/3097744.jpg",
      categories: "Сборы",
      address: "Аргун, р-н Центральный",
      data: "30 марта в 14:28",
      number: "79633971674",
      email: "qwerty95@gmail.com",
      description:
        "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
      id: "4",
    },
    {
      name: "построить дом 2 эт",
      firstName: "Халид",
      lastName: "Алиев",
      price: "5 000 000",
      images: "https://rosrealt.ru/pics/dom/dinskaya/2022/02/18/1185569_1b.jpg",
      categories: "Строительство",
      address: "Грозный, р-н Центральный",
      data: "30 марта в 14:28",
      number: "79633971674",
      email: "salman9559@gmail.com",
      description:
        "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
      id: "5",
    },
    {
      name: "нужно присмотреть за ребенком",
      firstName: "Халид",
      lastName: "Алиев",
      price: "5 000",
      images:
        "https://images.vanityfair.it/gallery/111128/Big/6116b159-e5fc-4844-ae2f-522ae2605343.jpeg",
      categories: "Уход",
      address: "Грозный, р-н Центральный",
      data: "30 марта в 14:28",
      number: "79633971674",
      email: "s7600180@gmail.com",
      description:
        "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
      id: "6",
    },
    {
      name: "залить фундамент",
      firstName: "Халид",
      lastName: "Алиев",
      price: "20 000",
      images:
        "http://rufundament.ru/wp-content/uploads/2016/02/opalubka-dlja-fundamenta.jpg",
      categories: "Строительство",
      address: "Автуры, р-н Центральный",
      data: "30 марта в 14:28",
      number: "79633971674",
      email: "s7600180@gmail.com",
      description:
        "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
      id: "7",
    },
    {
      name: "залить фундамент",
      firstName: "Халид",
      lastName: "Алиев",
      price: "20 000",
      images:
        "http://rufundament.ru/wp-content/uploads/2016/02/opalubka-dlja-fundamenta.jpg",
      categories: "Строительство",
      address: "Автуры, р-н Центральный",
      data: "30 марта в 14:28",
      number: "79633971674",
      email: "s7600180@gmail.com",
      description:
        "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
      id: "8",
    },
    {
      name: "официанты на банкет",
      firstName: "Халид",
      lastName: "Алиев",
      price: "3.000",
      images:
        "https://astratt.ru/wp-content/uploads/2022/11/%D0%BE%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BD%D1%82-2.jpg",
      categories: "Строительство",
      address: "Автуры, р-н Центральный",
      data: "30 марта в 14:28",
      number: "79633971674",
      email: "s7600180@gmail.com",
      description:
        "нужны официанты на свадьбу,по одежде черный низ и белый верх,обед включен,развозка тоже",
      id: "9",
    }
  ];
  const card = cards.find((item) => {
    return param === item.id;
  });
  return (
    <div>
      <div className={styles.product}>
        <div>
          <Carousel />
          <div className={styles["additionally-img"]}>
            <div>
              <img
                src="https://st12.stpulscen.ru/images/product/072/066/921_big.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://st12.stpulscen.ru/images/product/072/063/785_big.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://st28.stblizko.ru/images/product/209/260/193_original.JPG"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://city-workshop.ru/upload/iblock/41e/41e49cbd6c9e92275ad55fd4a2d038a8.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles["product-owner"]}>
            <Maps />
            <div className={styles.owner}>
              <img src={user} alt="" />
              <span>
                {card.firstName} {card.lastName}
              </span>
            </div>
            <div className={styles["product-contact"]}>
              <img src={email} alt="" />
              <span>почта</span>: {card.email}
            </div>
            <div className={styles["product-address"]}>
              <img src={location} alt="" />
              <span>адрес</span>: {card.address}
            </div>
            <div className={styles.categories}>
              <BiCategoryAlt />
              <span>категория</span>: {card.categories}
            </div>
          </div>
        </div>
        <div className={styles["product-info"]}>
          <div className={styles["product-name"]}>{card.name}</div>
          <div className={styles.price}>{card.price} ₽</div>
          <button onClick={handleChange}>
            {number ? card.number : "Показать номер"}
          </button>
          <div className={styles.descript}>Описание</div>
          <div className={styles["product-desc"]}>{card.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
