import styles from "./footer.module.css";
import logo from "../../assets/LogoFooter.png";

const Footer = () => {
  return (
    <div className={`${styles.footer} container section_margin`}>
      <div className={styles.headFooter}>
        <img src={logo} alt="Logo" className={styles.footerLogo} />
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/the-mustafa-khaled/"
              target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/the-mustafa-khaled/"
              target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/the-mustafa-khaled/"
              target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerSearch}>
        <h4>Contact Us</h4>
        <div className={styles.content}>
          <div>
            <p>Email: mustafakhaledinfo@gmail.com</p>
            <p>Phone: 01151747091</p>
            <p>Address: Cairo - Egypt</p>
          </div>
          <div className={styles.footerInputContainer}>
            <input type="email" placeholder="Email" />
            <button>Subscribe To News</button>
          </div>
        </div>
      </div>
      <p className={styles.copyRight}>
        © 2023 Positivus. All Rights Reserved.
        <br />
        <a
          href="https://www.linkedin.com/in/the-mustafa-khaled/"
          target="_blank">
          Mustafa Khaled
        </a>
      </p>
    </div>
  );
};

export default Footer;
