import { Link } from 'react-router';
import './style.css';

function Navigation({ setLoggedIn }: { setLoggedIn: (value: boolean) => void }) {

    const handleLogout = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
    };

    return (
        <>
            <Link className="nav-link btn-home" key="home" to="/" state="Home">
                <span>Home</span>
            </Link>
            <Link className="nav-link btn-heroes" key="heroes" to="/hero" state="Heroes">
                <span>Heroes</span>
            </Link>
            <Link className='nav-link btn-monsters' key="monsters" to="/monster" state="Monsters">
                <span>Monsters</span>
            </Link>
            <Link className="nav-link btn-logout" to="/login" onClick={handleLogout}>
                <span>Logout</span>
            </Link>
        </>
    )
}

export default Navigation;