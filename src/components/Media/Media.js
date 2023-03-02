import "./Media.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

export default function Media() {

    const youtube = "https://www.youtube.com/watch?v=gjAiLzl0y-I"
    return (
        <div class="media">
            <video class="media__video" controls="true">
                <source src={youtube} type="video/mp4" />
            </video>
            <div class="media__container">
                <div class="media__detailsContainer">
                    <h1 class="media__title">BMX Rampage: 2021 Highlights</h1>
                </div>
                <div class="media__detailsContainer media__detailsContainer--padding">
                    <div class="media__details">
                        <h3>By Red Crow</h3>
                        <p class="media__date">07/11/2021</p>
                    </div>
                    <div class="media__details">
                        <div class="media__public">
                            <img class="media__publicIcon media__publicIcon--margin" src={views} alt="views icon" />
                            <p class="media__publicNumber">1,001,023</p>
                        </div>
                        <div class="media__public">
                            <img class="media__publicIcon" src={likes} alt="likes icon" />
                            <p class="media__publicNumber">110,985</p>
                        </div>
                    </div>
                </div>
                <div class="media__detailsContainer--padding">
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