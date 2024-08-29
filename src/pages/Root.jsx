import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
           <div className="px-5  ">
           <Outlet></Outlet>
           </div>
           <div className="">
           <Footer></Footer>
           </div>
            
        </div>
    );
};

export default Root;