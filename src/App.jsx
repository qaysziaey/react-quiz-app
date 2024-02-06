import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

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
  const [pull_of_questions, setPull_of_questions] = useState([]);

  function changePage(value) {
    setSelected_Page(value);
  }

  function startWithUser(props) {
    setUser({
      username: props.username,
      avatar: props.avatar,
    });
  }

  return (
    <div className="app-main-container">
      {selected_page !== 1 && (
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
      )}

      {selected_page === 5 ? (
        <Learn_more />
      ) : selected_page === 2 ? (
        <Question
          user={user}
          pull_of_questions={pull_of_questions}
          onChangePage={changePage}
        />
      ) : selected_page === 4 ? (
        <Results
          user={user}
          users={users}
          userid={user.id}
          onChangePage={changePage}
        />
      ) : selected_page === 3 ? (
        <Werbung />
      ) : (
        <Main_page
          user={user}
          onChangePage={changePage}
          onStartWithUser={startWithUser}
        />
      )}
    </div>
  );
}

export default App;
