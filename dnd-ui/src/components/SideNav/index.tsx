import { useState } from "react"
import { useNavigate } from "react-router"
import './style.css';
import List from "./ListParents"
import HeroesList from "../../data/HeroesList"
import MonsterList from "../../data/MonsterSize"
import redDragonEyeOpening from "../../assets/img-red-dragon-eye-opening.gif"
import redDragonEyeClosing from "../../assets/img-red-dragon-eye-closing.gif"
import WaitToSetState from '../../helpers/WaitToSetState';

const SideNav = ({ setLoggedIn }: { setLoggedIn: (value: boolean) => void }) => {
    const [navOpen, setNavOpen] = useState(false);
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const navButtonImage = navOpen ? redDragonEyeOpening : redDragonEyeClosing;
    const navSidebarName = navOpen ? "nav-sidebar-open" : "nav-sidebar-closed";

    const handleLogout = () => {
        sessionStorage.removeItem("loggedIn");
        setLoggedIn(false);
        navigate("/login");
    };

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
            <button type="button" className="btn-logout" onClick={handleLogout}>
                Logout
            </button>
            <div className={navSidebarName}>
                {HeroesList.map((item) => {
                    return <List key={item.name} item={item} />
                })}
                {MonsterList.map((item) => {
                    return <List key={item.name} item={item} />
                })}
            </div>
        </>
    );
}

export default SideNav;