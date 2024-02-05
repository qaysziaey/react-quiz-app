import styles from "./Werbung.module.css";

export function Werbung(props) {
  return (
    <>
      <div className={styles["werbung-container"]}>
        {/* <h1>Werbung</h1> */}
        <p>Invite friends & win</p>

        <span className={styles["money-emoji"]}>🤑</span>

        <h2 className={styles["winn-prize"]}>50$</h2>
        <div className={styles.stars}>
          <span>💰</span>
          <span>💰</span>
          <span>💰</span>
          <span>💰</span>
          <span>💰</span>
        </div>
        <button className={styles.button}>Close Ad</button>
      </div>
    </>
  );
}
