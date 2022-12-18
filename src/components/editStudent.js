import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function EditStudent() {
    const { id } = useParams();
    const [currentStudent, setCurrentStudent] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://63899fdd4eccb986e895a955.mockapi.io/students/${id}`, { method: "GET" })
            .then(response => response.json()).then(data => setCurrentStudent(data));
    }, [id]);




    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://63899fdd4eccb986e895a955.mockapi.io/students/${id}`,
            { method: "PUT", headers: { "Content-type": "application/json" }, body: JSON.stringify(currentStudent) })
            .then(navigate("/list-students"));

    }

    return (<>

        <form style={{ maxWidth: "600px", marginInline: "auto" }} onSubmit={handleSubmit} className="p-3">
            <h4 className="text-center">Edit Student Details Form</h4>
            <div className="mb-2">
                <label htmlFor="st_id" className="form-label">Student ID</label>
                <input type="number" className="form-control" id="st_id" placeholder="student id" value={currentStudent.id} onChange={(e) => setCurrentStudent({ ...currentStudent, id: e.target.value })} />
            </div>
            <div className="mb-2">
                <label htmlFor="st_name" className="form-label">Name</label>
                <input type="text" className="form-control" id="st_name" placeholder="student Name" value={currentStudent.name} onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })} />
            </div>
            <h5 className="m-0" >Gender</h5>

            <div className="gener-input d-flex gap-2">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="g1" checked={currentStudent.gender == "male" ? true : false} value="male" onChange={(e) => setCurrentStudent({ ...currentStudent, gender: e.target.value })} />
                    <label className="form-check-label" htmlFor="g1">Male</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="g2" checked={currentStudent.gender == "female" ? true : false} value="female" onChange={(e) => setCurrentStudent({ ...currentStudent, gender: e.target.value })} />
                    <label className="form-check-label" htmlFor="g2">Female</label>
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="st_dob" className="form-label">DOB</label>
                <input type="text" className="form-control" id="st_dob" placeholder="student DOB" value={currentStudent.dob} onChange={(e) => setCurrentStudent({ ...currentStudent, dob: e.target.value })} />
            </div>
            <div className="mb-2">
                <label htmlFor="st_mobile" className="form-label">Parent Mobile No.</label>
                <input type="number" className="form-control" id="st_mobile" placeholder="Parent Mobile No." value={currentStudent.parentMobile} onChange={(e) => setCurrentStudent({ ...currentStudent, parentMobile: e.target.value })} />
            </div>
            <div className="mb-2">
                <label htmlFor="st_father" className="form-label">Father's Name</label>
                <input type="text" className="form-control" id="st_father" placeholder="student's Father Name" value={currentStudent.fatherName} onChange={(e) => setCurrentStudent({ ...currentStudent, fatherName: e.target.value })} />
            </div>
            <div className="mb-2">
                <label htmlFor="st_std" className="form-label">Student's Admission Class</label>
                <input type="number" className="form-control" id="st_std" placeholder="admission Class" value={currentStudent.std} onChange={(e) => setCurrentStudent({ ...currentStudent, std: e.target.value })} />
            </div>
            <Button type="submit" sx={{ width: "150px", display: "block", marginInline: "auto" }} variant="contained">Update Student</Button>

        </form>

    </>);
}

export { EditStudent }