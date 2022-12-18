import AddIcon from '@mui/icons-material/Add';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const menus = [{ name: "Add Student", logo: <AddIcon />, path: "add-student" },
    { name: "View Subject Teachers", logo: <PeopleAltIcon />, path: "subject-teachers" },
    { name: "View Students", logo: <PeopleAltIcon />, path: "list-students" }]

    return (<>
        <div className="header-wrapper  d-flex justify-content-center gap-2 align-items-center">
            {menus.map((menu) => {
                return <Menu menuData={menu} />
            })}
        </div>
    </>)
}



const Menu = ({ menuData }) => {

    const { name, logo, path } = menuData;
    const navigate = useNavigate();
    return (<>


        <div className="menu-wrapper  text-center" onClick={() => navigate(path)}>

            <Button sx={{ flexDirection: "column" }} variant="contained" startIcon={logo}>
                <h6>{name}</h6>
            </Button>

        </div>
    </>)
}

export { Header }