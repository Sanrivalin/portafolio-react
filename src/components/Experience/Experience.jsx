import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { useTranslation } from 'react-i18next';

export const Experience = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t('experienceTitle')}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => {
            return (
              <div key={index} className={styles.skill}>
                <div className={`${styles.skillImageContainer} ${
                    hoveredIndex === index ? styles.spin : ""
                  }`} onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
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
        </ul>
      </div>
    </section>
  );
};