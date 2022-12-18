import { useContext } from "react"
import { studentsCtx } from "../App"


function SubjectTeachers() {
    const { classSubjectTeachers, teachersList } = useContext(studentsCtx);

    const x = classSubjectTeachers[0].std;
    let subjectsArray = classSubjectTeachers[0].subjects;



    return (<>
        <h4 className="text-center">{x}th Standard Subject Teachers</h4>
        <div className="subject-teachers-wrapper d-flex gap-2 flex-wrap justify-content-center w-100">
            {subjectsArray.map((subject) => <SubjectCard subject={subject} teachersList={teachersList} />)}
        </div>
    </>)
}

function SubjectCard({ subject, teachersList }) {

    const filteredTeacher = teachersList.filter((teacher) => teacher.id == subject.teacherId);
    const teacherProfile = filteredTeacher[0];
    const cardColorClass = (teacherProfile.id % 2 === 0) ? `card mb-3  text-bg-primary` : `card mb-3  text-bg-secondary`;
    return (<>
        <div className={cardColorClass} style={{ maxWidth: "18rem" }}>
            <div className="card-header text-center">
                <h5 className="card-title">{subject.name}</h5>
            </div>
            <div className="card-header">
                <h6 className="card-title text-warning m-0">Teacher Details</h6>
            </div>
            <div className="card-body">
                <p className="card-text m-0">ID {teacherProfile.id}</p>
                <p className="card-text m-0">Name {teacherProfile.name}</p>
                <p className="card-text">Mobile No. {teacherProfile.mobile}</p>
            </div>
        </div>
    </>)
}

export { SubjectTeachers }