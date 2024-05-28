import React from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
// import Notifications from "../notifications/Notifications";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.acts}>
          <NavLink to="/">
            <div>Главная</div>
          </NavLink>
          <NavLink to="/about">
            <div>о нас</div>
          </NavLink>
          <NavLink to="/specialists">
            <div><s>Специалисты</s></div>
          </NavLink>
          <NavLink to="/favorite">
            <div>Избранное</div>
          </NavLink>
          {/* <div>{<Notifications />}</div> */}
          <div>Помощь</div>
        </div>
        <div className={styles.me}>Мои объявления</div>
          <NavLink to="/profile">
          <div className={styles.profile}>
              <img
                src="https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album"
                alt=""
              />
            <div>Алиев Халид</div>
            </div>
          </NavLink>
      </div>
    </div>
  );
}

export default Header;
