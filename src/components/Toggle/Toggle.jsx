import "./Toggle.module.css";
import styles from "./Toggle.module.css";
import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../utils";

export const Toggle = ({ handleChange, isChecked }) => {
  // const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id="check"
        className={styles.toggle}
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check"><img className="imgToggle" src={getImageUrl("hero/moon.png")} alt="Cursor icon" /></label>
    </div>
  );
};
