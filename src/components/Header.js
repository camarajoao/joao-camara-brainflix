import "../styles/partials/Header.scss";
import Logo from "./Logo.js";
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <header class="header">
            <Logo />
            <SearchBar />
        </header>
    )
}