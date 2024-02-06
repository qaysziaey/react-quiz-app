import styles from "./Werbung.module.css";
import { werbungList } from "../data/werbung.js";

const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};

export function Werbung({ onChangePage }) {
    const werbungArrTake = randomNumberInRange(0, werbungList.length-1);
    console.log(werbungArrTake)
  return (
    <>
      <div className={styles["werbung-container"]}>
        {/* <h1>Werbung</h1> */}
        <p>{werbungList[werbungArrTake].text}</p>
        <h2 className={styles["winn-prize"]}>{werbungList[werbungArrTake].price}$</h2>

        <img
          src={werbungList[werbungArrTake].image}
          alt=""
        />
        <button
          className={styles.Adbutton + " button"}
          onClick={() => {
            onChangePage(4);
          }}
        >
          Close Ad
        </button>
      </div>
    </>
  );
}
