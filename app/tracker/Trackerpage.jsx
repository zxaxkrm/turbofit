"use client";
import { db } from "@/lib/firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Alert, Snackbar } from "@mui/material";
import { ImSpinner10 } from "react-icons/im";
import { useSession } from "next-auth/react";

import { Spinnaker } from "next/font/google";
// import { auth } from "@/auth";
import { redirect } from "next/navigation";



const Trackerpage = () => {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [summary, setSummary] = useState({
    weightChange: 0,
    daysTrained: 0,
    mostTrained: "",
    leastTrained: "",
  });
  const [selectedRange, setSelectedRange] = useState(30);

  const groupworked = [
    "Boxing Session",
    "Back",
    "Biceps",
    "Triceps",
    "Shoulder",
    "Legs",
    "Chest",
    "Aerobics",
  ];

  const initialValues = {
    groupworked: [],
    weight: "",
    date: "",
  };

  const vs = Yup.object({
    weight: Yup.string().required("Weight is required"),
    date: Yup.string().required("Date is required"),
    groupworked: Yup.array()
      .min(1, "Please select at least one workout")
      .required("Workout is required"),
  });

 const handleSubmit = async (values, { resetForm }) => {
  setLoading(true);
  try {
    const res = await fetch("/api/fithistory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = await res.json();

    if (!res.ok) {
      setAlertType("error");
      setMessage(result.error || "Something went wrong.");
      setOpen(true);
      return;
    }

    setAlertType("success");
    setMessage("Saved successfully!");
    setOpen(true);
    resetForm();

    fetchSummary(selectedRange);
  } catch (error) {
    console.error(error);
    setAlertType("error");
    setMessage("Something went wrong. Try again.");
    setOpen(true);
  } finally {
    setLoading(false);
  }
};


const fetchSummary = async (days) => {
  try {
    const res = await fetch("/api/fithistory");
    if (!res.ok) return;

    const docs = await res.json();

    const today = new Date();
    const startDate = new Date();
    startDate.setDate(today.getDate() - days);

    const data = docs.filter((item) => new Date(item.date) >= startDate);

    if (data.length === 0) {
      setSummary({
        weightChange: 0,
        daysTrained: 0,
        mostTrained: "N/A",
        leastTrained: "N/A",
      });
      return;
    }

    const startweight = parseFloat(data[data.length - 1].weight);
    const endweight = parseFloat(data[0].weight);
    const weightChange = endweight - startweight;

    const daysTrained = data.length;

    // ✅ Your actual groups
    const allGroups = [
      "Boxing Session",
      "Back",
      "Biceps",
      "Triceps",
      "Shoulder",
      "Legs",
      "Chest",
      "Aerobics",
    ];

    // Initialize all counts to 0
    const counts = {};
    allGroups.forEach((g) => (counts[g] = 0));

    // Count groups in selected range
    data.forEach((entry) => {
      entry.groupworked.forEach((g) => {
        counts[g] = (counts[g] || 0) + 1;
      });
    });

    const entries = Object.entries(counts);

    const maxCount = Math.max(...entries.map(([_, c]) => c));

    // --- Most trained ---
    const mostTrainedMuscles = entries
      .filter(([_, c]) => c === maxCount && c > 0)
      .map(([m, c]) => `${m} (${c}x)`);

    // --- Least trained ---
    const zeroTrained = entries.filter(([_, c]) => c === 0);
    let leastTrainedMuscles;

    if (zeroTrained.length > 0) {
      // Prefer zero-trained groups
      leastTrainedMuscles = zeroTrained.map(([m, c]) => `${m} (${c}x)`);
    } else {
      const minCount = Math.min(...entries.map(([_, c]) => c));
      leastTrainedMuscles = entries
        .filter(([_, c]) => c === minCount)
        .map(([m, c]) => `${m} (${c}x)`);
    }

    setSummary({
      weightChange,
      daysTrained,
      mostTrained:
        mostTrainedMuscles.length > 1
          ? mostTrainedMuscles.join(", ")
          : mostTrainedMuscles[0] || "N/A",
      leastTrained:
        leastTrainedMuscles.length > 1
          ? leastTrainedMuscles.join(", ")
          : leastTrainedMuscles[0] || "N/A",
    });
  } catch (error) {
    console.error("Error fetching summary", error);
  }
};





  useEffect(() => {
    fetchSummary(selectedRange);
  }, [selectedRange, session?.user?.email]);

  return (
    <main className="min-h-dvh bg-[#5A363A] text-[#DAB55D] pb-6 p-5">
      <div className="p-4 text-white py-15 text-center">
        <div className="w-full lg:flex md:mt-10 md:px-30">
          <div className="w-full lg:flex justify-between mx-auto border-b border-[#9B8687]">
            <h1 className="font-bold text-3xl md:text-5xl text-white border-b-8 pb-4 border-[#9B8687]">
              TRACK YOUR FITNESS JOURNEY
            </h1>
          </div>
        </div>
      </div>

      <div className="md:flex gap-8 justify-between md:px-12">
        {/* Daily Tracker Form */}
        <div className="border border-[#DAB55D] bg-[#3c1f1f] p-5 mb-20">
          <h1 className="font-bold text-3xl text-white">
            DAILY FITNESS TRACKER
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={vs}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form className="space-y-10">
                {/* Date */}
                <div className="space-x-3">
                  <label className="font-semibold">Select Date</label>
                  <Field
                    name="date"
                    type="date"
                    className="border border-[#DAB55D] text-white p-2 font-semibold"
                  />
                  <ErrorMessage
                    name="date"
                    component="p"
                    className="text-xs text-red-600 mt-2"
                  />
                </div>

                {/* Workouts */}
                <div>
                  <label className="font-semibold">Select Workouts Done</label>
                  <div className="grid grid-cols-2 gap-3">
                    {groupworked.map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <Field
                          type="checkbox"
                          name="groupworked"
                          value={option}
                          className="accent-neutral-800"
                        />
                        <span className="font-semibold text-white">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                  <ErrorMessage
                    name="groupworked"
                    component="p"
                    className="text-xs text-red-600 mt-2"
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-xs font-medium text-white mb-1">
                    Weight (kg)
                  </label>
                  <Field
                    name="weight"
                    type="number"
                    placeholder="What did you weigh today?"
                    className="w-full border border-[#DAB55D] text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <ErrorMessage
                    name="weight"
                    component="p"
                    className="text-xs text-red-600 mt-2"
                  />
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-[#DAB55D] text-white font-medium py-2 rounded-md hover:text-[#DAB55D] hover:bg-white transition duration-200"
                >
                  {loading ? (
                    <ImSpinner10 className="animate-spin text-2xl justify-center items-center mx-auto font-bold" />
                  ) : (
                    "Save"
                  )}
                </button>
              </Form>
            )}
          </Formik>

          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert onClose={() => setOpen(false)} severity={alertType}>
              {message}
            </Alert>
          </Snackbar>
        </div>

        {/* Summary */}
        <div className="border border-[#DAB55D] bg-[#3c1f1f] p-5 mb-20 text-white">
          {/* Range Switcher */}
          <div className="mb-5 md:flex gap-3">
            {[7, 30, 90, 180, 365].map((days) => (
              <button
                key={days}
                onClick={() => setSelectedRange(days)}
                className={`px-3 py-1 rounded font-semibold ${
                  selectedRange === days
                    ? "bg-[#DAB55D] text-black"
                    : "bg-[#3c1f1f] text-[#DAB55D]"
                }`}
              >
                {days === 365 ? "1 Year" : `${days} Days`}
              </button>
            ))}
          </div>

          <h1 className="text-3xl font-bold">FITNESS WRAPPED</h1>

          <div className="space-y-10">
            <h1 className="font-bold text-2xl">{selectedRange} DAYS SUMMARY</h1>
            <div className="flex gap-2">
              <h1 className="font-bold text-[#DAB55D]">Weight loss/gain:</h1>
              <p>{summary.weightChange}</p>
            </div>
            <div className="flex gap-2">
              <h1 className="font-bold text-[#DAB55D]">Days Trained:</h1>
              <p>{summary.daysTrained}</p>
            </div>
            <div className="flex gap-2">
              <h1 className="font-bold text-[#DAB55D]">
                Most Trained Muscle group:
              </h1>
              <p>{summary.mostTrained}</p>
            </div>
            <div className="flex gap-2">
              <h1 className="font-bold text-[#DAB55D]">
                Least Trained Muscle group:
              </h1>
              <p>{summary.leastTrained}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Trackerpage;
