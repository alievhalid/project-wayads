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
      <button onClick={handleModalOpen}>Добавить</button>
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
          </div>
        </div>
      )}
    </>
  );
}
export default AddCard