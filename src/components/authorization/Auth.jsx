import React, { useState } from "react";
import styles from "./auth.module.scss";
function Auth() {
  const [log, setLog] = useState(true);
  const handleChange = () => {
    setLog(false)
  }
  const handleOnChange = () => {
    setLog(true)
  }
  return (
    <div className={styles.auth}>
      {log ? <form>
        <div className={styles.segment}>
          <h1>Wayads</h1>
        </div>
        <label>
          <input type="text" placeholder="Email Address" />
        </label>
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <div className={styles.btns}>
          <button className={styles.red} type="button"> Log in</button>
          <button className={styles.red} type="button" onClick = {handleChange}> sign in</button>
        </div>
      </form> : <form>
        <div className={styles.segment}>
          <h1>Wayads</h1>
        </div>
        <label>
          <input type="text" placeholder="Имя" />
        </label>
        <label>
          <input type="text" placeholder="Фамилия" />
        </label>
        <label>
          <input type="email" placeholder="Электронный адрес" />
        </label>
        <label>
          <input type="password" placeholder="Пароль" />
        </label>
        <div className={styles.btns}>
          <button className={styles.red} type="button" onClick = {handleOnChange}> Log in</button>
          <button className={styles.red} type="button"> sign in</button>
        </div>
      </form>}
    </div>
  );
}

export default Auth;
