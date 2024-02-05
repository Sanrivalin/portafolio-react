import React from "react";
<<<<<<< HEAD
=======

>>>>>>> 04041326612fb459df71b4f0903da3a5c775b193
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
<<<<<<< HEAD
import { useTranslation } from 'react-i18next';

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t('experienceTitle')}</h2>
=======

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
>>>>>>> 04041326612fb459df71b4f0903da3a5c775b193
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
<<<<<<< HEAD
        <li className={styles.historyItem}>
            <img
              src={getImageUrl("history/teleperformanceRedimensianada.png")}
              alt="logo"
            />
            <div className={styles.historyItemDetails}>
              <h3>
                {t('experienceSubTitleTP')}
              </h3>
              <p>{t('experienceDateTP')}</p>
              <ul>
                <li>
                  {t('experienceSubContent1TP')}
                </li>
                <li>
                  {t('experienceSubContent2TP')}
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.historyItem}>
            <img
              src={getImageUrl("history/AerocivilLogoTrans (3).png")}
              alt="logo"
            />
            <div className={styles.historyItemDetails}>
              <h3>
                {t('experienceSubTitleAero')}
              </h3>
              <p>{t('experienceDateAero')}</p>
              <ul>
                <li>
                  {t('experienceSubContent1Aero')}
                </li>
                <li>
                  {t('experienceSubContent2Aero')}
                </li>
              </ul>
            </div>
          </li>
=======
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
>>>>>>> 04041326612fb459df71b4f0903da3a5c775b193
        </ul>
      </div>
    </section>
  );
};