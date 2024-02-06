import styles from "./Results.module.css";

export function Results({ user, pull_of_questions }) {
  return (
    <>
      <div className={styles.root}>
        <h1 className={styles.score}>Your results</h1>
      </div>
      <h1>Your results</h1>
      <div className={styles.massage}>You scored 8 our of 10!</div>
      <button
        className={styles.button}
        onClick={() => window.location.reload()}
      >
        retry 🦥
      </button>
    </>
  );
}
