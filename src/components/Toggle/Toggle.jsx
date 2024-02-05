import "./Toggle.module.css";
import styles from "./Toggle.module.css";
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
