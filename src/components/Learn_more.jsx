import './Learn_more.module.css'

export function Learn_more(props){
    
    

    const langFor = {
        EN:
        {
            text1: "is a bester game of the world!!!",
            text2: "And we make it!"
        },
        DE:
        {
            text1: "ist das beste Spiel der Welt!!!",
            text2: "Und wir schaffen es!"
        },
    }

    return (
        <>
            <h1>QUUUUIZZZ</h1>
            <p>{langFor[props.language].text1}</p>
            <p>{langFor[props.language].text2}</p>
        </>
    )

}