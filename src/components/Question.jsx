import styles from "./Question.module.css";
import { data_of_questions } from "../data/data.js";
import { useState } from "react";

export function Question({ user, pull_of_questions, onChangePage }) {
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
        <h2 class="rounds-counter">5/8</h2>
        <div className={styles["questions"]}>
          <form>
            {data_of_questions.prizes_by_points.map((prize, index) => {})}
            <p className={styles["question-text"]}>
              Wie selektiert man ein Element mit id=demo?
            </p>
            <label>
              <input name="answer" type="radio" value="1" />
              #demo
            </label>

            <label>
              <input name="answer" type="radio" value="2" />
              .demo
            </label>
            <label>
              <input name="answer" type="radio" value="3" />
              Demo
            </label>
            <label>
              <input name="answer" type="radio" value="4" />
              *demo
            </label>
          </form>
        </div>
        <div class="buttons-contanier">
          <button class="button" onClick={() => {
                    onChangePage(1);
                }}>Back</button>
          <button class="button">Next</button>
        </div>
      </div>
    </>
  );
}
