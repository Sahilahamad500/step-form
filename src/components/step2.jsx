// import React, { useState } from "react";

// const Home = () => {

//   const [currentForm, setCurrentForm] = useState(1);

//   const [education, setEducation] = useState({
//     qualification: "",
//     course: "",
//     college: "",
//     field: "",
//   });

//   // const [formData, setFormData] = useState({
//   //   experience: {
//   //     company: "",
//   //     jobTitle: "",
//   //     years: "",
//   //     startDate: "",
//   //     endDate: "",
//   //   },
//   //   education: {},
//   //   additional: {}
//   // })

//   const [experience, setExperience] = useState({
//     company: "",
//     jobTitle: "",
//     years: "",
//     startDate: "",
//     endDate: "",
//   });

//   const [additional, setAdditional] = useState({
//     skills: "",
//     hobby: "",
//   });

//   const [showErrors, setShowErrors] = useState({
//     form1: false,
//     form2: false,
//     form3: false,
//   });

//   const validateEducation = () => {
//     return (
//       education.qualification !== "" &&
//       education.course !== "" &&
//       education.college !== "" &&
//       education.field !== ""
//     );
//   };

//   const validateExperience = () => {
//     return (
//       experience.company !== "" &&
//       experience.jobTitle !== "" &&
//       experience.years !== "" &&
//       experience.startDate !== "" &&
//       experience.endDate !== ""
//     );
//   };

//   const validateAdditional = () => {
//     return (
//       additional.skills !== "" &&
//       additional.hobby !== ""
//     );
//   };

//   const handleNext = () => {
//     switch (currentForm) {
//       case 1:
//         if (validateEducation()) {
//           setCurrentForm(2);
//           setShowErrors({ ...showErrors, form1: false });
//         } else {
//           setShowErrors({ ...showErrors, form1: true });
//         }
//         break;
//       case 2:
//         if (validateExperience()) {
//           setCurrentForm(3);
//           setShowErrors({ ...showErrors, form2: false });
//         } else {
//           setShowErrors({ ...showErrors, form2: true });
//         }
//         break;
//     }
//   };

//   const handleBack = () => {
//     switch (currentForm) {
//       case 2:
//         setCurrentForm(1);
//         break;
//       case 3:
//         setCurrentForm(2);
//         break;
//       case 4:
//         setCurrentForm(3);
//         break;
//     }
//   }

//   const handleSubmit = () => {
//     if (validateAdditional()) {
//       setCurrentForm(4);
//       setShowErrors({ ...showErrors, form3: false });
//     } else {
//       setShowErrors({ ...showErrors, form3: true });
//     }
//   };

//   return (
//     <div className="container-fluid mt-4 p-1">
//       {currentForm === 1 && (
//         <div className="border border-0 border-dark rounded-3 p-3 bg-light">
//           <h3 className=" mt-2 rounded-2 p-2 ">Education </h3>
//           <div className=" col-lg-6 d-flex flex-column w-100">
//             <label className="text-start ms-2 mb-1 mt-3">Qualification</label>
//             <input
//               type="text"
//               className={`w-100 border p-2 rounded-2 ${showErrors.form1 && !education.qualification ? "border-danger" : "border-gray"
//                 }`}
//               placeholder="Qualification type"
//               onChange={(e) => setEducation({ ...education, qualification: e.target.value })}
//             />
//             <p className="error-text">
//               {showErrors.form1 && !education.qualification && "Qualification is required"}
//             </p>
//           </div>

//           <div className="d-flex flex-column ">
//             <label className="text-start ms-2 mb-1 ">Course</label>
//             <input
//               type="text"
//               className={`w-100 border p-2 rounded-2 ${showErrors.form1 && !education.qualification ? "border-danger" : "border-gray"
//                 }`}
//               placeholder="Course"
//               onChange={(e) => setEducation({ ...education, course: e.target.value })}
//             />
//             <p className="error-text">
//               {showErrors.form1 && !education.course && "Course is required"}
//             </p>
//           </div>


//           <div className="d-flex flex-column">
//             <label className="text-start ms-2 mb-1 ">College</label>
//             <input
//               type="text"
//               className={`w-100 border p-2 rounded-2 ${showErrors.form1 && !education.qualification ? "border-danger" : "border-gray"
//                 }`}
//               placeholder="College name"
//               onChange={(e) => setEducation({ ...education, college: e.target.value })}
//             />
//             <p className="error-text">
//               {showErrors.form1 && !education.college && "College name is required"}
//             </p>

//           </div>

//           <div className="d-flex flex-column">
//             <label className="text-start ms-2 mb-1 ">Field of study</label>
//             <input
//              type="text"
//               className={`w-100 border p-2 rounded-2 ${showErrors.form1 && !education.field ? "border-danger" : "border-gray"
//                 }`}
//               placeholder="Field"
//               onChange={(e) => setEducation({ ...education, field: e.target.value })}
//             />
//             <p className="error-text">
//               {showErrors.form1 && !education.field && "Field of study is required"}
//             </p>
//           </div>

//           <button onClick={handleNext} className="btn btn-primary w-25 mt-1">
//             Next
//           </button>
//         </div>
//       )}


//       {currentForm === 2 && (
//         <div className="border border-0 border-dark rounded-3 p-3 pb-4 bg-light">
//           <h3 className="border border-white mt-2  rounded-2 p-2">experience</h3>
//           <div className="d-flex flex-column">
//             <label className="text-start ms-2 mb-1 ">Company name</label>
//             <input
//               type="text"
//               className="w-100 border border-gray p-2  rounded-2"
//               placeholder="Qualification type"
//               onChange={(e) => setExperience({ ...experience, company: e.target.value })}
//             />
//             <p className="error-text">
//               {showErrors.form2 && !experience.company && "Company name is required"}
//             </p>
//           </div>

//           <div className="d-flex flex-column">
//             <label className="text-start ms-2 mb-1 ">Job title</label>
//             <input
//               className="w-100 border border-gray-300 p-2  rounded-2"
//               type="text"
//               placeholder="Course"
//               onChange={(e) => setExperience({ ...experience, jobTitle: e.target.value })}
//             />
//             <p className="error-text">
//               {showErrors.form2 && !experience.jobTitle && "Job title is required"}
//             </p>
//           </div>

//           <div className="d-flex flex-column">
//             <label className="text-start ms-2 mb-1 ">Years of experience</label>
//             <input
//               className="w-100 border border-gray-300 p-2  rounded-2"
//               type="text"
//               placeholder="College name"
//               onChange={(e) => setExperience({ ...experience, years: e.target.value })}
//             />
//             <p className="error-text">
//               {showErrors.form2 && !experience.years && "Years of experience is required"}
//             </p>

//           </div>

//           <div className="d-flex flex-column">
//             <label className="text-start ms-2 mb-1 ">Start date</label>
//             <input
//               className="w-100 border border-gray-300 p-2  rounded-2"
//               type="Date"
//               placeholder="Date"
//               onChange={(e) => setExperience({ ...experience, startDate: e.target.value })}
//             />
//             <p className="error-text">
//               {showErrors.form2 && !experience.startDate && "Start date is required"}
//             </p>

//           </div>
//           <div className="d-flex flex-column">
//             <label className="text-start ms-2 mb-1">End Date</label>
//             <input
//               className="w-100 border border-gray-300 p-2  rounded-2"
//               type="date"
//               placeholder="date"
//               onChange={(e) => setExperience({ ...experience, endDate: e.target.value })}
//             />
//             <p className="error-text">
//               {showErrors.form2 && !experience.endDate && "End date is required"}
//             </p>

//           </div>
//           <div className="d-flex justify-content-between mt-4 ">
//             <button className="w-25" type="button" onClick={handleBack}>Back</button>
//             <button className="w-25" onClick={handleNext}>
//               Next
//             </button>
//           </div>
//         </div>
//       )}

//       {currentForm === 3 && (
//         <div className="border border-0 border-dark rounded-3 p-3 bg-light">
//           <h3 className="border border-white mt-2  rounded-2 p-2">Additional information</h3>
//           <div className="d-flex flex-column">
//             <label className="text-start ms-3 mb-1 mt-4">Skills</label>
//             <input
//               type="text"
//               className="w-100 border border-gray p-2  rounded-2"
//               placeholder="Qualification type"
//               onChange={(e) => setAdditional({ ...additional, skills: e.target.value })}
//             />
//             <p className="error-text">
//               {showErrors.form3 && !additional.skills && "Skills are required"}
//             </p>
//           </div>
//           <div className="d-flex flex-column">
//             <label className="text-start ms-2 mb-1 mt-4">Hobby</label>
//             <input
//               type="text"
//               className="w-100 border border-gray p-2  rounded-2"
//               placeholder="Qualification type"
//               onChange={(e) => setAdditional({ ...additional, hobby: e.target.value })}
//             />
//             <p className="error-text">
//               {showErrors.form3 && !additional.hobby && "Hobby is required"}
//             </p>

//           </div>
//           <div className="d-flex justify-content-between ">
//             <button
//               onClick={handleBack}
//               className="w-25 mt-4"
//               type="button"
//             >Back</button>
//             <button
//               onClick={handleSubmit}
//               className="w-25 mt-4"
//             >Submit
//             </button>
//           </div>
//         </div>
//       )}

//       {currentForm === 4 && (
//         <div className="border border-0 rounded-3 p-4 bg-light form-card">
//           <h3 className="mt-2 mb-4 text-success p-2 rounded-3">Summary</h3>

//           <div className="summary-section">
//             <h4 className="text-primary mb-3"> Education</h4>
//             <p><strong>Qualification:</strong> {education.qualification}</p>
//             <p><strong>Course:</strong> {education.course}</p>
//             <p><strong>College:</strong> {education.college}</p>
//             <p><strong>Field:</strong> {education.field}</p>
//           </div>

//           <div className="summary-section">
//             <h4 className="text-primary mb-3"> Experience</h4>
//             <p><strong>Company:</strong> {experience.company}</p>
//             <p><strong>Job Title:</strong> {experience.jobTitle}</p>
//             <p><strong>Years:</strong> {experience.years}</p>
//             <p><strong>Start Date:</strong> {experience.startDate}</p>
//             <p><strong>End Date:</strong> {experience.endDate}</p>
//           </div>

//           <div className="summary-section">
//             <h4 className="text-primary mb-3"> Additional Information</h4>
//             <p><strong>Skills:</strong> {additional.skills}</p>
//             <p><strong>Hobby:</strong> {additional.hobby}</p>
//           </div>

//           <button className="btn-custom btn-secondary-custom w-100 mt-4" onClick={handleBack}>
//             Back to Edit
//           </button>
//         </div>
//       )};

//     </div>
//   );
// };

// export default Home;





