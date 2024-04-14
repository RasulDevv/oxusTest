import styles from "./Finish.module.css";

const Finish = () => {
  return (
    <div className={styles.finish}>
          <p className={styles.text}>Ishtirokingiz uchun rahmat!</p>
          <button className={styles.btn} onClick={() => window.location.reload()}>reload page</button>
    </div>
  )
}

export default Finish
