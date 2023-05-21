import styles from "./case_study.module.css";

const CaseStudy = () => {
  return (
    <div className={`${styles.case_study} container section_margin`} id="blog">
      <div className="text">
        <h2 className="main_heading">Case Studies</h2>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing
          <br />
          Success through Our Case Studies
        </p>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className={styles.icon}>
            Learn More <i className="fa-solid fa-arrow-up"></i>
          </div>
        </div>
        <div className={`${styles.box} ${styles.custom_border}`}>
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className={styles.icon}>
            Learn More <i className="fa-solid fa-arrow-up"></i>
          </div>
        </div>
        <div className={`${styles.box} ${styles.custom_border}`}>
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className={styles.icon}>
            Learn More <i className="fa-solid fa-arrow-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
