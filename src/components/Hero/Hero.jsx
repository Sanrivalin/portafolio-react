import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('heroGreeting')}</h1>
        <p className={styles.description}>
        {t('heroParagraph')}
        </p>
        <a href="#contact" id="contact_1" className={styles.contactBtn}>
        {t('heroContact')}
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="An Avatar greeting"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};