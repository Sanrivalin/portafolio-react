import "./Toggle.module.css";
import styles from "./Toggle.module.css";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";

export const Toggle = ({ handleChange, isChecked }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id="check"
        className={styles.toggle}
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">{t("navToggle")}</label>
    </div>
  );
};
=======

export const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className={styles.container}>
            <input type="checkbox"
             id="check" 
             className={styles.toggle}
             onChange={handleChange} 
             checked={isChecked}
            />
            <label htmlFor="check">Dark Mode</label>
        </div>
    )
}
>>>>>>> 04041326612fb459df71b4f0903da3a5c775b193
