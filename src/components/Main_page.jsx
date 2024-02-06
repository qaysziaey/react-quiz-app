import { useState } from "react";
import styles from "./Main_page.module.css";

export function Main_page({ user, onChangePage, onStartWithUser }) {
  const avatars_array = [
    { avatar: "", text: "" },
    {
      avatar: "😛",
      text: "Today a good day",
    },
    {
      avatar: "🤪",
      text: "Ready to get funny",
    },
    {
      avatar: "🥶",
      text: "Don't touch me",
    },
    {
      avatar: "🥵",
      text: "It is hard task",
    },
    {
      avatar: "😤",
      text: "I ma ready for that",
    },
  ];

  const [avatar, setAvatar] = useState(user.avatar ? user.avatar : "");
  const [username, setUsername] = useState(user.username ? user.username : "");
  const [answers, setAnswers] = useState(user.answers ? user.answers : []);
  const [totalScore, setTotalScore] = useState(
    user.totalScore ? user.totalScore : 0
  );

  const avatar_print = avatars_array.map((value) => {
    /*
        if (index == 0) {
            return (<option selected="selected" value={value}>{value}</option>);
        }else{
       */
    return (
      <option key={value.avatar} value={value.avatar}>
        {value.avatar} {value.text}
      </option>
    );
    //}
  });

  //console.log(avatar + ' ' + username);

  return (
    <>
      <h1>QUUUUIZZZ</h1>
      <h2>Your IQ under attack</h2>
      <div className={styles["main-page-container"]}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (username && avatar) {
              // console.log(avatar + ' ' + username);
              onChangePage(2);
              onStartWithUser({
                username,
                avatar,
                answers,
                totalScore,
              });
            } else {
              // console.log(avatar + ' ' + username);
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
