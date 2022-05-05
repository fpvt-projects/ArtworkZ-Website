import "./Navbar.scss"

const Navbar = () => {
    return ( 
        <nav className="navContainer">
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="#aboutContainer" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">Tokenomics</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">Roadmap</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">Gallery</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">Contact Us</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;