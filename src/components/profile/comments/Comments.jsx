import React from "react";
import styles from "./comments.module.scss";
import { AiFillStar } from "react-icons/ai";
function Comments() {
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
  return (
    <div className={styles.comments}>
      <div className={styles.comment}>
        <div className={styles.logo}>
          <img
            src="https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album"
            alt="img"
          />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>Алиев Халид</div><span>27.01.2022</span>
          <div className={styles.text}>
            очень хороший эксперт,знает свое дело,всегда выходил на связь и
            всячески помогал. 5 из 5
          </div>
          <div className={styles.rating}>
            {arr.map((_, index) => {
              return <AiFillStar key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className={styles.comment}>
        <div className={styles.logo}>
          <img
            src="https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album"
            alt="img"
          />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>Алиев Халид</div>
          <div className={styles.text}>
            очень хороший эксперт,знает свое дело,всегда выходил на связь и
            всячески помогал. 5 из 5
          </div>
          <div className={styles.rating}>
            {arr.map((_, index) => {
              return <AiFillStar key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className={styles.comment}>
        <div className={styles.logo}>
          <img
            src="https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album"
            alt="img"
          />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>Алиев Халид</div>
          <div className={styles.text}>
            очень хороший эксперт,знает свое дело,всегда выходил на связь и
            всячески помогал. 5 из 5
          </div>
          <div className={styles.rating}>
            {arr.map((_, index) => {
              return <AiFillStar key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className={styles.comment}>
        <div className={styles.logo}>
          <img
            src="https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album"
            alt="img"
          />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>Алиев Халид</div>
          <div className={styles.text}>
            очень хороший эксперт,знает свое дело,всегда выходил на связь и
            всячески помогал. 5 из 5
          </div>
          <div className={styles.rating}>
            {arr.map((_, index) => {
              return <AiFillStar key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
