import dog from "./puppy.png";
import styles from "./Puppy.module.css";
import IconPawNo from "./IconButtonNo";
// import IconPawYes from "./IconButtonYes";
import TransitionsModal from "./Modal";

export const Puppy = () => {
  return (
    <main>
      <div>
        <div className={styles.Photo}>
          <img src={dog} alt="paw" width="250" height="250" />
          <p>24th may 2023, London</p>
        </div>
      </div>
      <IconPawNo></IconPawNo>
      <TransitionsModal></TransitionsModal>
      {/* <IconPawYes></IconPawYes> */}
    </main>
  );
};
