import "./Header.scss";
import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg"
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg"

export default function Header() {
    return (
        <header className="header">
            <div className="header__logoContainer">
                <img className="header__logo" src={brainFlixLogo} alt="brainflix logo" />
            </div>
            <div className="header__searchBar">
                <input className="header__input" type="search" placeholder="Search" />
                <button className="header__searchIcon" type="submit">
                    <img src={searchIcon} alt="search-icon" />
                </button>
            </div>
            <div className="header__avatarContainer">
                <img src={avatar} className="header__avatarImage" alt="mohan muruge" />
            </div>
            <button className="header__button" type="submit"><span className="header__uploadContainer"><img src={uploadIcon} className="header__upload" /></span>UPLOAD</button>
            <div className="header__avatarSecondContainer">
                <img src={avatar} className="header__avatarImage" alt="mohan muruge" />
            </div>
        </header>
    )
}