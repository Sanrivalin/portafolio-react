import React from "react";
import styles from "./Projects.module.css";

import { ProjectCard } from "./ProjectCard";
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t('projectsTitle')}</h2>
      <div className={styles.projects}>
      <ProjectCard  />;
      </div>
    </section>
  );
};