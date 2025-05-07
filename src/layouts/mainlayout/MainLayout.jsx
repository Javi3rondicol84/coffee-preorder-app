import { Outlet } from "react-router";
import Nav from "../../components/nav/Nav";
export default function MainLayout() {
    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    );
}