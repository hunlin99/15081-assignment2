"use client";

import React, { useState } from "react";
import Header from "../components/Header"; // Import the Header component
import CloseBtn from "../components/CloseBtn";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // For fade-out animation

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsClosing(true); // Start fade-out animation
        setTimeout(() => {
            setIsModalOpen(false);
            setIsClosing(false); // Reset animation state
        }, 500);
    };

    return (
        <body>
            <Header />
            <section>
                <div className="cover">
                    <h2>Cuisines around us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </section>
            <section className="trend">
                <div className="latest">
                    <h1 className="text-3xl font-bold">
                        Article of the week<hr />
                    </h1>
                    <div className="grid-container">
                        {/* Card 1 */}
                        <div
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg w-full h-48 object-cover" src="./img/testimg-cafe.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cafe Lander
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Industrial Loft Style cafe. Serve
                                    specialty coffees, breakfast, lunch & dessert.</p>
                                    <button
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleOpenModal}>
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg w-full h-48 object-cover" src="./img/testimg-pizza.jpg" alt="" />
                            <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lambretta
                                        Pizza Club</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A celebration of Italian culinary
                                    heritage with an international twist, featuring handcrafted pizzas, delectable pastas, and
                                    savory sandwiches,</p>
                                <button
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleOpenModal}>
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg w-full h-48 object-cover" src="./img/testimg-petit.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Petit
                                    Potato</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A trendy Asian fusion restaurant
                                    and cafe offering a variety of food, tea-inspired snacks and dessert with Japanese flair.
                                </p>
                                <button
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleOpenModal}>
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section >
            {isModalOpen && (
                <div id="createPostModal" className={`modal ${isClosing ? "fadeOut" : ""}`}
                    style={{ display: "flex" }}>
                    <div className="modal-content">
                        <div className="posting-header">
                            <h2>Recommendation of the week</h2>
                            {/* Use CloseBtn Component */}
                            <CloseBtn onClose={handleCloseModal} />
                        </div>
                    </div>
                </div>
            )};
            <script src="./script.js"></script>
        </body >
    );
}