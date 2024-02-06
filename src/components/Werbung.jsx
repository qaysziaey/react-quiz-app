import styles from "./Werbung.module.css";

export function Werbung(props) {
  return (
    <>
      <div className={styles["werbung-container"]}>
        {/* <h1>Werbung</h1> */}
        <p>Invite friends & win</p>
        <h2 className={styles["winn-prize"]}>50$</h2>

        <img
          src="https://images.unsplash.com/photo-1669951584304-8da02ea5a54f?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <button className="button">Close Ad</button>
      </div>
    </>
  );
}
