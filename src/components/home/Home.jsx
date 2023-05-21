import styles from "./home.module.css";
import homeImg from "../../assets/Home.png";

const Home = () => {
  return (
    <div className={`${styles.home} container`}>
      <div className={styles.text}>
        <h1>Navigating the digital landscape for success</h1>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <div>
          <a href="#">
            <button className="btn">Book a consultation</button>
          </a>
        </div>
      </div>
      <div>
        <img src={homeImg} alt="HomeImage" className={styles.homeImage} />
      </div>
    </div>
  );
};

export default Home;
