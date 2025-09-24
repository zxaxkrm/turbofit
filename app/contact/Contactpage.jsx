"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LuLoaderPinwheel } from "react-icons/lu";
import { Alert, Snackbar } from "@mui/material";

const Contactpage = () => {
  const [processing, setProcessing] = useState(false);
 const[alertType, setAlertType] = useState("success");
 const [open, setOpen]= useState(false);

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is a required field"),
    lastname: Yup.string().required("Last name is a required field"),
    phonenumber: Yup.string().required("This is required"),
    email: Yup.string().required("Email name is a required field"),
    message: Yup.string()
      .required("This is a required field")
      .min(10, "minimum of 10 characters"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setProcessing(true);

    try {
      const contactvalue = { ...values };

      const docRef = await addDoc(collection(db, "contact"), contactvalue);
      console.log(contactvalue);
      console.log("Document written with ID: ", docRef.id);
      setAlertType("success"); // set to success
    setOpen(true);

      resetForm();
    } catch (error) {
      console.error("an error occured", error);
       setAlertType("error"); // set to error
    setOpen(true);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <main className="min-h-dvh ">
      <div className="p-4 text-white py-15 bg-neutral-800 text-center ">
        <div className="w-full lg:flex mt-10 px-30">
          <div className="w-full lg:flex justify-between mx-auto border-b border-[#9B8687]">
            <h1 className=" font-bold text-5xl text-white border-b-8 pb-4 border-[#9B8687] ">
              CONTACT
            </h1>
          </div>
        </div>
      </div>
      <section className="min-h-dvh flex justify-center gap-8 max-md:px-6 lg:px-60 py-15 bg-neutral-800 ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-7 max-md:pt-3 w-full ">
            <div className="">
              <div className="mb-7">
                <label className="text-white font-thin mb-2 text-sm">
                  First Name*
                </label>
                <Field
                  name="firstname"
                  type="text"
                  placeholder="First name"
                  className="border  border-[#DAB55D] text-white p-3 outline-none w-full  shadow"
                />

                <ErrorMessage
                  name="firstname"
                  component={"p"}
                  className="text-xs text-red-600 mt-2"
                />
              </div>

              <div>
                <label className="text-white font-thin text-sm">
                  Last Name*
                </label>
                <Field
                  name="lastname"
                  type="text"
                  placeholder="Last name"
                  className="border  border-[#DAB55D] text-white p-3 outline-none w-full  shadow"
                />
                <ErrorMessage
                  name="lastname"
                  component={"p"}
                  className="text-xs text-red-600 mt-2"
                />
              </div>
            </div>

            <div>
              <label className="text-white font-thin text-sm">Email*</label>
              <Field
                name="email"
                type="text"
                placeholder="email@example.com"
                className="border  border-[#DAB55D] p-3 text-white outline-none w-full  shadow"
              />
              <ErrorMessage
                name="email"
                component={"p"}
                className="text-xs text-red-600 mt-2"
              />
            </div>

            <div>
              <label className="text-white font-thin text-sm">Phone*</label>
              <Field
                name="phonenumber"
                type="text"
                placeholder="+234 80 0011 0011"
                className="border  border-[#DAB55D] p-3 text-white outline-none w-full  shadow"
              />
              <ErrorMessage
                name="phonenumber"
                component={"p"}
                className="text-xs text-red-600 mt-2"
              />
            </div>

            <div>
              <label className="text-white font-thin pb-3 text-sm h-16">
                Comments*
              </label>
              <Field
                name="message"
                placeholder="Your message"
                type="text"
                className="border border-[#DAB55D] p-3 outline-none w-full text-white shadow h-35"
              />
              <ErrorMessage
                name="message"
                component={"p"}
                className="text-xs text-red-600 mt-2"
              />
            </div>

            <button
              disabled={processing}
              type="submit"
              className="  p-3 px-10 text-[#DAB55D] border-2 font-semibold hover:text-white transition-all "
            >
              {processing ? (
                <LuLoaderPinwheel className="animate-spin text-2xl" />
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        </Formik>

           <Snackbar
  open={open}
  autoHideDuration={4000}
  onClose={() => setOpen(false)}
  anchorOrigin={{ vertical:'top', horizontal:'center'}}
  
>
  <Alert onClose={() => setOpen(false)} severity={alertType}>
    {alertType === "success" ? "Your message was successfully sent!" : "Failed to send message."}
  </Alert>
</Snackbar>
      </section>
    </main>
  );
};

export default Contactpage;
