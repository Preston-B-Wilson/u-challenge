import React from 'react'

function landing() {
    return (
        <div className="root-wrapper">
            <div className="main-container">
                <div className="sidebar-container">
                    <div className="sidebar-spacer">
                        <div className="sidebar-content">
                            <h1 className="sidebar-title">Explore</h1>
                            <div className="sidebar-description-content">
                                <button type="submit" id="plus-button"></button>
                                <div className="popup-box">
                                <button type="submit" id="x-button"></button>
                                    <h1 id="popup-title">Explore</h1>
                                    <div id="popup-dash"></div>
                                    <p id="popup-description">{" \
                                    Cat ipsum dolor sit amet, has closed eyes but still sees you but kitty kitty pussy cat doll ask \n \
                                    to be pet then attack owners hand caticus cuteicus. Hide when guests come over put butt in owner's \n \
                                    face, sit on human really likes hummus stare at wall turn and meow stare at wall some more meow again \n \
                                    continue staring so catto munch salmono and i'm going to lap some water out of my master's cup meow. \n \
                                    Twitch tail in permanent irritation being gorgeous with belly side up have secret plans and poop on \n \
                                    the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, \n \
                                    hide from fireworks, lick toe beans, attack christmas tree. Sit by the fire push your water glass on \n \
                                    "}</p>
                                    <button id="popup-readmore">READ MORE</button>
                                </div>
                                <p id="sidebar-description">More Details</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-icons-container">
                    <input id="facebook-logo" type="image" src={process.env.PUBLIC_URL + "/images/Facebook.svg"}/>
                    <input id="instagram-logo" type="image" src={process.env.PUBLIC_URL + "/images/Instagram.svg"}/>
                </div>
            </div>
        </div>
    )
}

export default landing
