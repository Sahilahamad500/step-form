import React from 'react'

function Home3(props) {
  const { skills, hobby } = props.formData;
  return (
    <div>
      <div className=" p-3">
        <h3 className=" rounded-2 p-2">
          Additional Information
        </h3>

        <div className="d-flex flex-column">
          <label className="text-start ms-3 mb-1 mt-3">Skills</label>
          <input
            type="text"
            className=" border border-gray p-2 rounded-2"
            placeholder="Your skills"
            name='skills'
            value={skills}
            onChange={props.handleChange}
          />
          <p className="error-text text-danger">{props.errors?.skills}</p>

        </div>

        <div className="d-flex flex-column">
          <label className="text-start ms-2 mb-1 mt-3">Hobby</label>
          <input
            type="text"
            className=" border border-gray p-2 rounded-2"
            placeholder="Your hobby"
            name='hobby'
            value={hobby}
            onChange={props.handleChange}
          />
          <p className="error-text text-danger">{props.errors?.hobby}</p>

        </div>
      </div>
    </div>
  )
}

export default Home3
