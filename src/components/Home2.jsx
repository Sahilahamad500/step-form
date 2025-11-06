import React from 'react'

function Home2(props) {
  const { companyname, Job, Years, Start, End } = props.formData;
  return (
    <div>
      <div className=" p-3 ">
        <h3 className=" rounded-2 p-2">Experience</h3>

        <div className="d-flex flex-column">
          <label className="text-start ms-2 mb-1 mt-2">Company name</label>
          <input
            type="text" className=" border border-gray p-2 rounded-2" placeholder="company name"
            name='companyname' value={companyname} onChange={props.handleChange}
          />
          <p className="error-text text-danger">{props.errors?.companyname}</p>

        </div>

        <div className="d-flex flex-column">
          <label className="text-start ms-2 mb-1 mt-3">Job title</label>
          <input
            type="text" placeholder="Job title" className=" border border-gray p-2 rounded-2"
            name='Job' value={Job} onChange={props.handleChange}
          />
          <p className="error-text text-danger">{props.errors?.Job}</p>

        </div>

        <div className="d-flex flex-column">
          <label className="text-start ms-2 mb-1 mt-3">Years of experience</label>
          <input
            type="text" placeholder="Years of experience" className=" border border-gray p-2 rounded-2"
            name='Years' value={Years} onChange={props.handleChange}
          />
          <p className="error-text text-danger">{props.errors?.Years}</p>

        </div>

        <div className="d-flex flex-column">
          <label className="text-start ms-2 mb-1 mt-3">Start date</label>
          <input
            type="Date" placeholder="Start date" className=" border border-gray p-2 rounded-2"
            name='Start' value={Start} onChange={props.handleChange}
          />
          <p className="error-text text-danger">{props.errors?.Start}</p>

        </div>

        <div className="d-flex flex-column">
          <label className="text-start ms-2 mb-1 mt-3">End date</label>
          <input
            type="Date" placeholder="End date" className=" border border-gray p-2 rounded-2"
            name='End' value={End} onChange={props.handleChange}
          />
          <p className="error-text text-danger">{props.errors?.End}</p>

        </div>
      </div>
    </div>
  )
}

export default Home2;
