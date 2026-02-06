import './style.css';
import { useState } from "react"
import ListParents from "../Lists"
import NavListItems from "../../data/NavListItems"
import pressed from "../../assets/nav-button-pressed.png"
import unpressed from "../../assets/nav-button-unpressed.png"

const SideNav = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navButtonImage = navOpen ? pressed : unpressed;
    const navSidebarName = navOpen ? "nav-sidebar-open" : "nav-sidebar-closed";

    return (
        <>
            <button type="button" className="btn-nav" onClick={() => setNavOpen(!navOpen)}>
                <img className="btn-nav-img" src={navButtonImage} alt="nav img" />
            </button>
            <div className={navSidebarName}>
                {NavListItems.map((item) => {
                    return <ListParents key={item.name} item={item} />
                })}
            </div>
        </>
    );
}

export default SideNav;