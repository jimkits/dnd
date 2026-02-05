import { useState } from "react"
import ListParents from "./Navigation"
import NavListItems from "../data/NavListItems"
import pressed from "../assets/nav-button-pressed.svg"
import unpressed from "../assets/nav-button-unpressed.svg"

const SideNav = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navButtonName = navOpen ? "nav-button-pressed" : "nav-button-unpressed";
    const navSidebarName = navOpen ? "nav-sidebar-open" : "nav-sidebar-closed";
    const navButtonImage = navOpen ? pressed : unpressed;
    const navButtonAltText = navOpen ? "pressed img" : "unpressed img";

    return (
        <>
            <div className={navButtonName}>
                <button type="button" className="btn nav" onClick={() => setNavOpen(!navOpen)} style={{ backgroundColor: "#ffffff", border: "0px" }}>
                    <img src={navButtonImage} alt={navButtonAltText} width={100} height={100} />
                </button>
            </div>
            <div className={navSidebarName}>
                {NavListItems.map((item) => {
                    return <ListParents key={item.name} item={item} />
                })}
            </div>
        </>
    );
}

export default SideNav;