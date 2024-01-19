import React, { useState } from "react";
import styles from "./ProjectsCard.module.css";
import { getImageUrl } from "../../utils";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import Button from 'react-bootstrap/Button';
import projects from "../../data/projects.json";


export const ProjectCard = ({
  project: { title, imageSrc, description, description2, skills, demo, source },
}) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />

      </div>
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}<Button variant="link" className="text-dark link-offset-2 link-offset-3-hover " size="sm" onClick={() => setModalShow(true)}>
        More
      </Button></p>

      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        projectData={{ title, description2}}
      />
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Demo
        </a>
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Source
        </a>        
      </div>
     
    </div>
  );
};

