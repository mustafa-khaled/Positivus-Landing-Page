import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./contact.module.css";

const SayHi = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // Define the initial form values
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <Form className={styles.input_holder}>
        <div>
          <label htmlFor="name">Name*</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>

        <div>
          <label htmlFor="email">Email*</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </div>

        <div>
          <label htmlFor="message">Message*</label>
          <Field as="textarea" id="message" name="message" />
          <ErrorMessage
            name="message"
            component="div"
            className={styles.error}
          />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default SayHi;
