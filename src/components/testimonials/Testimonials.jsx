import styles from "./testimonials.module.css";
// Swiper
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <div className="section_margin container" id="contact">
      <div className="text">
        <h2 className="main_heading">Testimonials</h2>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials
          <br />
          to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <div className={styles.swiper_container}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={3}
          breakpoints={{
            1000: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}>
          <SwiperSlide>
            <p className={styles.description}>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>

            <h3 className={styles.name}>John Smith</h3>
            <p>Marketing Director at XYZ Corp</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.description}>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>

            <h3 className={styles.name}>John Smith</h3>
            <p>Marketing Director at XYZ Corp</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.description}>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>

            <h3 className={styles.name}>John Smith</h3>
            <p>Marketing Director at XYZ Corp</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.description}>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>

            <h3 className={styles.name}>John Smith</h3>
            <p>Marketing Director at XYZ Corp</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className={styles.description}>
              "We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>

            <h3 className={styles.name}>John Smith</h3>
            <p>Marketing Director at XYZ Corp</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
