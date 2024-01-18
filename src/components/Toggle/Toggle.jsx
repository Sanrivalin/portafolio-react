import "./Toggle.module.css";
import styles from "./Toggle.module.css";

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