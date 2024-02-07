import { useState } from "react";
import "./App.css";

import { Main_page } from "./components/Main_page.jsx";
import { Question } from "./components/Question.jsx";
import { Results } from "./components/Results.jsx";
import { Learn_more } from "./components/Learn_more.jsx";
import { Werbung } from "./components/Werbung.jsx";

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

  function changePage(value) {
    setSelected_Page(value);
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
      <button onClick={changeLanguage}>Change Language</button>

      {selected_page !== 1 ? (
        <div className="closeProfileLine">
          <span className="avatarProfile">
            {user.avatar} <span>{user.username}</span>
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
          users={users}
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
