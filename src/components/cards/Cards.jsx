import React, { useState } from "react";
import styles from "./cards.module.scss";
import { NavLink } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCard from "./add-card/AddCard";
import Filter from "../filter/Filter";
// import Leaders from "../leaders/Leaders";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function Cards() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const cards = [
    {
      name: "нужно сделать забор на участке",
      price: "10.000",
      images: "https://atgarant.ru/drive/files/public/big/369394178ae89f681e88fbe61fda5fcc3013f78430.jpg",
      categories: "строительство",
      address: "Грозный, р-н Центральный",
      data: "30 марта в 14:28",
      watch: 6124,
      description:
        "нужно построить забор на участке 15 соток,обед включен,есть место отдыха,оплата вовремя)",
      id: 1,
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
      id: 2,
    },
    {
      name: "нужно покрасить дом",
      price: "10.000",
      images:
        "https://www.sibwindows.ru/wp-content/uploads/2020/05/srub-vnutri-germetik.jpg",
      categories: "строительство",
      address: "Гудермес, р-н Центральный",
      data: "30 марта в 14:28",
      watch: 258,
      description:
        "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
      id: 3,
    },
    {
      name: "нужны люди для сбора яблок",
      price: "10.000",
      images: "https://cdnn1.img.sputnik-ossetia.ru/images/309/77/3097744.jpg",
      categories: "сборы",
      address: "Аргун, р-н Центральный",
      data: "30 марта в 14:28",
      watch: 923,
      description:
        "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
      id: 4,
    },
    {
      name: "построить дом 2 эт",
      price: "5.000.000",
      images: "https://rosrealt.ru/pics/dom/dinskaya/2022/02/18/1185569_1b.jpg",
      categories: "строительство",
      address: "Грозный, р-н Центральный",
      data: "30 марта в 14:28",
      watch: 129,
      description:
        "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
      id: 5,
    },
    {
      name: "нужно присмотреть за ребенком",
      price: "5.000",
      images:
        "https://images.vanityfair.it/gallery/111128/Big/6116b159-e5fc-4844-ae2f-522ae2605343.jpeg",
      categories: "уход",
      address: "Грозный, р-н Центральный",
      data: "30 марта в 14:28",
      watch: 28001,
      description:
        "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
      id: 6,
    },
    {
      name: "залить фундамент",
      price: "20.000",
      images:
        "http://rufundament.ru/wp-content/uploads/2016/02/opalubka-dlja-fundamenta.jpg",
      categories: "строительство",
      address: "Автуры, р-н Центральный",
      data: "30 марта в 14:28",
      watch: 6124,
      description:
        "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
      id: 7,
    },
    {
      name: "залить фундамент",
      price: "20.000",
      images:
        "http://rufundament.ru/wp-content/uploads/2016/02/opalubka-dlja-fundamenta.jpg",
      categories: "строительство",
      address: "Автуры, р-н Центральный",
      data: "30 марта в 14:28",
      watch: 34,
      description:
        "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
      id: 8,
    },
    {
      name: "Официанты на банкет",
      price: "3.000",
      images:
        "https://astratt.ru/wp-content/uploads/2022/11/%D0%BE%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BD%D1%82-2.jpg",
      categories: "строительство",
      address: "Автуры, р-н Центральный",
      data: "30 марта в 14:28",
      watch: 34,
      description:
        "нужны официанты на свадьбу,по одежде черный низ и белый верх,обед включен,развозка тоже",
      id: 9,
    },
  ];
  const [loading, setLoading] = useState(false)
  return (
    <div className={styles.main}>
      {/* <Leaders /> */}
      <div>
        <div className={styles["add-card"]}>
            <div className={styles.search}>
              <input placeholder="Введите текст." type="text"></input>
              <button type="submit">найти</button>
          </div>
          <Filter />
          <div>
            <AddCard />
          </div>
        </div>
        <div className={styles.cards}>
          {loading ?
            cards.map((item) => {
              return <div className={styles.cardSkeleton}>
                <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
                  <Skeleton height={200} width={250} style={{ marginBottom: '10px' }} />
                  <Skeleton height={30} width={250} />
                  <Skeleton height={30} width={250} />
                  <Skeleton height={30} width={250} />
                </SkeletonTheme>
              </div>
            })
            : cards.map((card, index) => {
              return (
                <div className={styles.card} key={index}>
                  <NavLink onClick={() => window.open(`/card/${card.id}`, "_blank")}>
                    <div className={styles["ads-image"]}>
                      <img src={card.images} alt="" />
                    </div>
                  </NavLink>
                  <div className={styles.info}>
                    <NavLink onClick={() => window.open(`/card/${card.id}`, "_blank")}>
                      <div className={styles.name}>{card.name}</div>
                    </NavLink>
                    <div className={styles.price}>{card.price} р</div>
                    <div className={styles.address}>{card.address}</div>
                    <div className={styles.data}>{card.data}
                      <div className={styles.watchh}><VisibilityIcon fontSize="small" /></div>
                      <div>{card.watch}</div>
                      <div className={styles.favorite}>
                        <Checkbox
                          title="в избранное"
                          sx={{
                            color: "grey",
                            "&.Mui-checked": {
                              color: "red",
                            },
                          }}
                          {...label}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                        />
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
