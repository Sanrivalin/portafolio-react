import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
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
