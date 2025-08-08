import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t("experienceTitle")}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => {
            return (
              <div key={index} className={styles.skill}>
                <div className={styles.skillImageContainer}>
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
              src={getImageUrl("history/LogosMeta_1.png")}
              alt="logo de Meta"
            />
            <div className={styles.historyItemDetails}>
              <h3>{t("experienceSubTitleAero")}</h3>
              <p>{t("experienceDateAero")}</p>
              <ul>
                <li>{t("experienceSubContent1Aero")}</li>
                <li>{t("experienceSubContent2Aero")}</li>
                <li>{t("experienceSubContent3Aero")}</li>
              </ul>
            </div>
          </li>

          <li className={styles.historyItem}>
            <img
              src={getImageUrl("history/teleperformanceRedimensianada.png")}
              alt="logo TP"
            />
            <div className={styles.historyItemDetails}>
              <h3>{t("experienceSubTitleTP")}</h3>
              <p>{t("experienceDateTP")}</p>
              <ul>
                <li>{t("experienceSubContent1TP")}</li>
                <li>{t("experienceSubContent2TP")}</li>
                <li>{t("experienceSubContent3TP")}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
