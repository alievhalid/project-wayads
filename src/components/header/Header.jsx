import React from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
// import Notifications from "../notifications/Notifications";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <NavLink to="/">
          <div className={styles.logo}>
            Wayads
          </div>
          {/* исправить фон у логотипа */}
        </NavLink>
        <NavLink to="/">
          {({ isActive }) => (
            <div className={isActive ? styles.active : styles.noActive}>Главная</div>
          )}
        </NavLink>
        <NavLink to="/about">
                  {({ isActive }) => (
                    <div className={isActive? styles.active : styles.noActive}>о нас</div>
                  )}
                </NavLink>
        <NavLink to="/specialists">
          {({ isActive }) => (
            <div className={isActive ? styles.active : styles.noActive}><s>Специалисты</s></div>
          )}
        </NavLink>
        <NavLink to="/favorite">
          {({ isActive }) => (
            <div className={isActive ? styles.active : styles.noActive}>Избранное</div>
          )}
        </NavLink>
        {/* <div>{<Notifications />}</div> */}
        <div>Помощь</div>
        {/* <div>Войти/регистрация</div> */}
        <div>
          <NavLink to="/profile">
            <img
              src="https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album"
              alt=""
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
