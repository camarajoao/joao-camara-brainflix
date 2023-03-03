import "./Media.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

export default function Media() {

    return (
        <div className="media">
            <video className="media__video" poster="" controls="true">
                <source src="" />
            </video>
            <div className="media__container">
                <div className="media__detailsContainer">
                    <h1 className="media__title">BMX Rampage: 2021 Highlights</h1>
                </div>
                <div className="media__detailsContainer media__detailsContainer--padding media__detailsContainer--paddingBottom media__detailsContainer--borderBottom">
                    <div className="media__details">
                        <h3 className="media__detailsHeader">By Red Crow</h3>
                        <p className="media__date">07/11/2021</p>
                    </div>
                    <div className="media__details media__details--justify">
                        <div className="media__public media__public--margin">
                            <img className="media__publicIcon media__publicIcon--margin" src={views} alt="views icon" />
                            <p className="media__publicNumber">1,001,023</p>
                        </div>
                        <div className="media__public">
                            <img className="media__publicIcon" src={likes} alt="likes icon" />
                            <p className="media__publicNumber">110,985</p>
                        </div>
                    </div>
                </div>
                <div className="media__detailsContainer--padding media__detailsContainer--paddingTablet">
                    <p>On a gusty day in Southern Utah, a group of 25
                        daring mountain bikers blew the doors off what
                        is possible on two wheels, unleashing some of
                        the biggest moments the sport has ever seen.
                        While mother nature only allowed for one full run
                        before the conditions made it impossible to ride,
                        that was all that was needed for event veteran
                        Kyle Strait, who won the event for the second
                        time -- eight years after his first Red Cow
                        Rampage title</p>
                </div>
            </div>
        </div>
    )
}