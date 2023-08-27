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
      <button onClick={handleModalOpen}>Редактировать</button>
      {showModal && (
        <div id="modal" className={styles.modal}>
          <div className={styles["modal-content"]}>
            <span className={styles.close} onClick={handleModalClose}>&times;</span>
            <h2>Редактирование пользователя</h2>
            <div className={styles.modalWrap}>
              <form>
                <label htmlFor="name">Имя:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="surname">Фамилия:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Почта:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="text">Город:</label>
                <input type="text" id="text" name="text" />
                <label htmlFor="Password">Пароль:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="text">Телеграм:</label>
                <input type="text" id="email" name="text" placeholder='@therealhalidaliev' />
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