import React from 'react'
import styles from "./leaders.module.scss"
function Leaders() {
    const leaders = [
        { id: 1, name: 'Leader 1', photo: 'https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album.jpg' },
        { id: 2, name: 'Leader 2', photo: 'https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album.jpg' },
        { id: 3, name: 'Leader 3', photo: 'https://sun9-53.userapi.com/impg/JcJJMQArqwlKOtZbAN441OOUiAC-ZlUcjwPmLQ/DXE069x_MFc.jpg?size=2160x2160&quality=96&sign=8c61b37f493c8fec5a9f032580ed9b81&type=album.jpg' },
        // Добавь остальных лидеров
      ];
  return (
    <div className={styles.leadersListWrapper}>
      <h2>List of Leaders</h2>
      <div className={styles.centeredLeader}>
        <img src={leaders[0].photo} alt={leaders[0].name} className={styles.leaderPhoto} />
        <p>{leaders[0].name}</p>
      </div>
      <ul className={styles.leadersList}>
        {leaders.slice(1).map((leader) => (
          <li key={leader.id}>{leader.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaders