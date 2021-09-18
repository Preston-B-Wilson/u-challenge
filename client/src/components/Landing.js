import React from 'react'

function landing() {
    return (
        <div className="root-wrapper">
            <div className="main-container" style={{ backgroundImage: 'url("./images/Coding-Challenge-Image.png")' }}>
                <div className="sidebar-container">
                    <div className="sidebar-spacer">
                        <div className="sidebar-content">
                            <h1 className="sidebar-title">Explore</h1>
                            <div className="sidebar-description-content">
                                <input id="plus-logo" type="image" src={process.env.PUBLIC_URL + "/images/Plus.svg"}/>
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
