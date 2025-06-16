"use client";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contactpage = () => {
  const initialValues = {
    fullname: "",
    email: "",
    messaage: "",
  };

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Position is a required field"),
    email: Yup.string().required("Position is a required field"),
    message: Yup.string()
      .required("Achievements is a required field")
      .min(5, "Minimum of 5 characters"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const contactvalue = { ...values };

    console.log(contactvalue);

    resetForm();
  };

  return (
    <main className="min-h-dvh">
      <div className="p-4 text-white bg-neutral-800 text-center ">
        <h1 className=" font-semibold text-5xl ">Contact Us</h1>
        <p className=" text-sm  justify-around">
          Have a question or want to learn more about our programs and our
          store? Reach out to us via the form below, and we'll get back to you
          as soon as possible.
        </p>
      </div>
      <section className="min-h-dvh flex gap-8 bg-neutral-800 ">
        <div className="text-white bg-neutral-800 w-full px-15 flex justify-center  items-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className=" md:border border-red-400 w-2/3 py-8 gap-10 flex flex-col items-center my-5 space-y-5 ">
              <div>
                <Field
                  type="text"
                  placeholder="fullname..."
                  name="fullname"
                  className="border-b border-white p-3 outline-none   shadow"
                />
                <ErrorMessage
                  name="fullname"
                  component="p"
                  className="text-xs text-red-600 mt-2"
                />
              </div>

              <div>
                <Field
                  type="text"
                  placeholder="email..."
                  name="email"
                  className="border-b border-gray-200 p-3 outline-none shadow"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-xs text-red-600 mt-2"
                />
              </div>

              <div>
                <Field
                  type="text"
                  placeholder="How can we help you?..."
                  name="message"
                  className="border-b border-gray-200 p-3 outline-none    shadow"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-xs text-red-600 mt-2"
                />
              </div>

              <button
                type="submit"
                className="bg-red-500 text-white flex items-center justify-center p-3 rounded-md w-25 font-semibold hover:bg-blue-600 transition-colors duration-200 outline-none"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
};

export default Contactpage;
