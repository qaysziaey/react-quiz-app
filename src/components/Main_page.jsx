import { useState } from "react";
import styles from "./Main_page.module.css";
import { languageList } from "../data/language.js";

export function Main_page({ user, onChangePage, onStartWithUser, language }) {
  const avatars_array = [
    { avatar: "", text: "" },
    {
      avatar: "😛",
      text: {
        EN: "Just another day of being awesome!",
        DE: "Einfach ein weiterer Tag voller Großartigkeit!",
      }
    },
    {
      avatar: "🤪",
      text: {
        EN: "Crazy like a fox!",
        DE: "Verrückt wie ein Fuchs!",
      }
    },
    {
      avatar: "🥶",
      text: {
        EN: "Don't even think about touching me!",
        DE: "Denken Sie nicht einmal daran, mich zu berühren!",
      }
    },
    {
      avatar: "🥵",
      text: {
        EN: "This task is making me sweat!",
        DE: "Diese Aufgabe bringt mich ins Schwitzen!",
      }
    },
    {
      avatar: "😤",
      text: {
        EN: "I'm pumped up and ready to conquer!",
        DE: "Ich bin aufgepumpt und bereit für den Sieg!",
      }
    },
  ];

  const [avatar, setAvatar] = useState(user.avatar ? user.avatar : "");
  const [username, setUsername] = useState(user.username ? user.username : "");
  const [answers, setAnswers] = useState(user.answers ? user.answers : []);
  const [totalScore, setTotalScore] = useState(
    user.totalScore ? user.totalScore : 0
  );

  const avatar_print = avatars_array.map((value) => (
    <option key={value.avatar} value={value.avatar}>
      {value.avatar} {value.text[language]}
    </option>
  ));

  return (
    <>
      <h1>QUUUUIZZZ</h1>
      <h2>{languageList[language].MainPage.Title}</h2>
      <div className={styles["main-page-container"]}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (username && avatar) {
              onChangePage(2);
              onStartWithUser({
                username,
                avatar,
                answers,
                totalScore,
              });
            } else {
              alert("Enter Your name and choose Avatar");
            }
          }}
        >
          <div>
            <label htmlFor="avatar">
              {languageList[language].MainPage.label_avatar}
              <select
                name="avatar"
                className={styles.avatar_select}
                value={avatar}
                onChange={(event) => {
                  setAvatar(event.target.value);
                }}
              >
                {avatar_print}
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="user_name">
              {languageList[language].MainPage.label_name}
              <input
                type="text"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                name="user_name"
                id="user"
              />
            </label>
          </div>
          <button className="button" type="submit">
            {languageList[language].MainPage.btn_start}
          </button>
        </form>

        <button
          className="button"
          onClick={() => {
            onChangePage(5);
          }}
        >
          {languageList[language].MainPage.btn_learn_more}
        </button>
      </div>
    </>
  );
}
