import styles from "./Lost.module.css";
import BasicDatePicker from "./DataPicker";

export const Lost = () => {
  return (
    <main className={styles.Table_Page}>
      <h1>Settings</h1>
      <div className={styles.Table_Header}>
        <p>Discovery Settings</p>
      </div>
      <div className={styles.Table_ContainerFirst}>
        <p>Location</p>
      </div>
      <div className={styles.Table_ContainerSecond}>
        <p>Time</p>
        <BasicDatePicker></BasicDatePicker>
      </div>
    </main>
  );
};
