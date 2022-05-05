import { useEffect } from "react";
import logoGIF from "../resources/logo-action.GIF"
import "./Header.scss"

const Header = () => {

    setInterval(function () {
        const show = document.querySelector("span[data-show]");
        const next = show.nextElementSibling || document.querySelector("span:first-child");
        const up = document.querySelector("span[data-up]");

        if (up) {
          up.removeAttribute("data-up");
        }
      
        show.removeAttribute("data-show");
        show.setAttribute("data-up", "");
        next.setAttribute("data-show", "");
      }, 1700);
      

    return ( 
        <div className="headerContainer">
            <img src={logoGIF} alt="artworkz" className="logoSection" />
            <div className="text-header">
                <h1 className="artworkz-text">Artworkz Infinity
                    <div className="mask">
                        <span data-show>Visualize.</span>
                        <span>Imagine.</span>
                        <span>Create.</span>
                    </div>
                </h1>
            </div>
        </div>
     );
}   
 
export default Header;