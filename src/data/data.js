export const data_of_questions = {
  prizes_by_points: [
    {
      start: 0,
      end: 10,
      text: {
        EN: "You are looooser!! 💩",
        DE: "Du bist ein Loser!! 💩",
      },
    },
    {
      start: 10,
      end: 19,
      text: {
        EN: "You are not looooser!! 😵‍💫",
        DE: "Du bist kein Loser!! 😵‍💫",
      },
    },
    {
      start: 20,
      end: 29,
      text: {
        EN: "You are a normal tip!! 🤠",
        DE: "Du bist normal!! 🤠",
      },
    },
    {
      start: 30,
      end: 39,
      text: {
        EN: "You are a good man!! 😤",
        DE: "Du bist ein guter Mensch!! 😤",
      },
    },
    {
      start: 40,
      end: 100,
      text: {
        EN: "You are Superman!! 🤡",
        DE: "Du bist Superman!! 🤡",
      },
    },
    {
      start: 100,
      end: 150,
      text: {
        EN: "HyperChicken 🐔",
        DE: "HyperHuhn 🐔",
      },
    },
  ],
  questions: [
    {
      id: 1,
      question: {
        text: {
          EN: "How do you select an element with id=demo?",
          DE: "Wie wählt man ein Element mit id=demo aus?",
        },
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: {
            EN: "#demo",
            DE: "#demo",
          },
          correct: true,
        },
        {
          number: 2,
          text: {
            EN: ".demo",
            DE: ".demo",
          },
          correct: false,
        },
        {
          number: 3,
          text: {
            EN: "Demo",
            DE: "Demo",
          },
          correct: false,
        },
        {
          number: 4,
          text: {
            EN: "*demo",
            DE: "*demo",
          },
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: {
        text: {
          EN: "What does CSS stand for?",
          DE: "Wofür steht CSS?",
        },
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: {
            EN: "Computer Style Sheets",
            DE: "Computer Stil Blätter",
          },
          correct: false,
        },
        {
          number: 2,
          text: {
            EN: "Cascading Style Sheets",
            DE: "Kaskadierende Stil Blätter",
          },
          correct: true,
        },
        {
          number: 3,
          text: {
            EN: "Colored Style Sheets",
            DE: "Farbige Stil Blätter",
          },
          correct: false,
        },
        {
          number: 4,
          text: {
            EN: "Creative Style Sheets",
            DE: "Kreative Stil Blätter",
          },
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: {
        text: {
          EN: "Which CSS syntax is correct?",
          DE: "Welche CSS-Syntax ist korrekt?",
        },
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: {
            EN: "{body: color=black;}",
            DE: "{body: Farbe=Schwarz;}",
          },
          correct: false,
        },
        {
          number: 2,
          text: {
            EN: " {body; color=black;}",
            DE: " {body; Farbe=Schwarz;}",
          },
          correct: false,
        },
        {
          number: 3,
          text: {
            EN: "body {color: black;}",
            DE: "body {Farbe: Schwarz;}",
          },
          correct: true,
        },
        {
          number: 4,
          text: {
            EN: "body: color=black;",
            DE: "body: Farbe=Schwarz;",
          },
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: {
        text: {
          EN: "What is the default value for position?",
          DE: "Was ist der Standardwert für die Position?",
        },
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: {
            EN: "relative",
            DE: "relativ",
          },
          correct: false,
        },
        {
          number: 2,
          text: {
            EN: "fixed",
            DE: "fixiert",
          },
          correct: false,
        },
        {
          number: 3,
          text: {
            EN: "absolute",
            DE: "absolut",
          },
          correct: false,
        },
        {
          number: 4,
          text: {
            EN: "static",
            DE: "statisch",
          },
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: {
        text: {
          EN: "What is HTML?",
          DE: "Was ist HTML?",
        },
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: {
            EN: "HTML",
            DE: "HTML",
          },
          correct: false,
        },
        {
          number: 2,
          text: {
            EN: "Hyper Dancing with a Lamp",
            DE: "Hyper Tanzen mit einer Lampe",
          },
          correct: false,
        },
        {
          number: 3,
          text: {
            EN: "Hyper Text Markup Language",
            DE: "Hypertext-Auszeichnungssprache",
          },
          correct: true,
        },
        {
          number: 4,
          text: {
            EN: "Higher Tone Muted Lighter",
            DE: "Höhere Ton Gedämpfter Leichter",
          },
          correct: false,
        },
        {
          number: 5,
          text: {
            EN: "Horizontal Text Must Lost",
            DE: "Horizontaler Text Muss Verloren Gehen",
          },
          correct: false,
        },
      ],
    },
  ],
};
