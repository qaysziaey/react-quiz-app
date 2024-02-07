import './Learn_more.module.css'
import { languageList } from "../data/language.js";

export function Learn_more({language}){
    
    return (
        <>
            <h1>QUUUUIZZZ</h1>
            <p>{languageList[language].Learn_more.text1}</p>
            <p>{languageList[language].Learn_more.text2}</p>
        </>
    )

}