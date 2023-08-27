import React from "react";
import styles from "./specialists.module.scss";
import { AiFillStar } from "react-icons/ai";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
function Specialists() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className={styles.specialists}>
      <div className={styles.filters}>
        <div>Электрика</div>
        <div>Сантехника</div>
        <div>Сборщики</div>
        <div>Сварка</div>
        <div>Няни</div>
        <div>Другое</div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <NavLink to={"/specialists/executor"}>
            <div>
              <img
                src="https://www.remontnik.ru/media/OrderPicture/124/215596__4e2ef9737c189391f3508595846b470e.jpg"
                alt="img"
              />
            </div>
          </NavLink>
          <div className={styles.info}>
            <NavLink to={"/specialists/executor"}>
              <div className={styles.name}>
                <div>
                  <img
                    src="https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album"
                    alt=""
                  />
                </div>
                <span>Халид Алиев</span>
              </div>
              <div>покраска дома любого вида</div>
            </NavLink>
            <div className={styles.rating}>
              <div className={styles.icons}>
                <AiFillStar />
                <span>4.9</span>
              </div>
              <div className={styles.choice}>
                выбор <span>wayads</span>
              </div>
            </div>
            <div className={styles.price}>
              <div>
                <Checkbox
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
              <div>от 10.000 р</div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img
              src="https://krause74.ru/wp-content/uploads/b/d/f/bdf94c37bd85915170d52bcf87dbafb1.jpeg"
              alt="img"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              <div>
                <img
                  src="https://krause74.ru/wp-content/uploads/b/d/f/bdf94c37bd85915170d52bcf87dbafb1.jpeg"
                  alt="img"
                />
              </div>
              <span>Бачаев Умар</span>
            </div>
            <div>проводка любой сложности</div>
            <div className={styles.rating}>
              <div className={styles.icons}>
                <AiFillStar />
                <span>5.0</span>
              </div>
              <div className={styles.choice}>
                выбор <span>wayads</span>
              </div>
            </div>
            <div className={styles.price}>
              <div>
                <Checkbox
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
              <div>от 10.000 р</div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img
              src="https://www.sibwindows.ru/wp-content/uploads/2020/05/srub-vnutri-germetik.jpg"
              alt="img"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              <div>
                <img
                  src="https://www.sibwindows.ru/wp-content/uploads/2020/05/srub-vnutri-germetik.jpg"
                  alt=""
                />
              </div>
              <span>Халид Алиев</span>
            </div>
            <div>покраска дома любого вида</div>
            <div className={styles.rating}>
              <div className={styles.icons}>
                <AiFillStar />
                <span>5.0</span>
              </div>
              <div className={styles.choice}>
                выбор <span>wayads</span>
              </div>
            </div>
            <div className={styles.price}>
              <div>
                <Checkbox
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
              <div>от 10.000 р</div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img
              src="https://www.sibwindows.ru/wp-content/uploads/2020/05/srub-vnutri-germetik.jpg"
              alt="img"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              <div>
                <img
                  src="https://www.sibwindows.ru/wp-content/uploads/2020/05/srub-vnutri-germetik.jpg"
                  alt=""
                />
              </div>
              <span>Халид Алиев</span>
            </div>
            <div>покраска дома любого вида</div>
            <div className={styles.rating}>
              <div className={styles.icons}>
                <AiFillStar />
                <span>3.7</span>
              </div>
            </div>
            <div className={styles.price}>
              <div>
                <Checkbox
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
              <div>от 10.000 р</div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img
              src="https://www.sibwindows.ru/wp-content/uploads/2020/05/srub-vnutri-germetik.jpg"
              alt="img"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              <div>
                <img
                  src="https://www.sibwindows.ru/wp-content/uploads/2020/05/srub-vnutri-germetik.jpg"
                  alt=""
                />
              </div>
              <span>Халид Алиев</span>
            </div>
            <div>покраска дома любого вида</div>
            <div className={styles.rating}>
              <div className={styles.icons}>
                <AiFillStar />
                <span>4.9</span>
              </div>
              <div className={styles.choice}>
                выбор <span>wayads</span>
              </div>
            </div>
            <div className={styles.price}>
              <div>
                <Checkbox
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
              <div>от 10.000 р</div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img
              src="https://www.sibwindows.ru/wp-content/uploads/2020/05/srub-vnutri-germetik.jpg"
              alt="img"
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              <div>
                <img
                  src="https://www.sibwindows.ru/wp-content/uploads/2020/05/srub-vnutri-germetik.jpg"
                  alt=""
                />
              </div>
              <span>Халид Алиев</span>
            </div>
            <div>покраска дома любого вида</div>
            <div className={styles.rating}>
              <div className={styles.icons}>
                <AiFillStar />
                <span>4.9</span>
              </div>
              <div className={styles.choice}>
                выбор <span>wayads</span>
              </div>
            </div>
            <div className={styles.price}>
              <div>
                <Checkbox
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
              <div>от 10.000 р</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialists;
