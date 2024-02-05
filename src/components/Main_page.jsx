import { useState } from "react";
import styles from "./Main_page.module.css";

export function Main_page({ user, onChangePage, onStartWithUser }) {

    const avatars_array = [
        "",
        "😛",
        "🙁",
        "🥶",
        "🥵",
    ];

    const [avatar, setAvatar] = useState(user.avatar?user.avatar:'');
    const [username, setUsername] = useState(user.username?user.username:'');
    
    const avatar_print = avatars_array.map((value) => {
        /*
        if (index == 0) {
            return (<option selected="selected" value={value}>{value}</option>);
        }else{
       */     
        return <option value={value}>{value}</option>; 
        //}
    });

    //console.log(avatar + ' ' + username);
    
    return (
        <>
        <h1>QUUUUIZZZ</h1>
        <h2>Your IQ under attack</h2>
        <div class="main_page_block">
            <form id="user_data" onSubmit={(event) => {
                    event.preventDefault()   
                    if(username && avatar){
                        // console.log(avatar + ' ' + username);
                        onChangePage(2);
                        onStartWithUser(
                            {
                                username,
                                avatar
                            }
                        );
                    }else{
                         // console.log(avatar + ' ' + username);
                          alert('Enter Your name and choose Avatar')
                    }
                }}>
                <div>
                    <label htmlFor="avatar">
                        Your Avatar
                        <select 
                            name="avatar" 
                            className={styles.avatar_select}
                            value={avatar}
                            onChange={(event) => {
                                setAvatar(event.target.value)
                            }}
                        >
                            {avatar_print}
                        </select>
                    </label>
                </div>
                <div>
                    <label htmlFor="user_name">
                        Your Name
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => {
                            setUsername(event.target.value)
                        }}
                        name="user_name"
                        id="user"
                    />
                    </label>
                </div>
                <button class="button" type="submit">START</button>
            </form>

            <button
                class="button" 
                onClick={() => {
                    onChangePage(4);
                }}
            >
                Learn more
            </button>
        </div>
        </>
    );
}