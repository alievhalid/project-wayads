import React from 'react'
import { NavLink } from "react-router-dom";
import styles from './user-card.module.scss'

function UserCard() {
    const cards = [
        {
            name: "нужно сделать забор на участке",
            price: "10 000",
            images:
                "https://36zaborov.ru/wp-content/uploads/2016/04/vysokij-zabor-v-2-5m-na-fundamente-profnastil-matovyj-dvuhstoronnij-1000.jpg",
            categories: "строительство",
            address: "Грозный",
            data: "30 марта в 14:28",
            description:
                "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
            id: 1,
        },
        {
            name: "нужно сделать проводку в доме",
            price: "10 000",
            images:
                "https://36zaborov.ru/wp-content/uploads/2016/04/vysokij-zabor-v-2-5m-na-fundamente-profnastil-matovyj-dvuhstoronnij-1000.jpg",
            categories: "строительство",
            address: "Автуры",
            data: "30 марта в 14:28",
            description:
                "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
            id: 2,
        },
        {
            name: "нужно покрасить дом",
            price: "10 000",
            images:
                "https://domikarkas.ru/wp-content/uploads/2019/01/kirpichnye-doma.jpg",
            categories: "строительство",
            address: "Гудермес",
            data: "30 марта в 14:28",
            description:
                "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
            id: 3,
        },
        {
            name: "нужны люди для сбора яблок",
            price: "10 000",
            images: "https://cdnn1.img.sputnik-ossetia.ru/images/309/77/3097744.jpg",
            categories: "сборы",
            address: "Аргун",
            data: "30 марта в 14:28",
            description:
                "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
            id: 4,
        },
        {
            name: "построить дом 2 эт",
            price: "5 000 000",
            images: "https://rosrealt.ru/pics/dom/dinskaya/2022/02/18/1185569_1b.jpg",
            categories: "строительство",
            address: "Грозный",
            data: "30 марта в 14:28",
            description:
                "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
            id: 5,
        },
        {
            name: "нужно присмотреть за ребенком",
            price: "5 000",
            images:
                "https://images.vanityfair.it/gallery/111128/Big/6116b159-e5fc-4844-ae2f-522ae2605343.jpeg",
            categories: "уход",
            address: "Грозный",
            data: "30 марта в 14:28",
            description:
                "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
            id: 6,
        },
        {
            name: "залить фундамент",
            price: "20 000",
            images:
                "http://rufundament.ru/wp-content/uploads/2016/02/opalubka-dlja-fundamenta.jpg",
            categories: "строительство",
            address: "Автуры",
            data: "30 марта в 14:28",
            description:
                "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
            id: 7,
        },
        {
            name: "залить фундамент",
            price: "20 000",
            images:
                "http://rufundament.ru/wp-content/uploads/2016/02/opalubka-dlja-fundamenta.jpg",
            categories: "строительство",
            address: "Автуры",
            data: "30 марта в 14:28",
            description:
                "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
            id: 8,
        },
        {
            name: "залить фундамент",
            price: "20 000",
            images:
                "http://rufundament.ru/wp-content/uploads/2016/02/opalubka-dlja-fundamenta.jpg",
            categories: "строительство",
            address: "Автуры",
            data: "30 марта в 14:28",
            description:
                "здесь будет описание объявления,в данный момент здесь текст просто чтобы был)",
            id: 9,
        },
    ];
    return (
        <div>
            <div className={styles.cards}>
                {cards.map((card, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <NavLink to={`/card/${card.id}`}>
                                <div className={styles["ads-image"]}>
                                    <img src={card.images} alt="" />
                                </div>
                            </NavLink>
                            <div className={styles.info}>
                                <NavLink to={`/card/${card.id}`}>
                                    <div className={styles.name}>{card.name}</div>
                                </NavLink>
                                <div className={styles.price}>{card.price}</div>
                                <div className={styles.address}>{card.address}</div>
                                <div className={styles.data}>{card.data}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default UserCard