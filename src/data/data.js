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
        points_for_right_answer: 25,
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
        points_for_right_answer: 25,
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
          text: "Colored Style Sheets",
          richtich: false,
        },
        {
          number: 4,
          text: "Creative Style Sheets",
          richtich: false,
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
          richtich: false,
        },
        {
          number: 2,
          text: " {body; color=black;}",
          richtich: false,
        },
        {
          number: 3,
          text: "body {color: black;}",
          richtich: true,
        },
        {
          number: 4,
          text: "body: color=black;",
          richtich: false,
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
          richtich: false,
        },
        {
          number: 2,
          text: "fixed",
          richtich: false,
        },
        {
          number: 3,
          text: "absolute",
          richtich: false,
        },
        {
          number: 4,
          text: "static",
          richtich: true,
        },
      ],
    },
  ],
};
