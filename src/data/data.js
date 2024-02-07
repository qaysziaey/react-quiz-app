export const data_of_questions = {
  prizes_by_points: [
    {
      start: 0,
      end: 10,
      text: {
        english: "You are looooser!! 💩",
        german: "Du bist ein Loser!! 💩",
      },
    },
    {
      start: 10,
      end: 19,
      text: {
        english: "You are not looooser!! 😵‍💫",
        german: "Du bist kein Loser!! 😵‍💫",
      },
    },
    {
      start: 20,
      end: 29,
      text: {
        english: "You are a normal tip!! 🤠",
        german: "Du bist normal!! 🤠",
      },
    },
    {
      start: 30,
      end: 39,
      text: {
        english: "You are a good man!! 😤",
        german: "Du bist ein guter Mensch!! 😤",
      },
    },
    {
      start: 40,
      end: 100,
      text: {
        english: "You are Superman!! 🤡",
        german: "Du bist Superman!! 🤡",
      },
    },
    {
      start: 100,
      end: 150,
      text: {
        english: "HyperChicken 🐔",
        german: "HyperHuhn 🐔",
      },
    },
  ],
  questions: [
    {
      id: 1,
      question: {
        text: {
          english: "How do you select an element with id=demo?",
          german: "Wie wählt man ein Element mit id=demo aus?",
        },
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: {
            english: "#demo",
            german: "#demo",
          },
          correct: true,
        },
        {
          number: 2,
          text: {
            english: ".demo",
            german: ".demo",
          },
          correct: false,
        },
        {
          number: 3,
          text: {
            english: "Demo",
            german: "Demo",
          },
          correct: false,
        },
        {
          number: 4,
          text: {
            english: "*demo",
            german: "*demo",
          },
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: {
        text: {
          english: "What does CSS stand for?",
          german: "Wofür steht CSS?",
        },
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: {
            english: "Computer Style Sheets",
            german: "Computer Stil Blätter",
          },
          correct: false,
        },
        {
          number: 2,
          text: {
            english: "Cascading Style Sheets",
            german: "Kaskadierende Stil Blätter",
          },
          correct: true,
        },
        {
          number: 3,
          text: {
            english: "Colored Style Sheets",
            german: "Farbige Stil Blätter",
          },
          correct: false,
        },
        {
          number: 4,
          text: {
            english: "Creative Style Sheets",
            german: "Kreative Stil Blätter",
          },
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: {
        text: {
          english: "Which CSS syntax is correct?",
          german: "Welche CSS-Syntax ist korrekt?",
        },
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: {
            english: "{body: color=black;}",
            german: "{body: Farbe=Schwarz;}",
          },
          correct: false,
        },
        {
          number: 2,
          text: {
            english: " {body; color=black;}",
            german: " {body; Farbe=Schwarz;}",
          },
          correct: false,
        },
        {
          number: 3,
          text: {
            english: "body {color: black;}",
            german: "body {Farbe: Schwarz;}",
          },
          correct: true,
        },
        {
          number: 4,
          text: {
            english: "body: color=black;",
            german: "body: Farbe=Schwarz;",
          },
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: {
        text: {
          english: "What is the default value for position?",
          german: "Was ist der Standardwert für die Position?",
        },
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: {
            english: "relative",
            german: "relativ",
          },
          correct: false,
        },
        {
          number: 2,
          text: {
            english: "fixed",
            german: "fixiert",
          },
          correct: false,
        },
        {
          number: 3,
          text: {
            english: "absolute",
            german: "absolut",
          },
          correct: false,
        },
        {
          number: 4,
          text: {
            english: "static",
            german: "statisch",
          },
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: {
        text: {
          english: "What is HTML?",
          german: "Was ist HTML?",
        },
        points_for_right_answer: 25,
      },
      answers: [
        {
          number: 1,
          text: {
            english: "HTML",
            german: "HTML",
          },
          correct: false,
        },
        {
          number: 2,
          text: {
            english: "Hyper Dancing with a Lamp",
            german: "Hyper Tanzen mit einer Lampe",
          },
          correct: false,
        },
        {
          number: 3,
          text: {
            english: "Hyper Text Markup Language",
            german: "Hypertext-Auszeichnungssprache",
          },
          correct: true,
        },
        {
          number: 4,
          text: {
            english: "Higher Tone Muted Lighter",
            german: "Höhere Ton Gedämpfter Leichter",
          },
          correct: false,
        },
        {
          number: 5,
          text: {
            english: "Horizontal Text Must Lost",
            german: "Horizontaler Text Muss Verloren Gehen",
          },
          correct: false,
        },
      ],
    },
  ],
};
