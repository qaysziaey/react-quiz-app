import { useState } from "react";
import styles from "./Main_page.module.css";

export function Main_page({ user, onChangePage, onStartWithUser }) {
  const avatars_array = [
    { avatar: "", text: "" },
    {
      avatar: "😛",
      text: "Just another day of being awesome!",
    },
    {
      avatar: "🤪",
      text: "Crazy like a fox!",
    },
    {
      avatar: "🥶",
      text: "Don't even think about touching me!",
    },
    {
      avatar: "🥵",
      text: "This task is making me sweat!",
    },
    {
      avatar: "😤",
      text: "I'm pumped up and ready to conquer!",
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
      {value.avatar} {value.text}
    </option>
  ));

  return (
    <>
      <h1>QUUUUIZZZ</h1>
      <h2>Your IQ under attack</h2>
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
              Your Avatar
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
              Your Name
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
            START
          </button>
        </form>

        <button
          className="button"
          onClick={() => {
            onChangePage(5);
          }}
        >
          Learn more
        </button>
      </div>
    </>
  );
}
