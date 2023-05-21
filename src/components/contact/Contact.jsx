import styles from "./contact.module.css";
import SayHi from "./SayHi";
import formImage from "../../assets/contactImage.png";

const Contact = () => {
  return (
    <div className="container section_margin" id="pricing">
      <div className="text">
        <h2 className="main_heading">Contact Us</h2>
        <p>
          Connect with Us: Let's Discuss Your
          <br />
          Digital Marketing Needs
        </p>
      </div>
      <div className={styles.formStyle}>
        <SayHi />
        <img src={formImage} alt="FormImage" />
      </div>
    </div>
  );
};

export default Contact;
