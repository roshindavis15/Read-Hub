import React,{useState} from "react";
import { createRoot } from "react-dom/client";
import HomeScreen  from "./Components/screens/HomeScreen";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const AppLayout = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <Navbar toggleModal={toggleModal} />
            <div className="pt-12">
                <HomeScreen showModal={showModal} toggleModal={toggleModal} />
            </div>
            <Footer />
        </>
    );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
