import React, { useState } from "react";
import styles from "./ProjectsCard.module.css";
import { getImageUrl } from "../../utils";

import { useTranslation } from "react-i18next";

export const ProjectCard = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* First Card */}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("projects/Strategy.jpg")}
            alt={t("projectsImage1Alt")}
            className={styles.image}
          />
        </div>
        <h3 className={styles.title}>{t("projectsTitle1")}</h3>
        <p className={styles.description}>{t("projectDescriptionA")}</p>

        <ul>
          <li className={styles.subtitle}>{t("projectDescriptionAul")}</li>
          <li className={styles.subtitle}>{t("projectDescriptionAul2")}</li>
          <li className={styles.subtitle}>{t("projectDescriptionAul3")}</li>
        </ul>
      </div>
      {/* Second Card */}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("projects/GA4 (1).jpg")}
            alt={t(" projectsImage1Alt")}
            className={styles.image}
          />
        </div>
        <h3 className={styles.title}>{t("projectsTitle2")}</h3>
        <p className={styles.description}>{t("projectDescriptionB")}</p>

        <ul>
          <li className={styles.subtitle}>{t("projectDescriptionBul")}</li>
          <li className={styles.subtitle}>{t("projectDescriptionBul2")}</li>
          <li className={styles.subtitle}>{t("projectDescriptionBul3")}</li>
        </ul>
      </div>
      {/* Third Card */}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("projects/Audience (2).jpg")}
            alt={t(" projectsImage1Alt")}
            className={styles.image}
          />
        </div>
        <h3 className={styles.title}>{t("projectsTitle3")}</h3>
        <p className={styles.description}>{t("projectDescriptionC")}</p>

        <ul>
          <li className={styles.subtitle}>{t("projectDescriptionSEO1")}</li>
          <li className={styles.subtitle}>{t("projectDescriptionSEO2")}</li>
          <li className={styles.subtitle}>{t("projectDescriptionSEO3")}</li>
        </ul>
      </div>
    </>
  );
};
