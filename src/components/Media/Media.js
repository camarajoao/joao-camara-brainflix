import "./Media.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

export default function Media({ selectedVideo }) {

    const date = new Date(selectedVideo.timestamp);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const timestamp = `${month}/${day}/${year}`


    return (
        <div className="media">
            <div className="media__detailsContainer">
                <h1 className="media__title">{selectedVideo.title}</h1>
            </div>
            <div className="media__detailsContainer media__detailsContainer--padding media__detailsContainer--paddingBottom media__detailsContainer--borderBottom">
                <div className="media__details">
                    <h3 className="media__detailsHeader">By {selectedVideo.channel}</h3>
                    <p className="media__date">{timestamp}</p>
                </div>
                <div className="media__details media__details--justify">
                    <div className="media__public media__public--margin">
                        <img className="media__publicIcon media__publicIcon--margin" src={views} alt="views icon" />
                        <p className="media__publicNumber">{selectedVideo.views}</p>
                    </div>
                    <div className="media__public">
                        <img className="media__publicIcon" src={likes} alt="likes icon" />
                        <p className="media__publicNumber">{selectedVideo.likes}</p>
                    </div>
                </div>
            </div>
            <div className="media__detailsContainer--padding media__detailsContainer--paddingTablet">
                <p>{selectedVideo.description}</p>
            </div>
        </div>
    )
}