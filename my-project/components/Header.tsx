// my-project/components/Header.tsx
import React from "react";
import Link from "next/link"; 


const Header = () => {
    return (
        <header>
            <h1 className="logo">
                CUISINES<a href="#"></a>
            </h1>
            <nav>
                <ul>
                <li><Link href="/">Home</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/blog-page">Posts</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
