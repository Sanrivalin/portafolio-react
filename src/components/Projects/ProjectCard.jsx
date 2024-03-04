import React, { useState } from "react";
import styles from "./ProjectsCard.module.css";
import { getImageUrl } from "../../utils";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

export const ProjectCard = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
  const [modalShow6, setModalShow6] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      {/* Rick And Morty Card */}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("projects/RickAndMortyPortfolio.png")}
            alt={t(" projectsImage1Alt")}
            className={styles.image}
          />
        </div>
        <h3 className={styles.title}>{t("projectsTitle1")}</h3>
        <p className={styles.description}>
          {t("projectDescriptionA")}
          <Button
            variant="link"
            className="text-dark link-offset-2 link-offset-3-hover"
            size="sm"
            onClick={() => setModalShow(true)}
          >
            {t("more")}
          </Button>
        </p>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          projectId={1}
        />

        <ul className={styles.skills}>
          <li className={styles.skill}>ReactJS</li>
          <li className={styles.skill}>JSON</li>
          <li className={styles.skill}>Bootstrap</li>
        </ul>
        <div className={styles.links}>
          <a
            href="https://rickandmorty-psi-flame.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t("demo")}
          </a>
          <a
            href="https://github.com/Sanrivalin/rickandmorty"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t("source")}
          </a>
        </div>
      </div>
      {/* Netflix Clone Card */}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("projects/netflixPortfolio.png")}
            alt={t(" projectsImage1Alt")}
            className={styles.image}
          />
        </div>
        <h3 className={styles.title}>{t("projectsTitle2")}</h3>
        <p className={styles.description}>
          {t("projectDescriptionB")}
          <Button
            variant="link"
            className="text-dark link-offset-2 link-offset-3-hover"
            size="sm"
            onClick={() => setModalShow2(true)}
          >
            {t("more")}
          </Button>
        </p>
        <MyVerticallyCenteredModal
          show={modalShow2}
          onHide={() => setModalShow2(false)}
          projectId={2}
        />

        <ul className={styles.skills}>
          <li className={styles.skill}>ReactJS</li>
          <li className={styles.skill}>Firebase</li>
          <li className={styles.skill}>Tailwind CSS</li>
        </ul>
        <div className={styles.links}>
          <a
            href="https://netflix-rose-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t("demo")}
          </a>
          <a
            href="https://github.com/Sanrivalin/netflix"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t("source")}
          </a>
        </div>
      </div>
      {/* Twitter Clone Card */}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("projects/TwitterPortfolio.png")}
            alt={t(" projectsImage1Alt")}
            className={styles.image}
          />
        </div>
        <h3 className={styles.title}>{t("projectsTitle3")}</h3>
        <p className={styles.description}>
          {t("projectDescriptionC")}
          <Button
            variant="link"
            className="text-dark link-offset-2 link-offset-3-hover"
            size="sm"
            onClick={() => setModalShow3(true)}
          >
            {t("more")}
          </Button>
        </p>
        <MyVerticallyCenteredModal
          show={modalShow3}
          onHide={() => setModalShow3(false)}
          projectId={3}
        />

        <ul className={styles.skills}>
          <li className={styles.skill}>Laravel</li>
          <li className={styles.skill}>MySQL</li>
          <li className={styles.skill}>CSS</li>
        </ul>
        <div className={styles.links}>
          <a
            href="https://idea-ochre.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t("demo")}
          </a>
          <a
            href="https://github.com/Sanrivalin/ideas"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t("source")}
          </a>
        </div>
      </div>
      {/* Pets And Love Card */}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("projects/PetsAndLovePortfolio.png")}
            alt={t(" projectsImage1Alt")}
            className={styles.image}
          />
        </div>
        <h3 className={styles.title}>{t("projectsTitle4")}</h3>
        <p className={styles.description}>
          {t("projectDescriptionD")}
          <Button
            variant="link"
            className="text-dark link-offset-2 link-offset-3-hover"
            size="sm"
            onClick={() => setModalShow4(true)}
          >
            {t("more")}
          </Button>
        </p>
        <MyVerticallyCenteredModal
          show={modalShow4}
          onHide={() => setModalShow4(false)}
          projectId={4}
        />

        <ul className={styles.skills}>
          <li className={styles.skill}>Wordpress</li>
          <li className={styles.skill}>PHP</li>
          <li className={styles.skill}>CSS</li>
        </ul>
        <div className={styles.links}>
          <a
            href="https://petsandlove.rf.gd/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t("demo")}
          </a>
          <a
            href="https://github.com/Sanrivalin/petslove"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t("source")}
          </a>
        </div>
      </div>
      {/* Encryptor and Decryptor Card */}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("projects/DecryptorPortfolio.png")}
            alt={t(" projectsImage1Alt")}
            className={styles.image}
          />
        </div>
        <h3 className={styles.title}>{t("projectsTitle5")}</h3>
        <p className={styles.description}>
          {t("projectDescriptionE")}
          <Button
            variant="link"
            className="text-dark link-offset-2 link-offset-3-hover"
            size="sm"
            onClick={() => setModalShow5(true)}
          >
            {t("more")}
          </Button>
        </p>
        <MyVerticallyCenteredModal
          show={modalShow5}
          onHide={() => setModalShow5(false)}
          projectId={5}
        />

        <ul className={styles.skills}>
          <li className={styles.skill}>JavaScript</li>
          <li className={styles.skill}>CSS</li>
          <li className={styles.skill}>HTML</li>
        </ul>
        <div className={styles.links}>
          <a
            href="https://encriptador-alura-topaz.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t("demo")}
          </a>
          <a
            href="https://github.com/Sanrivalin/encriptadorAlura/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t("source")}
          </a>
        </div>
      </div>

      {/* Shopping Car Card */}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("projects/ShoppingCartPortfolio.png")}
            alt={t(" projectsImage1Alt")}
            className={styles.image}
          />
        </div>
        <h3 className={styles.title}>{t("projectsTitle6")}</h3>
        <p className={styles.description}>
          {t("projectDescriptionF")}
          <Button
            variant="link"
            className="text-dark link-offset-2 link-offset-3-hover"
            size="sm"
            onClick={() => setModalShow6(true)}
          >
            {t("more")}
          </Button>
        </p>
        <MyVerticallyCenteredModal
          show={modalShow6}
          onHide={() => setModalShow6(false)}
          projectId={6}
        />

        <ul className={styles.skills}>
          <li className={styles.skill}>JavaScript</li>
          <li className={styles.skill}>HTML</li>
          <li className={styles.skill}>CSS</li>
        </ul>
        <div className={styles.links}>
          <a
            href="https://shopping-cart-nine-chi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t("demo")}
          </a>
          <a
            href="https://github.com/Sanrivalin/shoppingCart"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t("source")}
          </a>
        </div>
      </div>
    </>
  )
};
