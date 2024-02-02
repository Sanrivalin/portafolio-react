import React, {useEffect} from 'react'
import styles from "./LanguageSelector.module.css";
import { useTranslation } from 'react-i18next';

const languages = [
    {code: "en", lang: "English"},
    {code: "es", lang: "Español"},
]



const LanguageSelector = () => {
  const {i18n} = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  
  };

  return <div className={styles.btnContainer}>
    {languages.map((lng) =>{
      return (<button className={lng.code === i18n.language ? styles.selected : ""} key={lng.code} onClick={()=>changeLanguage(lng.code)}>{lng.lang}</button>);
    })}
  </div>
  
}

export default LanguageSelector