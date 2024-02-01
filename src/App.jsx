import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { Main_page } from './components/Main_page.jsx'
import { Question } from './components/Question.jsx'
import { Results } from './components/Results.jsx'
import { Learn_more } from './components/Learn_more.jsx'
import { Werbung } from './components/Werbung.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [selected_page, setSelected_Page] = useState(2)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [pull_of_questions, setPull_of_questions] = useState([])

  return (
    <>
      <div className='All_app'>
        {
          selected_page==5?
            <Learn_more />:
          selected_page==2?
            <Question user={user} pull_of_questions={pull_of_questions} />:
          selected_page==4?
            <Results users={users} userid={user.id} />:
          selected_page==3?
            <Werbung />:
          <Main_page />
        }
        <div>
        </div>
      </div>
    </>
  )
}

export default App
