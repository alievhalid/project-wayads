import React, { useState } from 'react';
import styles from "./notifications.module.scss"

const Notifications = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="notification">
      <button className="notification__toggle" onClick={toggleDropdown}>
        Уведомления
      </button>
      {isOpen && (
        <ul className={styles["notification__list"]}>
          <li className={styles["notification__item"]}>Уведомление 1</li>
          <li className={styles["notification__item"]}>Уведомление 2</li>
          <li className={styles["notification__item"]}>Уведомление 3</li>
        </ul>
      )}
    </div>
  );
};

export default Notifications;