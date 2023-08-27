import React, { useState } from "react";
import styles from "./specialist-profile.module.scss";
import PriceList from "../PriceList";
function SpecialistProfile() {
  // const [serviceOne, setServiceOne] = useState(false);
  // const handleAddOne = () => {
  //   setServiceOne(true);
  //   setPrice(price + 10000);
  // };
  // const [serviceTwo, setServiceTwo] = useState(false);
  // const handleAddTwo = () => {
  //   setServiceTwo(true);
  //   setPrice(price + 15000);
  // };
  // const [serviceThree, setServiceThree] = useState(false);
  // const handleAddThree = () => {
  //   setServiceThree(true);
  //   setPrice(price + 3000);
  // };
  // const [serviceFour, setServiceFour] = useState(false);
  // const handleAddFour = () => {
  //   setServiceFour(true);
  //   setPrice(price + 5000);
  // };
  // const [serviceFive, setServiceFive] = useState(false);
  // const handleAddFive = () => {
  //   setServiceFive(true);
  //   setPrice(price + 20000);
  // };
  // const handleReset = () => {
  //   setPrice(0);
  //   setServiceOne(false);
  //   setServiceTwo(false);
  //   setServiceThree(false);
  //   setServiceFour(false);
  //   setServiceFive(false);
  // };
  const [price, setPrice] = useState(0);
  return (
    <div className={styles.wrap}>
      <div className={styles.info}>
        <div className={styles.name}>
          натяжные потолки,ваночки из гипсокартона
        </div>
        <div className={styles.way}>
          <span>Специалисты {">"} </span>
          <span>Строительство</span>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.image}>
          <img
            src="https://www.remontnik.ru/media/OrderPicture/124/215596__4e2ef9737c189391f3508595846b470e.jpg"
            alt="img"
          />
        </div>
        <div className={styles.description}>
          <h3>об этом объявлении</h3>
          <div>описание</div>
          <span>
            делаю ваночки на усмотрение заказчика,любые виды работ с
            гипсокартонам
          </span>
          <div>информация</div>
          <span>
            данное объявление сделано для тех кто уже определился с тем что ему
            нужно и ищет специалиста,
          </span>
          <div>что входит в услугу</div>
          <span>
            в данную услугу входит,1: замеры,2:каталог работ на усмотрение,3:
            бесплатные правки по работе.
          </span>
          <div>нужно для работы</div>
          <span>
            с вас: своевременная выплата,грамотно поставленные задачи,не менят
            условия после работы
          </span>
        </div>
        <div className={styles.reviews}>

        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.price}>{price}р</div>
        <div className={styles.time}>10 дней на выполнение</div>
        <div className={styles.number}>+7 963-397-16-74</div>
        <h4>Прайс-лист</h4>
        {/* <div className={styles["price-list"]}>
          <div
            onClick={handleAddOne}
            className={serviceOne ? styles.active : null}
          >
            Слощной гипсокартон: <span>+10.000р</span>
          </div>
          <div
            onClick={handleAddTwo}
            className={serviceTwo ? styles.active : null}
          >
            Ваночка: <span>+15.000р</span>
          </div>
          <div
            onClick={handleAddThree}
            className={serviceThree ? styles.active : null}
          >
            Замеры: <span>+3.000р</span>
          </div>
          <div
            onClick={handleAddFour}
            className={serviceFour ? styles.active : null}
          >
            Исправление <span>+5.000р</span>
          </div>
          <div
            onClick={handleAddFive}
            className={serviceFive ? styles.active : null}
          >
            Натяжной потолок: <span>+20.000р</span>
          </div>
          <div onClick={handleReset}>сбросить все</div>
        </div> */}
        <PriceList />
        <div className={styles.profile}>
          <div className={styles["profile-image"]}>
            <img
              src="https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album"
              alt=""
            />
          </div>
          <div className={styles["profile-name"]}>
            <span>Минкаил</span>
            <div className={styles.experience}>Профессионал</div>{" "}
          </div>
        </div>
        <div className={styles.projects}>Выполнено: 42 проекта</div>
      </div>
    </div>
  );
}

export default SpecialistProfile;
