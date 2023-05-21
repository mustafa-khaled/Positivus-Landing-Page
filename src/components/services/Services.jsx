import styles from "./services.module.css";
//  Images
import search_engine from "../../assets/search_engine.png";
import puy_click from "../../assets/puy_click.png";
import social from "../../assets/social.png";
import marketing from "../../assets/markting.png";
import content from "../../assets/content.png";
import tracing from "../../assets/tracing.png";

const Services = () => {
  return (
    <div
      className={`${styles.services} container  section_margin`}
      id="services">
      <div className="text">
        <h2 className="main_heading">Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to
          <br />
          help businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className={styles.services_container}>
        {/*  search engine*/}
        <div className={styles.box}>
          <div className={styles.box_text}>
            <h2 className="main_heading">Search Engine </h2>
            <div>
              <i className="fa-solid fa-arrow-up"></i>
              <button type="button">Learn More</button>
            </div>
          </div>
          <img src={search_engine} alt="search engine" />
        </div>
        {/*  puy_click*/}
        <div className={`${styles.box} ${styles.box_two}`}>
          <div className={styles.box_text}>
            <h2 className="main_heading">Pay_Per_Click Advertising</h2>
            <div>
              <i className="fa-solid fa-arrow-up"></i>
              <button type="button">Learn More</button>
            </div>
          </div>
          <img src={puy_click} alt="puy Per click" />
        </div>
        {/*  Social*/}
        <div className={`${styles.box} ${styles.box_three}`}>
          <div className={styles.box_text}>
            <h2 className="main_heading">Social Media Marketing</h2>
            <div>
              <i className="fa-solid fa-arrow-up"></i>
              <button type="button">Learn More</button>
            </div>
          </div>
          <img src={social} alt="Social Media" />
        </div>
        {/*  Email Marketing*/}
        <div className={styles.box}>
          <div className={styles.box_text}>
            <h2 className="main_heading">Email Marketing</h2>
            <div>
              <i className="fa-solid fa-arrow-up"></i>
              <button type="button">Learn More</button>
            </div>
          </div>
          <img src={marketing} alt="Email Marketing" />
        </div>
        {/*  Content Creation*/}
        <div className={`${styles.box} ${styles.box_six}`}>
          <div className={styles.box_text}>
            <h2 className="main_heading">Content Creation</h2>
            <div>
              <i className="fa-solid fa-arrow-up"></i>
              <button type="button">Learn More</button>
            </div>
          </div>
          <img src={content} alt="Content Creation" />
        </div>
        {/*  search engine*/}
        <div className={`${styles.box} ${styles.box_seven}`}>
          <div className={styles.box_text}>
            <h2 className="main_heading">Analytics And Tracing</h2>
            <div>
              <i className="fa-solid fa-arrow-up"></i>
              <button type="button">Learn More</button>
            </div>
          </div>
          <img src={tracing} alt="Analytics And Tracing" />
        </div>
      </div>
    </div>
  );
};

export default Services;
