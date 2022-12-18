import { Routes, Route } from 'react-router-dom';
import { Layout } from "./layout.js";
import { ListStudents } from "./components/listStudents";
import { SubjectTeachers } from "./components/subjectTeachers";
import { createContext } from 'react';
import { AddStudent } from "./components/addStudent";
import { DeleteStudent } from "./components/deleteStudent";
import { EditStudent } from "./components/editStudent";
import { NotFound } from "./components/notfound";
import { Success } from "./components/success";
import './App.css';

export const studentsCtx = createContext();

function App() {

  const teachersList = [
    {
      id: 101,
      name: "Sivalingam",
      dob: "05-06-1975",
      mobile: 9500852761,
      fatherName: "Madhan",
      gender: "male",
      std: 4
    }, {
      id: 102,
      name: "karthikeyan",
      dob: "05-06-1975",
      mobile: 9500852762,
      fatherName: "Nadhan",
      gender: "male",
      std: 4
    }, {
      id: 103,
      name: "ragu",
      dob: "05-06-1975",
      mobile: 9500852763,
      fatherName: "Mahan",
      gender: "female",
      std: 4
    }, {
      id: 104,
      name: "sanjay",
      dob: "05-06-1975",
      mobile: 9500852764,
      fatherName: "Madan",
      gender: "male",
      std: 4
    }, {
      id: 105,
      name: "keerthi",
      dob: "05-06-1975",
      mobile: 9500852765,
      fatherName: "Madha",
      gender: "male",
      std: 4
    }];

  const classSubjectTeachers = [
    {
      std: 4,
      subjects: [{ name: "Tamil", "teacherId": 101 },
      { name: "English", "teacherId": 102 },
      { name: "Maths", "teacherId": 103 },
      { name: "Science", "teacherId": 104 },
      { name: "Social", "teacherId": 105 }]
    }];


  return (
    <studentsCtx.Provider value={{ teachersList, classSubjectTeachers }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListStudents />} />
          <Route path="add-student" element={<AddStudent />} />
          <Route path="subject-teachers" element={<SubjectTeachers />} />
          <Route path="list-students" element={<ListStudents />} />
          <Route path="edit-student/:id" element={<EditStudent />} />
          <Route path="delete-student/:id" element={<DeleteStudent />} />
          <Route path="*" element={<NotFound />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </studentsCtx.Provider>
  );
}

export default App;
