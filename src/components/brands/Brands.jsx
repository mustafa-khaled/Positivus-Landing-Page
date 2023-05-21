import styles from "./brands.module.css";
// Images
import one from "../../assets/brand1.png";
import two from "../../assets/brand2.png";
import three from "../../assets/brand3.png";
import four from "../../assets/brand4.png";
import five from "../../assets/brand5.png";
import six from "../../assets/brand6.png";

const Brands = () => {
  return (
    <div className={`${styles.brands} container`}>
      <img src={one} alt="" />
      <img src={two} alt="" />
      <img src={three} alt="" />
      <img src={four} alt="" />
      <img src={five} alt="" />
      <img src={six} alt="" />
    </div>
  );
};

export default Brands;
