"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import CloseBtn from "../../components/CloseBtn";
import "./page.css";

interface Post {
  id: number;
  title: string;
  author: string;
  description: string;
  date: string;
  image: string;
}

export default function BlogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [posts, setPosts] = useState([]); // State to hold all posts
  const [postDetails, setPostDetails] = useState(null); // State for post detail modal

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsClosing(true); // Start fade-out animation
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false); // Reset animation state
    }, 500);
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("postTitle") as string;
    const author = formData.get("postAuthor") as string;
    const description = formData.get("postDescription") as string;
    const imageFile = formData.get("postImage") as File;

    if (!title || !author || !description || !imageFile) {
      alert("Please fill out all fields.");
      return;
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString("default", { month: "short" })} ${currentDate.getFullYear()}`;


    // Create a new post
    const newPost: Post = {
      id: Date.now(),
      title,
      author,
      description,
      image: URL.createObjectURL(imageFile), // Use a preview of the uploaded image
    };

    // Add new post to the list
    setPosts([newPost, ...posts]);

    handleCloseModal();
    (e.target as HTMLFormElement).reset(); // Reset the form
  };

  const handleViewDetails = (postId: number) => {
    const selectedPost = posts.find((post) => post.id === postId);
    setPostDetails(selectedPost || null);
  };

  const handleDeletePost = (postId: number) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleCloseDetails = () => setPostDetails(null);




  return (
    <body>
      <Header />
      <div className="btn-container">
      <button
          className="new-post-btn"
          onClick={handleOpenModal}>
          Create New Post
        </button></div>
      <main className="post-container first-section">
        {/* Render Post Cards */}
        {posts.map((post) => (
          <div
            key={post.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={post.image}
              alt={post.title}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.description.substring(0, 60)}...
              </p>
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleViewDetails(post.id)}
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
              <button
                className="inline-flex items-center px-3 py-2 ml-3 text-sm font-medium text-center text-red-600 bg-white border border-red-600 rounded-lg hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300"
                onClick={() => handleDeletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Modal */}
        {isModalOpen && (
          <div id="createPostModal" className={`modal ${isClosing ? "fadeOut" : ""}`} 
          style={{ display: "flex" }}>
            <div className="modal-content">
              <div className="posting-header">
                <h2>Create a new post</h2>
                <CloseBtn onClose={handleCloseModal} />
              </div>
              <form id="postForm" onSubmit={handleSubmit}>
                <div>
                  <div className="title">
                    <label className="post-heading" htmlFor="postTitle">
                      Title
                    </label>
                    <input type="text" className="post-title" id="postTitle"
                      name="postTitle" autoComplete="off" required />
                  </div>
                  <div className="category1">
                    <label className="post-heading" htmlFor="postCategory">
                      Author
                    </label>
                    <input type="text" className="post-author" id="postAuthor"
                      name="postAuthor" autoComplete="off" required />
                  </div>
                  <div className="add-img">
                    <label className="post-heading" htmlFor="postImage">
                      Add Image
                    </label>
                    <br />
                    <input type="file" className="post-image" id="postImage"
                      name="postImage" accept="image/*" required />
                  </div>
                </div>
                <label className="post-heading" htmlFor="postDescription">
                  Description
                </label>
                <textarea className="post-description" id="postDescription"
                  name="postDescription" autoComplete="off" required >
                </textarea>
                <button type="submit" id="postSubmitBtn" className="postSubmitBtn">
                  Post
                </button>
              </form>
            </div>
          </div>
        )}

        {/*Detail Modal*/}
        {postDetails && (
          <div id="postDetailModal" className="modal" style={{ display: "flex" }}>
            <div className="modal-content">
              <span className="close" onClick={handleCloseDetails}>
                &times;
              </span>
              <h1>{postDetails.title}</h1>
              <span>{postDetails.date}</span>
              <p>{postDetails.description}</p>
            </div>
          </div>
        )}
      </main>
    </body>
  );
}
