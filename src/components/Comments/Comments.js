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
                                <p class="conversation__posted-name">Micheal Lyons</p>
                                <p class="conversation__posted-date">08/09/2021</p>
                            </div>
                            <div class="conversation__posted-container-right-bottom">
                                <p class="conversation__posted-text">They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>
                            </div>
                        </div>
                    </div>
                    <div class="conversation__posted-container">
                        <div class="conversation__posted-container-left">
                            <img class="conversation__posted-avatar" />
                        </div>
                        <div class="conversation__posted-container-right">
                            <div class="conversation__posted-container-right-top">
                                <p class="conversation__posted-name">Gary Wong</p>
                                <p class="conversation__posted-date">07/15/2021</p>
                            </div>
                            <div class="conversation__posted-container-right-bottom">
                                <p class="conversation__posted-text">Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!</p>
                            </div>
                        </div>
                    </div>
                    <div class="conversation__posted-container">
                        <div class="conversation__posted-container-left">
                            <img class="conversation__posted-avatar" />
                        </div>
                        <div class="conversation__posted-container-right">
                            <div class="conversation__posted-container-right-top">
                                <p class="conversation__posted-name">Theodore Duncan</p>
                                <p class="conversation__posted-date">07/11/2021</p>
                            </div>
                            <div class="conversation__posted-container-right-bottom">
                                <p class="conversation__posted-text">How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

