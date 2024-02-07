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
  return (
    <div className="app-main-container">
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
        <Learn_more />
      ) : selected_page === 2 ? (
        <Question
          user={user}
          onChangePage={changePage}
          onStartWithUser={startWithUser}
        />
      ) : selected_page === 4 ? (
        <Results
          user={user}
          users={users}
          onChangePage={changePage}
          onStartWithUser={startWithUser}
        />
      ) : selected_page === 3 ? (
        <Werbung onChangePage={changePage} />
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
