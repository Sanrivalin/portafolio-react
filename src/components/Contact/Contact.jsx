import React from 'react';
import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIconBlack2.png")} alt="Email Icon" />
                <a className={styles.click} target="_blank" rel="noopener noreferrer" href="mailto:santiagorivasmolina@gmail.com">santiagorivasmolina@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIconBlack2.png")} alt="Linkedin Icon" />
                <a className={styles.click} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sanrivalina/">www.linkedin.com/in/sanrivalina/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIconBlack2.png")} alt="Email Icon" />
                <a className={styles.click} target="_blank" rel="noopener noreferrer" href="https://github.com/Sanrivalin">github.com/Sanrivalin</a>
            </li>
        </ul>

    </footer>
  );
};

