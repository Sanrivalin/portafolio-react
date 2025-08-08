import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t('aboutTitle')}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/sobremi.png")}
          alt="Someone sitting crossed legs with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon3.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>{t('aboutSubTitle1')}</h3>
              <p>{t('aboutSubContent1')}</p>
            </div>
          </li><li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon4.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>{t('aboutSubTitle2')}</h3>
              <p>
                {t('aboutSubContent2')}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon3.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>{t('aboutSubTitle3')}</h3>
              <p>
                {t('aboutSubContent3')}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};