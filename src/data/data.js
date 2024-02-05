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
  ],
  questions: [
    {
      id: 1,
      question: {
        text: "Wie selektiert man ein Element mit id=demo?",
        points_for_right_answer: 10,
      },
      answers: [
        {
          number: 1,
          text: "#demo",
          richtich: true,
        },
        {
          number: 2,
          text: ".demo",
          richtich: false,
        },
        {
          number: 3,
          text: "Demo",
          richtich: false,
        },
        {
          number: 4,
          text: "*demo",
          richtich: false,
        },
      ],
    },
    {
      id: 2,
      question: {
        text: "Wofür steht CSS?",
        points_for_right_answer: 15,
      },
      answers: [
        {
          number: 1,
          text: "Computer Style Sheets",
          richtich: false,
        },
        {
          number: 2,
          text: "Cascading Style Sheets",
          richtich: true,
        },
        {
          number: 3,
          antwort: "Colored Style Sheets",
          text: false,
        },
        {
          number: 4,
          antwort: "Creative Style Sheets",
          text: false,
        },
      ],
    },
    {
      id: 3,
      question: {
        text: "Welche CSS Syntax ist korrekt?",
        points_for_right_answer: 15,
      },
      answers: [
        {
          number: 1,
          text: "{body: color=black;}",
          richtich: false,
        },
        {
          number: 2,
          text: " {body; color=black;}",
          richtich: false,
        },
        {
          number: 3,
          antwort: "body {color: black;}",
          text: true,
        },
        {
          number: 4,
          antwort: "body: color=black;",
          text: false,
        },
      ],
    },
    {
      id: 4,
      question: {
        text: "Was ist der Defaultwert für position?",
        points_for_right_answer: 15,
      },
      answers: [
        {
          number: 1,
          text: "relative",
          richtich: false,
        },
        {
          number: 2,
          text: "fixed",
          richtich: false,
        },
        {
          number: 3,
          antwort: "absolute",
          text: false,
        },
        {
          number: 4,
          antwort: "static",
          text: true,
        },
      ],
    },
  ],
};
