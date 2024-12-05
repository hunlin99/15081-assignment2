"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import "./page.css";

export default function BlogPage() {
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


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic for form submission (e.g., saving the post data)
    console.log("Form Submitted");
    handleCloseModal();
  };


  return (
    <body>
      <Header />
      <div className="btn-container">
      <button
          className="new-post-btn"
          onClick={handleOpenModal}>
          Create New Post
        </button></div>
      <main className="post-container">
        {/* Button to Open Modal */}
        
        {/* Modal */}
        {isModalOpen && (
          <div id="createPostModal" className={`modal ${isClosing ? "fadeOut" : ""}`} 
          style={{ display: "flex" }}>
            <div className="modal-content">
              <div className="posting-header">
                <h2>Create a new post</h2>
                <div className="close-container" onClick={handleCloseModal}>
                  <div className="leftright"></div>
                  <div className="rightleft"></div>
                </div>
              </div>
              <form id="postForm" onSubmit={handleSubmit}>
                <div>
                  <div className="title">
                    <label className="post-heading" htmlFor="postTitle">
                      Title
                    </label>
                    <input
                      type="text"
                      className="post-title"
                      id="postTitle"
                      name="postTitle"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="category1">
                    <label className="post-heading" htmlFor="postCategory">
                      Category
                    </label>
                    <input
                      type="text"
                      className="post-category"
                      id="postCategory"
                      name="postCategory"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="add-img">
                    <label className="post-heading" htmlFor="postImage">
                      Add Image
                    </label>
                    <br />
                    <input
                      type="file"
                      className="post-image"
                      id="postImage"
                      name="postImage"
                      accept="image/*"
                      required
                    />
                  </div>
                </div>
                <label className="post-heading" htmlFor="postDescription">
                  Description
                </label>
                <textarea
                  className="post-description"
                  id="postDescription"
                  name="postDescription"
                  autoComplete="off"
                  required
                ></textarea>
                <button type="submit" id="postSubmitBtn" className="postSubmitBtn">
                  Post
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </body>
  );
}
