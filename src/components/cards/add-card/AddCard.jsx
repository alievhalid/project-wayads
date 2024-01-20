import React, { useState } from 'react';
import styles from './add-card.module.scss'
function AddCard() {
  const [showModal, setShowModal] = useState(false);

  function handleModalOpen() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  return (
    <>
      <button onClick={handleModalOpen}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
          добавить
        </span>
      </button>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <span className={styles.close} onClick={handleModalClose}>&times;</span>
            <form>
              <label htmlFor="name">Название:</label>
              <input type="text" id="name" name="name" placeholder='Помочь с переездом' />
              <label htmlFor="surname">Цена:</label>
              <input type="number" placeholder='10000' />
              <label>описание:</label>
              <textarea class="textarea-input" placeholder="Введите текст"></textarea>
              <label>Выберите изображения:</label>
              <input type="file" />
              <label for="city-select">Выберите город:</label>
              <select id="city-select">
                <option value="moscow">Грозный</option>
                <option value="stpetersburg">Шали</option>
                <option value="novosibirsk">Аргун</option>
                <option value="ekaterinburg">Гудермес</option>
                <option value="nizhniynovgorod">Курчалой</option>
              </select>
              <button type="submit">Сохранить</button>
            </form>
            <div className={styles.typewriter}>
              <div className={styles.slide}><i></i></div>
              <div className={styles.paper}></div>
              <div className={styles.keyboard}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default AddCard