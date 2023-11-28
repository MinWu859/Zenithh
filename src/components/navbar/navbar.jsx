import "./navBar.module.css";

export default function Navbar() {
    return (
        <nav>
            <p className="logo">ZENITH</p>
            <ul>
                    <li><a href="/Zenith/">HOME</a></li>
                    <li><a href="/Zenith/about">ABOUT</a></li>
                    <li><a href="/Zenith/contact">CONTACT US</a></li>
                    <li><a href="/Zenith/menu">MENU</a></li>
            </ul>
        </nav>
    )
};
