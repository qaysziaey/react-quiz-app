export const data_of_questions = {
  prizes_by_points: [
    {
      start: 0,
      end: 10,
      text: "You are looooser!! 💩",
    },
    {
      start: 10,
      end: 19,
      text: "You are not looooser!! 😵‍💫",
    },
    {
      start: 20,
      end: 29,
      text: "You are normal tip!! 🤠",
    },
    {
      start: 30,
      end: 39,
      text: "You are good man!! 😤",
    },
    {
      start: 40,
      end: 100,
      text: "You are Superman!! 🤡",
    },
    {
      start: 100,
      end: 150,
      text: "HyperChicken 🐔",
    },
  ],
  questions: [
    {
      id: 1,
      question: {
        text: "Wie selektiert man ein Element mit id=demo?",
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: "#demo",
          correct: true,
        },
        {
          number: 2,
          text: ".demo",
          correct: false,
        },
        {
          number: 3,
          text: "Demo",
          correct: false,
        },
        {
          number: 4,
          text: "*demo",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: {
        text: "Wofür steht CSS?",
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: "Computer Style Sheets",
          correct: false,
        },
        {
          number: 2,
          text: "Cascading Style Sheets",
          correct: true,
        },
        {
          number: 3,
          text: "Colored Style Sheets",
          correct: false,
        },
        {
          number: 4,
          text: "Creative Style Sheets",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: {
        text: "Welche CSS Syntax ist korrekt?",
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: "{body: color=black;}",
          correct: false,
        },
        {
          number: 2,
          text: " {body; color=black;}",
          correct: false,
        },
        {
          number: 3,
          text: "body {color: black;}",
          correct: true,
        },
        {
          number: 4,
          text: "body: color=black;",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: {
        text: "Was ist der Defaultwert für position?",
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: "relative",
          correct: false,
        },
        {
          number: 2,
          text: "fixed",
          correct: false,
        },
        {
          number: 3,
          text: "absolute",
          correct: false,
        },
        {
          number: 4,
          text: "static",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: {
        text: "Was ist HTML?",
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: "HTML",
          correct: false,
        },
        {
          number: 2,
          text: "Hyper Tanzen mit eine Lamp",
          correct: false,
        },
        {
          number: 3,
          text: "Hyper Text Markup Language",
          correct: true,
        },
        {
          number: 4,
          text: "Higher Tone Muted Lighter",
          correct: false,
        },
        {
          number: 5,
          text: "Horisontal Text Must Lost",
          correct: false,
        },
      ],
    },
  ],
};
