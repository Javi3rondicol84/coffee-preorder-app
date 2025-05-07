import { Outlet } from "react-router";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
export default function MainLayout() {
    return (
        <>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>
    );
}