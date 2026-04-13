import { useState } from 'react';
import './style.css';
import { Link } from 'react-router';
import WaitToSetState from '../../helpers/WaitToSetState';
import ImgHeader from "../../assets/img-header.png"
import ImgLogo from '../../assets/img-header-logo.png';
import redDragonEyeOpening from "../../assets/img-red-dragon-eye-opening.gif"
import redDragonEyeClosing from "../../assets/img-red-dragon-eye-closing.gif"

function Header() {
    const [clicked, setClicked] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    // const navSidebarName = navOpen ? "nav-sidebar-open" : "nav-sidebar-closed";
    const navButtonImage = navOpen ? redDragonEyeOpening : redDragonEyeClosing;

    return (
        <>
            <img src={ImgLogo} className="img-header-logo" alt="img-header-logo" />

            <Link key='Home' to='/'>
                <img src={ImgHeader} className="img-header-image" alt="img-header-main" />
            </Link>

            <button type="button" className="btn-dragon-eye" disabled={clicked}
                onClick={() => {
                    setClicked(true);
                    WaitToSetState(setClicked, false, 900);
                    setNavOpen(!navOpen);
                }}>
                <img className="img-dragon-eye" src={navButtonImage} alt="dragons-eye" />
            </button>
        </>
    );
}

export default Header;