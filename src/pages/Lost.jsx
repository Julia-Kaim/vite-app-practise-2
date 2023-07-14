import styles from "./Lost.module.css";
import BasicDatePicker from "./DataPicker";
import TextInput from "./TextInput";
import GenderSelect from "./GenderSelect";
import SizeSelect from "./SizeSelect";

export const Lost = () => {
  return (
    <main className={styles.Table_Page}>
      <h1>Settings</h1>
      <div className={styles.Table_Header}>
        <p>Discovery Settings</p>
      </div>
      <div className={styles.Table_ContainerFirst}>
        <p>Location</p>
        <TextInput></TextInput>
      </div>
      <div className={styles.Table_ContainerSecond}>
        <p>Time</p>
        <BasicDatePicker></BasicDatePicker>
      </div>
      <div className={styles.Table_ContainerFirst}>
        <p>Gender</p>
        <GenderSelect></GenderSelect>
      </div>
      <div className={styles.Table_ContainerSecond}>
        <p>Age</p>
        <TextInput></TextInput>
      </div>
      <div className={styles.Table_ContainerFirst}>
        <p>Breed</p>
        <TextInput></TextInput>
      </div>
      <div className={styles.Table_ContainerSecond}>
        <p>Size</p>
        <SizeSelect></SizeSelect>
      </div>
      <div className={styles.Table_ContainerLast}>
        <p>Features</p>
        <TextInput></TextInput>
      </div>
    </main>
  );
};
