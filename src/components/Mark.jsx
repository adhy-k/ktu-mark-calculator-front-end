import axios from 'axios'
import React, { useState } from 'react'

const Mark = () => {
    const [input, changeInput] = useState(
        {

            name: "",
            regno: "",
            email: "",
            subName1: "",
            subName2: "",
            subName3: "",
            subIntMark1: "",
            subIntMark2: "",
            subIntMark3: "",
            subSemMark1: "",
            subSemMark2: "",
            subSemMark3: ""
        }
    )
    const [output, changeOutput] = useState(
        {
            "name": "",
            "regno": "",
            "email": "",
            "clgname": "",
            "subjects": [
                {
                    "name": "",
                    "internal": "",
                    "semester": "",
                    "total": "",
                    "grade": ""
                },
                {
                    "name": "",
                    "internal": "",
                    "semester": "",
                    "total": "",
                    "grade": ""
                },
                {
                    "name": "",
                    "internal": "",
                    "semester": "",
                    "total": "",
                    "grade": ""
                }
            ],
            "total": "",
            "cgpa": ""
        }
    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }
    const readInput = () => {
        console.log(input)
        axios.post("http://localhost:4000/calculate", input).then(
            (response) => {
                changeOutput(response.data)
            }
        ).catch()
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Reg Number</label>
                                <input type="text" className="form-control" name='regno' value={input.regno} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College Name</label>
                                <input type="text" className="form-control" name='clgname' value={input.clgname} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Subject Name 1</label>
                                <input type="text" className="form-control" name='subName1' value={input.subName1} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Internal mark(subject 1)</label>
                                <input type="text" className="form-control" name='subIntMark1' value={input.subIntMark1} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Sem mark(subject 1)</label>
                                <input type="text" className="form-control" name='subSemMark1' value={input.subSemMark1} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Subject Name 2</label>
                                <input type="text" className="form-control" name='subName2' value={input.subName2} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Internal mark(subject 2)</label>
                                <input type="text" className="form-control" name='subIntMark2' value={input.subIntMark2} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Sem mark(subject 2)</label>
                                <input type="text" className="form-control" name='subSemMark2' value={input.subSemMark2} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Subject Name 3</label>
                                <input type="text" className="form-control" name='subName3' value={input.subName3} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Internal mark(subject 3)</label>
                                <input type="text" className="form-control" name='subIntMark3' value={input.subIntMark3} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-4 col-md-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Sem mark(subject 3)</label>
                                <input type="text" className="form-control" name='subSemMark3' value={input.subSemMark3} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readInput}>Calculate</button>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <div class="card-header">Name: {output.name}</div>
                                    <div class="card-header">Reg Number: {output.regno}</div>
                                    <div class="card-header">College Name: {output.clgname}</div>
                                    <div class="card-header">Email: {output.email}</div>
                                    <ul className="list-group list-group-flush">
                                        {output.subjects.map((subject, index) => (
                                            <li key={index} className="list-group-item">
                                                <strong>{subject.name}</strong><br />
                                                Internal: {subject.internal} | Semester: {subject.semester} <br />
                                                Total: {subject.total} | Grade: {subject.grade}
                                            </li>
                                        ))}
                                        <li className="list-group-item">Total Marks: {output.total}</li>
                                        <li className="list-group-item">CGPA: {output.cgpa}</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mark