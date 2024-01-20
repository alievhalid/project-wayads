import React, { useState } from 'react';
import styles from "./Modal.module.scss"
function EditUserModal() {
  const [showModal, setShowModal] = useState(false);

  function handleModalOpen() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  return (
    <>
   <button className={styles.Btn} onClick={handleModalOpen}>Edit 
      <svg className={styles.svg} viewBox="0 0 512 512">
        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
    </button>
      {showModal && (
        <div id="modal" className={styles.modal}>
          <div className={styles["modal-content"]}>
            <span className={styles.close} onClick={handleModalClose}>&times;</span>
            <h2>Редактирование пользователя</h2>
            <div className={styles.modalWrap}>
              <form>
                <label htmlFor="name">Имя:</label>
                <input type="text" id="name" value={"Халид"} name="name" />
                <label htmlFor="surname">Фамилия:</label>
                <input type="text" id="name" value={"Алиев"} name="name" />
                <label htmlFor="email">Почта:</label>
                <input type="email" id="email" value={"s7600180@gmail.com"} name="email" />
                <label htmlFor="text">Город:</label>
                <input type="text" id="text" value={"Тюмень"} name="text" />
                <label htmlFor="Password">Пароль:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="text">Телеграм:</label>
                <input type="text" id="email" value={"@therealhalidaliev"}  name="text" />
                <button type="submit">Сохранить</button>
              </form>
              <div className={styles["edit-image"]}>
                <img src="https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album" alt="" />
                <div>
                  <input type="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditUserModal;