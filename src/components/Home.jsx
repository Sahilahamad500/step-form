import React, { useState } from "react";
import Home1 from './Home1';
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'

const Home = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    qualification: '',
    course: '',
    collegename: '',
    Field: '',
    companyname: '',
    Job: '',
    Years: '',
    Start: '',
    End: '',
    skills: '',
    hobby: '',
  })

  const [errors, setErrors] = useState({});

  const validateStep = () => {
    let tempErrors = {};

    const fieldsByStep = {
      1: ["qualification", "course", "collegename", "Field"],
      2: ["companyname", "Job", "Years", "Start", "End"],
      3: ["skills", "hobby"]
    };
       
    const labels = {
      qualification: "Qualification",
      course: "Course",
      collegename: "College name",
      Field: "Field of study",
      companyname: "Company name",
      Job: "Job title",
      Years: "Years of experience",
      Start: "Start date",
      End: "End date",
      skills: "Skills",
      hobby: "Hobby"
    };

    (fieldsByStep[step] || []).forEach(field => {
      if (!formData[field]?.trim()) tempErrors[field] = `${labels[field]} is required`;
    });

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleNext = () => {
    if (validateStep()) {
      if (step < 4) setStep(step + 1);
    }

  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (

    <div className="container d-flex justify-content-center">
      <div
        className="Card border rounded-4 p-3 bg-light mt-5"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleNext();
          }
        }}
      >
        {
          {
            1: <Home1 formData={formData} handleChange={handleChange} errors={errors} />,
            2: <Home2 formData={formData} handleChange={handleChange} errors={errors} />,
            3: <Home3 formData={formData} handleChange={handleChange} errors={errors} />,
            4: <Home4 formData={formData} handleChange={handleChange} errors={errors} />
          }[step]
        }

        <div className="d-flex justify-content-around mt-1">
          {step > 1 && (
            <button className="btn" onClick={handleBack}>
              Back
            </button>
          )}
          {step < 3 && (
            <button className="btn" onClick={handleNext}>
              Next
            </button>
          )}
          {step === 3 && (
            <button type="submit" className="btn" onClick={handleNext}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
