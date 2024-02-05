import React from "react";
<<<<<<< HEAD
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t('aboutTitle')}</h2>
=======

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
>>>>>>> 04041326612fb459df71b4f0903da3a5c775b193
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage3.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon3.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
<<<<<<< HEAD
            <h3>{t('aboutSubTitle1')}</h3>
              <p>{t('aboutSubContent1')}</p>
            </div>
          </li><li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon4.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>{t('aboutSubTitle2')}</h3>
              <p>
                {t('aboutSubContent2')}
=======
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon4.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
>>>>>>> 04041326612fb459df71b4f0903da3a5c775b193
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon3.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
<<<<<<< HEAD
              <h3>{t('aboutSubTitle3')}</h3>
              <p>
                {t('aboutSubContent3')}
=======
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
>>>>>>> 04041326612fb459df71b4f0903da3a5c775b193
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};