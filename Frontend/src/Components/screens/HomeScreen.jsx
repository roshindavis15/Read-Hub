import React, { useState } from "react";
import slide1 from "../assets/bookimg1.png";
import slide2 from "../assets/book2.png";
import Carousel from "../Carousel";
import FeatureSection from "../FeatureSection";
import { v4 as uuidv4 } from 'uuid';
import Navbar from "../Navbar";
import Modal from "../Modal";

const HomeScreen = ({ showModal, toggleModal }) => {
    const slides = [
        { content: "Welcome to Read Hub: Your Gateway to Infinite Stories!" ,id:uuidv4()},
        { imageUrl: slide2, id: uuidv4() }
    ];

    return (
        <>
            <Carousel slides={slides} />
            <div className="pt-0">
                <FeatureSection toggleModal={toggleModal} />
            </div>
            {showModal && <Modal onClose={toggleModal} />}
        </>
    );
};

export default HomeScreen;
