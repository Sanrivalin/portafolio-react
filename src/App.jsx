import React,{ useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Toggle } from "./components/Toggle/Toggle";



<<<<<<< HEAD

=======
>>>>>>> 04041326612fb459df71b4f0903da3a5c775b193
function App() {
  // const preference = window.matchMedia("(prefers-color-schema: dark)").matches;
  const [isDark,setIsDark] = useLocalStorage("isDark",false);

 


  return (
    <div className={styles.App} data-theme={isDark ? "dark" : "light"}>     
      <Toggle isChecked={isDark} handleChange={()=>setIsDark(!isDark)} />
      <Navbar />      
      <Hero  />
      <About />
      <Experience />
      <Projects />
      <Contact />

      
  
    </div>
  );
}

export default App;