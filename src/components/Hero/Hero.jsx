<<<<<<< HEAD
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
        <a href="santiagorivasmolina@gmail.com" className={styles.contactBtn}>
        {t('heroContact')}
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage3 (1) (1).png")}
=======

import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Santiago</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React JS and
          Laravel. Reach out if you'd like to learn more!
        </p>
        <a href="santiagorivasmolina@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage3.png")}
>>>>>>> 04041326612fb459df71b4f0903da3a5c775b193
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};