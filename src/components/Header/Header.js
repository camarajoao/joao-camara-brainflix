import "./Header.scss";
import brainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg"
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg"

export default function Header() {
    return (
        <header class="header">
            <div class="header__logo">
                <img src={brainFlixLogo} alt="brainflix logo" />
            </div>
            <div class="header__searchBar">
                <input class="header__input" type="search" placeholder="Search" />
                <button class="header__searchIcon" type="submit">
                    <img src={searchIcon} alt="search-icon" />
                </button>
            </div>
            <div class="header__avatarContainer">
                <img src={avatar} class="header__avatarImage" alt="mohan muruge" />
            </div>
            <button class="header__button" type="submit"><span class="header__uploadContainer"><img src={uploadIcon} class="header__upload" /></span>UPLOAD</button>
        </header>
    )
}