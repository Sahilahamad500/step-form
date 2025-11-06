import React from 'react'

function Home1(props) {

  const { qualification, course, collegename, Field } = props.formData;
  return (
    <div>
      <div className=" p-3 ">
        <h3 className="mt-2 rounded-2 p-2">Education</h3>

        <div className="col-lg-6 d-flex flex-column w-100">
          <label className="text-start ms-2 mb-1 mt-3">Qualification</label>
          <input
            htnlFor="qualification" type="text"
            className=" border p-2 rounded-2 border-gray"
            placeholder="qualification type"
            name='qualification'
            value={qualification}
            onChange={props.handleChange}
          />
          <p className="error-text text-danger">{props.errors?.qualification}</p>
        </div>

        <div className="d-flex flex-column">
          <label className="text-start ms-2 mb-1">Course</label>
          <input
            type="text"
            className=" border p-2 rounded-2 border-gray"
            placeholder="Course"
            name='course'
            value={course}
            onChange={props.handleChange}
          />
          <p className="error-text text-danger">{props.errors?.course}</p>

        </div>

        <div className="d-flex flex-column">
          <label className="text-start ms-2 mb-1">College</label>
          <input
            type="text"
            className=" border p-2 rounded-2 border-gray"
            placeholder="College name"
            name='collegename'
            value={collegename}
            onChange={props.handleChange}
          />
          <p className="error-text text-danger">{props.errors?.collegename}</p>

        </div>

        <div className="d-flex flex-column">
          <label className="text-start ms-2 mb-1">Field of study</label>
          <input
            type="text"
            className=" border p-2 rounded-2 border-gray"
            placeholder="Field"
            name='Field'
            value={Field}
            onChange={props.handleChange}
          />
          <p className="error-text text-danger">{props.errors?.Field}</p>

        </div>
      </div>
    </div>
  )
}

export default Home1;
