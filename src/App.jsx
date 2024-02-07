import { useState } from "react";
import "./App.css";

import { Main_page } from "./components/Main_page.jsx";
import { Question } from "./components/Question.jsx";
import { Results } from "./components/Results.jsx";
import { Learn_more } from "./components/Learn_more.jsx";
import { Werbung } from "./components/Werbung.jsx";
import { languageList } from "./data/language.js";

function App() {
  const [count, setCount] = useState(0);
  const [selected_page, setSelected_Page] = useState(1);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [language, setLanguage] = useState("EN");

  //  const [pullOfQuestions, setPullOfQuestions] = useState([2]); Random Maybe

  //id of questuions
  /*
  users = [
    {
      username: 'skad',
      avatar: props.avatar,
      result: props.totalScore  
    },
    {
      username: props.username,
      avatar: props.avatar,
      result: props.totalScore  
    }
  ]
*/
  function addToReusltLists(){

    let new_user = true;
    let temp_users = users;

    //console.log(user)

    temp_users.forEach((value, index) => {
      if (value.username == user.username && value.avatar == user.avatar) {
        temp_users[index].answers = user.answers;
        temp_users[index].result = user.result;
        new_user = false;
        return false;
      }
    });

    if (new_user) {
      temp_users.push({
        username: user.username,
        avatar: user.avatar,
        answers: user.answers,
        result: user.result,
      });
    }
  //  console.log(temp_users);
    setUsers(temp_users);

  }

  function changePage(value) {
    setSelected_Page(value);
    if (value === 3) {
      addToReusltLists();
    }
  }

  function startWithUser(props) {
    setUser({
      username: props.username,
      avatar: props.avatar,
      answers: props.answers,
      result: props.totalScore,
    });
  }
  function changeLanguage() {
    setLanguage(language === "EN" ? "DE" : "EN");
  }

  //  console.log(user)
  //console.log(selected_page)

  return (
    <div className="app-main-container">
      <button className="btn_language" onClick={changeLanguage}>{languageList[language].App.btn_change_lang}</button>

      {selected_page !== 1 ? (
        <div className="app-main-header-inside">
          <span className="avatarProfile">
            <span>{user.avatar}</span> <span>{user.username}</span>
          </span>
          <button
            className="close-btn"
            onClick={(event) => {
              let ask = 1; //confirm('GO TO MAIN?')
              if (ask) {
                setSelected_Page(1);
              }
            }}
          >
            <span>&#10005;</span>
          </button>
        </div>
      ) : (
        ""
      )}

      {selected_page === 5 ? (
        <Learn_more language={language} />
      ) : selected_page === 2 ? (
        <Question
          user={user}
          onChangePage={changePage}
          onStartWithUser={startWithUser}
          language={language}
        />
      ) : selected_page === 4 ? (
        <Results
          user={user}
          users={users}
          onChangePage={changePage}
          language={language}
        />
      ) : selected_page === 3 ? (
        <Werbung onChangePage={changePage} language={language} />
      ) : (
        <Main_page
          user={user}
          onChangePage={changePage}
          onStartWithUser={startWithUser}
          language={language}
        />
      )}
    </div>
  );
}

export default App;
