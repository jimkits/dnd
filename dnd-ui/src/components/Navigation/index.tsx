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
                <h2>Home</h2>
            </Link>
            <Link className="nav-link btn-heroes" key="heroes" to="/hero" state="Heroes">
                <h2>Heroes</h2>
            </Link>
            <Link className='nav-link btn-monsters' key="monsters" to="/monster" state="Monsters">
                <h2>Monsters</h2>
            </Link>
            <Link className="nav-link btn-logout" to="/login" onClick={handleLogout}>
                <h2>Logout</h2>
            </Link>
        </>
    )
}

export default Navigation;