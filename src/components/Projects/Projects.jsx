import React from "react";
<<<<<<< HEAD
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t("projectsTitle")}</h2>
      <div className={styles.projects}>
        <ProjectCard />;
      </div>
    </section>
  );
};
=======

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
>>>>>>> 04041326612fb459df71b4f0903da3a5c775b193
