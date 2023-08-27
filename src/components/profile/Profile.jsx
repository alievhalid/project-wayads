import React, { useState } from "react";
import styles from "./profile.module.scss";
import { AiFillStar } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Works from "./works/Works";
import Comments from "./comments/Comments";
import telegramIcon from "../../images/telegram.svg";
import instagramIcon from "../../images/instagram.svg";
import telephoneIcon from "../../images/telephone.svg";
import watchIcon from "../../images/watch.svg";
import locationIcon from "../../images/location.svg";
import UserCards from "./user-cards/UserCards";
import EditUserModal from "./EditUserModal.jsx";

function Profile() {
  let level = 42;
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
  const [works, setWorks] = useState(true);
  const [comments, setComments] = useState(false);
  const [userWorks, setUserWorks] = useState(false);
  const handleWorks = () => {
    setWorks(true);
    setComments(false);
    setUserWorks(false);
  };
  const handleComments = () => {
    setComments(true);
    setWorks(false);
    setUserWorks(false)
  };
  const handleUserWorks = () => {
    setUserWorks(true);
    setWorks(false);
    setComments(false);
  };
  return (
    <div>
      <div className={styles.profile}>
        <div className={styles.wrap}>
          <div className={styles.images}>
            <img
              src="https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album"
              alt=""
            />

          </div>
          <div className={styles.info}>
            <div className={styles.name}>Халид Алиев</div>
            <div className={styles.specialization}>frontend developer</div>
            <div className={styles.about}>
              привет,я frontend developer,я разрабатываю сайты,приложения,мой
              стек это HTML,CSS,JS,REACT,REDUX,опыт работы с данными
              технологиями у меня 1 год,так же верстаю landing с фигмы
            </div>
            <div className={styles.rating}>
              {arr.map((_, index) => {
                return <AiFillStar key={index} />;
              })}
              <div className={styles.level}>
                <span>{level}</span> УРОВЕНЬ
              </div>
            </div>
          </div>
          <EditUserModal />
        </div>
        <div className={styles["profile-info"]}>
          <div className={styles.login}>Aliev_halid <span className={styles.element} data-title="sfasfa"><BsFillPatchCheckFill /></span> </div>
          <div className={styles.address}>
            <img src={locationIcon} alt="" />
            <div>Грозный</div>
          </div>
          <div className={styles["first-time"]}>
            <img src={watchIcon} alt="" />
            <div>На сайте с 12 февраля 2022</div>
          </div>
          <div className={styles.phone}>
            <img src={telephoneIcon} alt="" />
            <div>+ 7 (963) 397-16-74</div>
          </div>
          <div className={styles.socials}>
            <div className={styles.instagram}>
              <img src={instagramIcon} alt="png" />
            </div>
            <div className={styles.telegram}>
              <img src={telegramIcon} alt="png" />
            </div>
          </div>
        </div>
        <div className={styles["works-title"]}>
          <div onClick={handleWorks} className={works ? styles.active : null}>
            мои работы
          </div>
          <div
            onClick={handleComments}
            className={comments ? styles.active : null}
          >
            отзывы
          </div>
          <div onClick={handleUserWorks} className={userWorks ? styles.active : null}>
            услуги
          </div>
        </div>
        {works === true ? <Works /> : null || comments === true ? <Comments /> : null || userWorks === true ? <UserCards /> : null}

      </div>
    </div>
  );
}

export default Profile;
