import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { studentsCtx } from "../App";
import Button from '@mui/material/Button';

const AddStudent = () => {

    return (<>
        <StudentForm />
    </>)
}

const StudentForm = () => {
    const { studentsList, setStudentsList } = useContext(studentsCtx);
    const navigate = useNavigate();

    const initialStudentDetails = {
        id: "",
        name: "",
        dob: "",
        parentMobile: "",
        fatherName: "",
        gender: "",
        std: ""
    }

    const [student, setStudent] = useState(initialStudentDetails);

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("student Details Submitted", student);
        setStudentsList([...studentsList, student])
        console.log("studentsList is ", studentsList);
        navigate("/success");
    }

    return (<>

        <form style={{ maxWidth: "600px", marginInline: "auto" }} onSubmit={handleSubmit} className="p-3">
            <h2 className="text-center">Add Student Details Form</h2>
            <div className="mb-2">
                <label htmlFor="st_id" className="form-label">Student ID</label>
                <input type="number" className="form-control" id="st_id" placeholder="student id" onChange={(e) => setStudent({ ...student, id: e.target.value })} />
            </div>
            <div className="mb-2">
                <label htmlFor="st_name" className="form-label">Name</label>
                <input type="text" className="form-control" id="st_name" placeholder="student Name" onChange={(e) => setStudent({ ...student, name: e.target.value })} />
            </div>
            <h5 className="m-0" >Gender</h5>

            <div className="gener-input d-flex gap-2">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="g1" value="male" onChange={(e) => setStudent({ ...student, gender: e.target.value })} />
                    <label className="form-check-label" htmlFor="g1">Male</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="g2" value="female" onChange={(e) => setStudent({ ...student, gender: e.target.value })} />
                    <label className="form-check-label" htmlFor="g2">Female</label>
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="st_dob" className="form-label">DOB</label>
                <input type="text" className="form-control" id="st_dob" placeholder="student DOB" onChange={(e) => setStudent({ ...student, dob: e.target.value })} />
            </div>
            <div className="mb-2">
                <label htmlFor="st_mobile" className="form-label">Parent Mobile No.</label>
                <input type="number" className="form-control" id="st_mobile" placeholder="Parent Mobile No." onChange={(e) => setStudent({ ...student, parentMobile: e.target.value })} />
            </div>
            <div className="mb-2">
                <label htmlFor="st_father" className="form-label">Father's Name</label>
                <input type="text" className="form-control" id="st_father" placeholder="student's Father Name" onChange={(e) => setStudent({ ...student, fatherName: e.target.value })} />
            </div>
            <div className="mb-2">
                <label htmlFor="st_std" className="form-label">Student's Admission Class</label>
                <input type="number" className="form-control" id="st_std" defaultValue="4" placeholder="admission Class" onChange={(e) => setStudent({ ...student, std: e.target.value })} />
            </div>

            <Button type="submit" sx={{ width: "150px", display: "block", marginInline: "auto" }} variant="contained">Add Student</Button>
            {/* <input className="mx-auto" style={{ width: "100px" }} type="submit" value="Add Student" /> */}
        </form>

    </>)
}

export { AddStudent }