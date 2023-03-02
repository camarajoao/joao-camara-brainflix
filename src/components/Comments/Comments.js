import "./Comments.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import addCommentIcon from "../../assets/icons/add_comment.svg"

export default function Comments() {

    return (
        <div class="conversation">
            <h2 class="conversation__title">3 Comments</h2>
            <div class="conversation__container">
                <div class="conversation__post-comment">
                    <div class="conversation__left">
                        <img src={avatar} class="conversation__icon" alt="mohan muruge" />
                    </div>
                    <div class="conversation__right">
                        <form class="conversation__form">
                            <label class="form__comment labels" for="comment">JOIN THE CONVERSATION</label>
                            <textarea class="form__comment-input" name="comment" id="comment" placeholder="Add a new comment"></textarea>
                            <button class="form__button" type="submit"><span class="form__commentIconContainer"><img src={addCommentIcon} class="form__commentIcon" alt="addcomment-icon" /></span>COMMENT</button>
                        </form>
                    </div>
                </div>
                <div class="conversation__posted">
                    <div class="conversation__posted-container">
                        <div class="conversation__posted-container-left">
                            <img class="conversation__posted-avatar" />
                        </div>
                        <div class="conversation__posted-container-right">
                            <div class="conversation__posted-container-right-top">
                                <p class="conversation__posted-name">Connor Walton</p>
                                <p class="conversation__posted-date">02/16/2021</p>
                            </div>
                            <div class="conversation__posted-container-right-bottom">
                                <p class="conversation__posted-text">This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.</p>
                            </div>
                        </div>
                    </div>
                    <div class="conversation__posted-container">
                        <div class="conversation__posted-container-left">
                            <img class="conversation__posted-avatar" />
                        </div>
                        <div class="conversation__posted-container-right">
                            <div class="conversation__posted-container-right-top">
                                <p class="conversation__posted-name">Emilie Beach</p>
                                <p class="conversation__posted-date">01/08/2021</p>
                            </div>
                            <div class="conversation__posted-container-right-bottom">
                                <p class="conversation__posted-text">I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.</p>
                            </div>
                        </div>
                    </div>
                    <div class="conversation__posted-container">
                        <div class="conversation__posted-container-left">
                            <img class="conversation__posted-avatar" />
                        </div>
                        <div class="conversation__posted-container-right">
                            <div class="conversation__posted-container-right-top">
                                <p class="conversation__posted-name">Miles Acosta</p>
                                <p class="conversation__posted-date">12/19/2020</p>
                            </div>
                            <div class="conversation__posted-container-right-bottom">
                                <p class="conversation__posted-text">I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

