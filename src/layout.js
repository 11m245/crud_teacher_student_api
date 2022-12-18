import { Header } from "./components/header"
import { Outlet } from "react-router-dom";
function Layout() {

    return (<>
        <div className="app container-fluid">
            <div className="project-container container mt-1">
                <h3 className="text-center">Teacher Student DashBoard API</h3>
                <Header />
                <div className="content-container mt-3">
                    <Outlet />
                </div>
            </div>
        </div>

    </>);
}

export { Layout }