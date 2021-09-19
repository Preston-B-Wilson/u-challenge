import React, { Component } from 'react'

export class Landing2 extends Component { 
     
    constructor(props) {
        super(props);
        this.transition = this.transition.bind(this);
        this.state = {
            popupStyles: null,
            plusbuttonStyles: null,
            fadeStyle: null
        }
    }

    transition(state) {
        if (state === "open") {
            this.setState(() => ({
                popupStyles: {
                    display: "initial",
                    animation: "1s ease .2s 1 normal forwards running popup-grow"
                },
                plusbuttonStyles:{
                    animation: ".3s ease 0s 1 normal forwards running plus-bounce"
                },
                fadeStyle:{
                    animation: "1s ease 0s 1 normal forwards running title-fade"
                }         
            }))
        } else if (state === "close") {
            this.setState(() => ({
                popupStyles: {
                    display: "intial",
                    animation: "3s ease .2s 1 normal forwards running popup-shrink"
                },
                plusbuttonStyles:{
                    animation: "1s ease 0s 1 normal forwards running title-fade-in"
                },  
                fadeStyle:{
                    animation: "1s ease 0s 1 normal forwards running title-fade-in"
                }        
            }))
        }
    }

    render() {
        return (
            <div className="root-wrapper">
                <div className="main-container">
                    <div className="sidebar-container">
                        <div className="sidebar-spacer">
                            <div className="sidebar-content">
                                <h1 className="sidebar-title" style={this.state.fadeStyle}>Explore</h1>
                                <div className="sidebar-description-content">
                                    <button type="submit" id="plus-button" style={this.state.plusbuttonStyles} onClick={() => { this.transition("open") }}></button>
                                    <p id="sidebar-description"  style={this.state.fadeStyle}>More Details</p>
                                    <div className="popup-box" style={this.state.popupStyles}>
                                        <button type="submit" id="x-button" onClick={() => { this.transition("close") }}>✖</button>
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
}

export default Landing2

