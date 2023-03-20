import "./Header.scss";
import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="/"><img className="header__logo-image" src={brainFlixLogo} alt="brainflix logo" /></a>
            </div>
            <div className="header__search">
                <input className="header__search-input" type="search" placeholder="Search" />
                <button className="header__search-icon" type="submit">
                    <img src={searchIcon} alt="search-icon" />
                </button>
            </div>
            <div className="header__avatar">
                <img src={avatar} className="header__avatar-image" alt="mohan muruge" />
            </div>
            <Link to={"/upload"} className="header__link"><button className="header__button" type="submit"><span className="header__button-submit"><img src={uploadIcon} className="header__button-submit-icon" alt="upload-icon" /></span>UPLOAD</button></Link>
            <div className="header__avatar-extra">
                <img src={avatar} className="header__avatar-image" alt="mohan muruge" />
            </div>
        </header>
    )
}