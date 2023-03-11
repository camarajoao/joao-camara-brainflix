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
        <section className="media">
            <div className="media__title">
                <h1 className="media__title-content">{selectedVideo.title}</h1>
            </div>
            <div className="media__container">

                <div className="media__upload">
                    <h3 className="media__upload-channel">By {selectedVideo.channel}</h3>
                    <p className="media__upload-date">{timestamp}</p>
                </div>

                <div className="media__interaction">

                    <div className="media__public media__public--margin">
                        <img className="media__public-icon media__public-icon--margin" src={views} alt="views icon" />
                        <p className="media__public-number">{selectedVideo.views}</p>
                    </div>

                    <div className="media__public">
                        <img className="media__public-icon" src={likes} alt="likes icon" />
                        <p className="media__public-number">{selectedVideo.likes}</p>
                    </div>

                </div>
            </div>

            <div className="media__description">
                <p>{selectedVideo.description}</p>
            </div>
        </section>
    )
}