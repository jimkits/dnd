import './style.css';
import ImgHeader from "../../assets/img-header.png"
import ImgLogo from '../../assets/img-header-logo.png';

function Header() {
    return (
        <div className="flex-centre-top">
            <img src={ImgLogo} className="img-header-logo" alt="img-header-logo" />
            <img src={ImgHeader} className="img-header-image" alt="img-header-main" />
        </div>
    );
}

export default Header;