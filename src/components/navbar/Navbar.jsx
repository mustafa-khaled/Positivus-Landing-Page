import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.navBar} ${
        isScrolled ? styles.scrolled : ""
      } container`}>
      <div>
        <a href="#home">
          <img src={Logo} alt="Logo" className={styles.logo} />
        </a>
      </div>
      <ul className={`${styles.links} ${isActive ? styles.activeList : ""}`}>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#about">Use Cases</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <button type="button" className={styles.nabBtn}>
            Request A Quote
          </button>
        </li>
      </ul>
      <div className={styles.menuToggle} onClick={handleToggle}>
        <i
          className={`fa-solid ${
            isActive ? "fa-times" : "fa-bars-staggered"
          }`}></i>
      </div>
    </div>
  );
};

export default Navbar;
