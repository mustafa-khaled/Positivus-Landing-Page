import styles from "./team.module.css";
// Images
import Person1 from "../../assets/Person1.png";
import Person2 from "../../assets/Person2.png";
import Person3 from "../../assets/Person3.png";
import Person4 from "../../assets/person4.png";
import Person5 from "../../assets/Person5.png";
import Person6 from "../../assets/Person 6.png";

const Team = () => {
  return (
    <div className="container  section_margin">
      <div className="text">
        <h2 className="main_heading">Team</h2>
        <p>
          Meet the skilled and experienced team behind our
          <br />
          successful digital marketing strategies
        </p>
      </div>
      <div className={styles.boxes}>
        {/* One  */}
        <div className={styles.box}>
          <div className={styles.details}>
            <img src={Person1} alt="Person" />
            <div>
              <h4>John Smith</h4>
              <p>CEO and Founder</p>
            </div>
          </div>
          <p>
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </p>

          <a
            href="https://www.linkedin.com/in/the-mustafa-khaled/"
            target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        {/* Two  */}
        <div className={styles.box}>
          <div className={styles.details}>
            <img src={Person2} alt="Person" />
            <div>
              <h4>Jane Doe</h4>
              <p>Director of Operations</p>
            </div>
          </div>
          <p>
            7+ years of experience in project management and team leadership.
            Strong organizational and communication skills
          </p>
          <a
            href="https://www.linkedin.com/in/the-mustafa-khaled/"
            target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        {/* Three */}
        <div className={styles.box}>
          <div className={styles.details}>
            <img src={Person3} alt="Person" />
            <div>
              <h4>Michael Brown</h4>
              <p>Senior SEO Specialist</p>
            </div>
          </div>
          <p>
            5+ years of experience in SEO and content creation. Proficient in
            keyword research and on-page optimization
          </p>
          <a
            href="https://www.linkedin.com/in/the-mustafa-khaled/"
            target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>

        {/* Four */}
        <div className={styles.box}>
          <div className={styles.details}>
            <img src={Person4} alt="Person" />
            <div>
              <h4>Emily Johnson</h4>
              <p>PPC Manager</p>
            </div>
          </div>
          <p>
            3+ years of experience in paid search advertising. Skilled in
            campaign management and performance analysis
          </p>
          <a
            href="https://www.linkedin.com/in/the-mustafa-khaled/"
            target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        {/* FIve */}
        <div className={styles.box}>
          <div className={styles.details}>
            <img src={Person5} alt="Person" />
            <div>
              <h4>Brian Williams</h4>
              <p>
                Social Media <br />
                Specialist
              </p>
            </div>
          </div>
          <p>
            4+ years of experience in social media marketing. Proficient in
            creating and scheduling content, analyzing metrics, and building
            engagement
          </p>
          <a
            href="https://www.linkedin.com/in/the-mustafa-khaled/"
            target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        {/* Six */}
        <div className={styles.box}>
          <div className={styles.details}>
            <img src={Person6} alt="Person" />
            <div>
              <h4>Sarah Kim</h4>
              <p>Content Creator</p>
            </div>
          </div>
          <p>
            2+ years of experience in writing and editing Skilled in creating
            compelling, SEO-optimized content for various industries
          </p>
          <a
            href="https://www.linkedin.com/in/the-mustafa-khaled/"
            target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className={styles.team_btn_container}>
        <button className={`btn ${styles.team_btn}`}>See All Team</button>
      </div>
    </div>
  );
};

export default Team;
