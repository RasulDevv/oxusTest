import styles from "./Finish.module.css";

const Finish = () => {
  return (
    <div className={styles.finish}>
          <button className={styles.btn} onClick={() => window.location.reload()}>reload page</button>
    </div>
  )
}

export default Finish
