// my-project/components/Header.tsx
import React from "react";

const Header = () => {
    return (
        <header>
            <h1 className="logo">
                CUISINES<a href="#"></a>
            </h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="/blog">Posts</a></li>
                    <li>
                        <a href="#" id="createPostBtn">Create Post</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
