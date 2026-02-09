import './style.css';
import { useState } from "react"
import ListParents from "../Lists"
import NavListItems from "../../data/NavListItems"
import redDragonEyeOpening from "../../assets/img-red-dragon-eye-opening.gif"
import redDragonEyeClosing from "../../assets/img-red-dragon-eye-closing.gif"
import WaitToSetState from '../../helpers/waitToSetState';

const SideNav = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [clicked, setClicked] = useState(false);

    const navButtonImage = navOpen ? redDragonEyeOpening : redDragonEyeClosing;
    const navSidebarName = navOpen ? "nav-sidebar-open" : "nav-sidebar-closed";

    return (
        <>
            <button type="button" className="btn-nav" disabled={clicked}
                onClick={() => {
                    setClicked(true);
                    WaitToSetState(setClicked, false, 900);
                    setNavOpen(!navOpen);
                }}>
                <img className="img-dragon-eye" src={navButtonImage} alt="dragons-eye" />
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