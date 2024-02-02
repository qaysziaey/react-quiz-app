import styles from "./Question.module.css";
import { data_of_questions } from "../data/data.js";
import { useState } from "react";

export function Question(props) {
  const [getData, setGetData] = useState(data_of_questions);

  //   function handleQuestions() {
  //     getData.map((data) => {
  //       console.log(data);
  //     });
  //   }

  return (
    <>
      <div className={styles["questions-container"]}>
        <h1>QUIZ QUESTIONS</h1>
        <h2 className={styles["rounds-counter"]}>5/8</h2>
        <div className={styles["questions"]}>
          <form>
            {data_of_questions.prizes_by_points.map((prize, index) => {})}
            <p className={styles["question-text"]}>
              Wie selektiert man ein Element mit id=demo?
            </p>
            <label>
              <input name="a" type="checkbox" value="option1" checked />
              #demo
            </label>

            <label>
              <input name="b" type="checkbox" value="option1" />
              .demo
            </label>
            <label>
              <input name="c" type="checkbox" value="option1" />
              Demo
            </label>
            <label>
              <input name="d" type="checkbox" value="option1" />
              *demo
            </label>
          </form>
        </div>
        <div className={styles["buttons-contanier"]}>
          <button className={styles.button}>Back</button>
          <button className={styles.button}>Next</button>
        </div>
      </div>
    </>
  );
}
