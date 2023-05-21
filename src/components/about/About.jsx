import styles from "./about.module.css";

import aboutImage from "../../assets/about.png";

const About = () => {
  return (
    <div className={`${styles.about} container section_margin`} id="about">
      <div className={styles.text}>
        <h2>Let’s make things happen</h2>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button type="button" className="btn">
          Get your free proposal
        </button>
      </div>
      <img src={aboutImage} alt="About Us" />
    </div>
  );
};

export default About;
