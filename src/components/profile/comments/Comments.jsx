import React from "react";
import styles from "./comments.module.scss";
import { AiFillStar } from "react-icons/ai";
function Comments() {
  let arr = 5000;
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
  const reviews = [
    {
      Username: "Внукова Мария",
      Reviews: "данный человек очень хорошо выполнил свою работу,консультировал по всем  интересующим вопросам,рекомендую данного специалиста",
      user_image: "https://images.squarespace-cdn.com/content/v1/5a996bebf2e6b1a699b173f2/1528908993890-BC49PB7AXX6KCI8TKNMR/testimonialAvatarWoman.png",
      Date: "2020-01-01",
      Stars: 10,
      user_id: 1

    },
    {
      Username: "Кбилашвили Элдар",
      Reviews: "данный человек очень хорошо выполнил свою работу,работа была сдана в срок,сделал скидку)",
      user_image: "https://w7.pngwing.com/pngs/364/361/png-transparent-account-avatar-profile-user-avatars-icon.png",
      Date: "2020-01-01",
      Stars: 10,
      user_id: 2
    }
  ]
  return (
    <div className={styles.comments}>
      {reviews.map((item, index) => {
        return <div className={styles.comment} key={index}>
          <div className={styles.logo}>
            <img
              src={item.user_image}
              alt="img"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{item?.Username}</div><span>27.01.2022</span>
            <div className={styles.text}>
              {item?.Reviews}
            </div>
            <div className={styles.rating}>
              {arr.map((_, index) => {
                return <AiFillStar key={index} />;
              })}
            </div>
          </div>
        </div>
      })}
      <div>
        <h3>оставить отзыв</h3>
        <div className={styles.reviewsInput}>
          <textarea class="textarea-input" placeholder="Введите текст"></textarea>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
            <span>add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
