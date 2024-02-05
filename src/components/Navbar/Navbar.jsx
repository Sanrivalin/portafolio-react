import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";
import LanguageSelector from "./Language/LanguageSelector";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar} data-theme={styles.theme}>
      <a className={styles.title} href="/">
        {t("navTitulo")}
      </a>
      {/* Language */}
      <LanguageSelector />
=======

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  
  return (
    <nav className={styles.navbar} data-theme={styles.theme}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
>>>>>>> 04041326612fb459df71b4f0903da3a5c775b193
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon2.png")
              : getImageUrl("nav/menuIcon2.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
<<<<<<< HEAD
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">{t("navOption1")}</a>
          </li>
          <li>
            <a href="#experience">{t("navOption2")}</a>
          </li>
          <li>
            <a href="#projects">{t("navOption3")}</a>
          </li>
          <li>
            <a href="#contact">{t("navOption4")}</a>
          </li>
          {/* <li>
            <a href="react-portfolio/assets/cvsantiagorivasmolinajan19_2024.pdf" download="CV_SantiagoRivasMolina.pdf">CV</a>
          </li>                    */}
        </ul>
      </div>
    </nav>
  );
};
=======
          onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="react-portfolio/assets/cvsantiagorivasmolinajan19_2024.pdf" download="CV_SantiagoRivasMolina.pdf">CV</a>
          </li>                   
        </ul>        
      </div>
    </nav>
  );
};
>>>>>>> 04041326612fb459df71b4f0903da3a5c775b193
