import './style.css';
import ImgHeader from "../../assets/img-header.png"
import ImgLogo from '../../assets/img-header-logo.png';
import { Link } from 'react-router';

function Header() {
    return (
        <>
            <img src={ImgLogo} className="img-header-logo" alt="img-header-logo" />

            <Link key='Home' to='/'>
                <img src={ImgHeader} className="img-header-image" alt="img-header-main" />
            </Link>
        </>
    );
}

export default Header;