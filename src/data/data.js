export const data_of_questions =
{
    prizes_by_points:[
        {
            start: 0,
            end: 10, 
            text: "You are looooser!! 💩"
        },
        {
            start: 10,
            end: 19, 
            text: "You are not looooser!! 😵‍💫"
        },
        {
            start: 20,
            end: 29, 
            text: "You are normal tip!! 🤠"
        },
        {
            start: 30,
            end: 39, 
            text: "You are good man!! 😤"
        },
        {
            start: 40,
            end: 100, 
            text: "You are Superman!! 🤡"
        },
    ],
    questions:[
        {
            id: 1,
            question: {
                text: "Wie viel und wann?",
                points_for_right_answer: 10,
            },
            answers:[
                {
                    id: 1,
                    text: "100 und Heute",
                    richtich: true,
                },
                {
                    id: 2,
                    text: "10 und Zukunft",
                    richtich: false
                },
                {
                    id: 3,
                    text: "50 und Gestern",
                    richtich: false
                }
            ]
        },
        {
            id: 1,
            question: {
                text: "Wo und wie?",
                points_for_right_answer: 15,
            },
            answers:[
                {
                    id: 1,
                    text: "Stadt und mit Bus",
                    richtich: false,
                },
                {
                    id: 2,
                    text: "Dorf und mit Traktor",
                    richtich: true,
                },
                {
                    id: 3,
                    antwort: "Meer und mit Auto",
                    text: false
                }
            ]
        }
    ]   
}