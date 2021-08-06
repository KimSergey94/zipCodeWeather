import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo"><img className="topbarTopLeftLogo" src="/assets/images/logo.png" alt="Easy Docs" /></span>
                        <div className="topbarMiddleIconContainer">
                            <span>Get current weather by zip code </span>
                        </div>
                    </div>
                    <div className="topRight">
                       
                        <div className="topbarIconContainersContainer">
                            <div className="topbarIconContainer">
                                <NotificationsNone className="topbarIcon" />
                                <span className="topIconBadge">2</span>
                            </div>
                            <div className="topbarIconContainer">
                                <Language className="topbarIcon" />
                                <span className="topIconBadge">3</span>
                            </div>
                            <div className="topbarIconContainer">
                                <Settings style={{width:'32px',height:'32px'}} />
                                <span className="topIconBadge">4</span>
                            </div>
                        </div>
                        <div className="topbarProfile">
                            <img src="/assets/images/img_avatar.png" alt="Profile" className="topAvatar" />
                            <span className="topbarProfileName">
                                Mikhail Prokhorov                        
                            </span>
                        </div>
                    </div>
                </div>
                <div className="links-container"></div>
            </div>
        </div>
        
    )
}
