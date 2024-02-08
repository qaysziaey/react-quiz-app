import styles from "./Learn_more.module.css";
import { languageList } from "../data/language.js";

export function Learn_more({ language }) {
  return (
    <div className={styles["learn-more-container"]}>
      <h1>Quizy</h1>
      <p>{languageList[language].Learn_more.text1}</p>
      <p>{languageList[language].Learn_more.text2}</p>

      <div>
        <p>Contributers</p>
        <div className={styles["buttons-container"]}>
          <button>Raghad</button>
          <button>Qais</button>
          <button>Olekssi</button>
        </div>
      </div>
    </div>
  );
}
