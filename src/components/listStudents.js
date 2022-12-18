import { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { studentsCtx } from "../App";
import IconButton from '@mui/material/IconButton';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useNavigate } from "react-router-dom";

function ListStudents() {
    const { studentsList } = useContext(studentsCtx);


    return (<>
        <BasicTable studentsList={studentsList} />
    </>)
}


function BasicTable({ studentsList }) {

    const navigate = useNavigate();




    const rows = studentsList.map((student, i) => {
        return {
            id: student.id,
            name: student.name,
            dob: student.dob,
            parentMobile: student.parentMobile,
            fatherName: student.fatherName,
            gender: student.gender,
            edit: <IconButton onClick={() => navigate(`/edit-student/${student.id}`)} sx={{ "&:hover": { backgroundColor: "orange" } }} color="secondary" aria-label="edit-profile"><ModeEditOutlineRoundedIcon /></IconButton>,
            delete: <IconButton onClick={() => navigate(`/delete-student/${student.id}`)} sx={{ "&:hover": { backgroundColor: "orange" } }} color="error" aria-label="delete-profile"><DeleteForeverRoundedIcon /></IconButton>
        }
    });



    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={(theme) => ({ ...theme.typography.body1, backgroundColor: "primary.main", fontWeight: 700, color: "red" })}>
                    <TableRow >
                        <TableCell sx={{ fontSize: 22 }}>Name</TableCell>
                        <TableCell sx={{ fontSize: 22 }} align="right">DOB</TableCell>
                        <TableCell sx={{ fontSize: 22 }} align="right">Father Name</TableCell>
                        <TableCell sx={{ fontSize: 22 }} align="right">Parent Mobile</TableCell>
                        <TableCell sx={{ fontSize: 22 }} align="right">Gender</TableCell>

                        <TableCell sx={{ fontSize: 22 }} align="right">edit</TableCell>
                        <TableCell sx={{ fontSize: 22 }} align="right">delete</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow className="fs-5"
                            key={row.id}
                            sx={{

                                "&:last-child td, &:last-child th": { border: 0 }, '&:nth-of-type(even)': {
                                    backgroundColor: "#007bff"
                                }
                            }}
                        >
                            <TableCell sx={{ fontSize: 22 }} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell sx={{ fontSize: 22 }} align="right">{row.dob}</TableCell>
                            <TableCell sx={{ fontSize: 22 }} align="right">{row.fatherName}</TableCell>
                            <TableCell sx={{ fontSize: 22 }} align="right">{row.parentMobile}</TableCell>
                            <TableCell sx={{ fontSize: 22 }} align="right">{row.gender}</TableCell>

                            <TableCell align="right">{row.edit}</TableCell>
                            <TableCell align="right">{row.delete}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}





export { ListStudents }