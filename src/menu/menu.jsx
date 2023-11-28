import React from 'react';
import './menu.module.css'

export default function Menu() {
    return (
        <main>
            <header>
            <h1>Our menu</h1>
                {/* For this page, write html for a gallery and use all images in the public folder */}
                <p>Home / Menu</p>
            </header>
            <div>
            <img src="/Zenithh/1.jpg" alt="food" />
                    <img src="/Zenithh/2.jpg" alt="food" />
                    <img src="/Zenithh/3.jpg" alt="food" />
                    <img src="/Zenithh/4.jpg" alt="food" />
                    <img src="/Zenithh/5.jpg" alt="food" />
                    <img src="/Zenithh/10.jpg" alt="food" />
                    <img src="/Zenithh/7.jpg" alt="food" />
                    <img src="/Zenithh/8.jpg" alt="food" />
                    <img src="/Zenithh/9.jpg" alt="food" />
            </div>
        </main>
    );
}