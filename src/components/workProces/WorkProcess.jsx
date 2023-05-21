import { useState } from "react";
import styles from "./workProcess.module.css";

const WorkProcess = () => {
  const [activeBoxes, setActiveBoxes] = useState([]);

  const handleClick = (index) => {
    if (activeBoxes.includes(index)) {
      setActiveBoxes(activeBoxes.filter((boxIndex) => boxIndex !== index));
    } else {
      setActiveBoxes([...activeBoxes, index]);
    }
  };

  return (
    <div className={`${styles.WorkProcess} container section_margin`}>
      <div className="text">
        <h2 className="main_heading">Our Working Process</h2>
        <p>
          Step-by-Step Guide to Achieving
          <br />
          Your Business Goals
        </p>
      </div>
      <div>
        <div
          className={`${styles.box} ${
            activeBoxes.includes(0) ? styles.activeBox : ""
          }`}>
          <div className={styles.head}>
            <h2>Consultation</h2>
            <i
              className={`fa-solid ${
                activeBoxes.includes(0) ? "fa-minus" : "fa-plus"
              }`}
              onClick={() => handleClick(0)}></i>
          </div>
          <p
            className={`box p ${
              !activeBoxes.includes(0) ? styles.removeP : ""
            }`}>
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </p>
        </div>
        <div
          className={`${styles.box} ${
            activeBoxes.includes(1) ? styles.activeBox : ""
          }`}>
          <div className={styles.head}>
            <h2>Research and Strategy Development</h2>
            <i
              className={`fa-solid ${
                activeBoxes.includes(1) ? "fa-minus" : "fa-plus"
              }`}
              onClick={() => handleClick(1)}></i>
          </div>
          <p
            className={`box p ${
              !activeBoxes.includes(1) ? styles.removeP : ""
            }`}>
            During the research and strategy development phase, we will analyze
            market trends, competition, and consumer behavior to create a
            comprehensive plan that aligns with your business goals.
          </p>
        </div>
        <div
          className={`${styles.box} ${
            activeBoxes.includes(2) ? styles.activeBox : ""
          }`}>
          <div className={styles.head}>
            <h2>Implementation</h2>
            <i
              className={`fa-solid ${
                activeBoxes.includes(2) ? "fa-minus" : "fa-plus"
              }`}
              onClick={() => handleClick(2)}></i>
          </div>
          <p
            className={`box p ${
              !activeBoxes.includes(2) ? styles.removeP : ""
            }`}>
            In the implementation phase, we will execute the planned strategies,
            utilizing various marketing channels and tools to reach your target
            audience effectively. Regular monitoring and adjustments will be
            made to ensure optimal results.
          </p>
        </div>
        <div
          className={`${styles.box} ${
            activeBoxes.includes(3) ? styles.activeBox : ""
          }`}>
          <div className={styles.head}>
            <h2>Monitoring and Optimization</h2>
            <i
              className={`fa-solid ${
                activeBoxes.includes(3) ? "fa-minus" : "fa-plus"
              }`}
              onClick={() => handleClick(3)}></i>
          </div>
          <p
            className={`box p ${
              !activeBoxes.includes(3) ? styles.removeP : ""
            }`}>
            We continuously monitor the performance of your marketing campaigns,
            analyze the data, and make data-driven optimizations to ensure that
            your business is achieving its objectives and maximizing its return
            on investment (ROI).
          </p>
        </div>
        <div
          className={`${styles.box} ${
            activeBoxes.includes(4) ? styles.activeBox : ""
          }`}>
          <div className={styles.head}>
            <h2>Reporting and Communication</h2>
            <i
              className={`fa-solid ${
                activeBoxes.includes(4) ? "fa-minus" : "fa-plus"
              }`}
              onClick={() => handleClick(4)}></i>
          </div>
          <p
            className={`box p ${
              !activeBoxes.includes(4) ? styles.removeP : ""
            }`}>
            We provide regular reports and updates on the progress of your
            marketing campaigns. Our team remains in constant communication with
            you, addressing any queries or concerns and providing strategic
            recommendations for further improvement.
          </p>
        </div>
        <div
          className={`${styles.box} ${
            activeBoxes.includes(5) ? styles.activeBox : ""
          }`}>
          <div className={styles.head}>
            <h2>Continual Improvement</h2>
            <i
              className={`fa-solid ${
                activeBoxes.includes(5) ? "fa-minus" : "fa-plus"
              }`}
              onClick={() => handleClick(5)}></i>
          </div>
          <p
            className={`box p ${
              !activeBoxes.includes(5) ? styles.removeP : ""
            }`}>
            We believe in continuous improvement. Based on the insights gained
            from monitoring and analysis, we refine our strategies and optimize
            your marketing efforts to keep your business ahead of the
            competition and achieve sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
