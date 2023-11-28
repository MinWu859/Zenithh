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
            <img src="/Zenith/1.jpg" alt="food" />
                    <img src="/Zenith/2.jpg" alt="food" />
                    <img src="/Zenith/3.jpg" alt="food" />
                    <img src="/Zenith/4.jpg" alt="food" />
                    <img src="/Zenith/5.jpg" alt="food" />
                    <img src="/Zenith/10.jpg" alt="food" />
                    <img src="/Zenith/7.jpg" alt="food" />
                    <img src="/Zenith/8.jpg" alt="food" />
                    <img src="/Zenith/9.jpg" alt="food" />
            </div>
        </main>
    );
}