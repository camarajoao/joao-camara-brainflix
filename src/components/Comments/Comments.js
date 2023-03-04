import "./Comments.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import addCommentIcon from "../../assets/icons/add_comment.svg"

export default function Comments() {

    return (
        <div className="conversation">
            <h2 className="conversation__title">3 Comments</h2>
            <div className="conversation__container">
                <div className="conversation__post-comment">
                    <div className="conversation__left">
                        <img src={avatar} className="conversation__icon" alt="mohan muruge" />
                    </div>
                    <div className="conversation__right">
                        <form className="conversation__form">
                            <label className="form__comment labels" htmlFor="comment">JOIN THE CONVERSATION</label>
                            <textarea className="form__comment-input" name="comment" id="comment" placeholder="Add a new comment"></textarea>
                            <button className="form__button" type="submit"><span className="form__commentIconContainer"><img src={addCommentIcon} className="form__commentIcon" alt="addcomment-icon" /></span>COMMENT</button>
                        </form>
                    </div>
                </div>
                <div className="conversation__posted">
                    <div className="conversation__posted-container">
                        <div className="conversation__posted-container-left">
                            <img className="conversation__posted-avatar" />
                        </div>
                        <div className="conversation__posted-container-right">
                            <div className="conversation__posted-container-right-top">
                                <p className="conversation__posted-name">Micheal Lyons</p>
                                <p className="conversation__posted-date">08/09/2021</p>
                            </div>
                            <div className="conversation__posted-container-right-bottom">
                                <p className="conversation__posted-text">They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="conversation__posted-container">
                        <div className="conversation__posted-container-left">
                            <img className="conversation__posted-avatar" />
                        </div>
                        <div className="conversation__posted-container-right">
                            <div className="conversation__posted-container-right-top">
                                <p className="conversation__posted-name">Gary Wong</p>
                                <p className="conversation__posted-date">07/15/2021</p>
                            </div>
                            <div className="conversation__posted-container-right-bottom">
                                <p className="conversation__posted-text">Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!</p>
                            </div>
                        </div>
                    </div>
                    <div className="conversation__posted-container">
                        <div className="conversation__posted-container-left">
                            <img className="conversation__posted-avatar" />
                        </div>
                        <div className="conversation__posted-container-right">
                            <div className="conversation__posted-container-right-top">
                                <p className="conversation__posted-name">Theodore Duncan</p>
                                <p className="conversation__posted-date">07/11/2021</p>
                            </div>
                            <div className="conversation__posted-container-right-bottom">
                                <p className="conversation__posted-text">How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

