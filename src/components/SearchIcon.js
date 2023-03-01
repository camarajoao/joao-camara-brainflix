import "../styles/partials/SearchIcon.scss";
import searchIcon from "../assets/icons/search.svg"

export default function SearchIcon() {
    return (
        <button type="submit" class="searchButton">
                <img src={searchIcon} alt="search-icon" />
        </button>
    )
}