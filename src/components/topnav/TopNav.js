import React, { useCallback } from 'react';
import './topnav.css'
import {Link, useNavigate} from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import ThemeMenu from "../thememenu/ThemeMenu";
import notifications from '../../assets/JsonData/notification.json'
import user_image from '../../assets/images/nazar.jpg'
import {useAuth} from "../../hooks/useAuth";

function TopNav() {
    const {logout} = useAuth();
    const navigate = useNavigate();

    const user_menu = [
        {
            icon: "bx bx-user",
            content: "Profile",
            handleClick: () => navigate("/profile")
        },
        {
            icon: "bx bx-wallet-alt",
            content: "My Wallet"
        },
        {
            icon: "bx bx-cog",
            content: "Settings"
        },
        {
            icon: "bx bx-log-out-circle bx-rotate-180",
            content: "Logout",
            handleClick: () => logout()
        }
    ]

    const curr_user = {
        display_name: 'Nazar Dzhura',
        image: user_image
    }

    const renderNotificationItem = (item, index) => (
        <div className="notification-item" key={index}>
            <i className={item.icon}/>
            <span>{item.content}</span>
        </div>
    )

    const renderUserToggle = (user) => (
        <div className="topnav__right-user">
            <div className="topnav__right-user__image">
                <img src={user.image} alt=""/>
            </div>
            <div className="topnav__right-user__name">
                {user.display_name}
            </div>
        </div>
    )

    const renderUserMenu = (item, index) => (
            <div className="notification-item" onClick={item.handleClick} key={index}>
                <i className={item.icon}/>
                <span>{item.content}</span>
            </div>
    )

    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'/>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    <Dropdown
                        icon="bx bx-bell"
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    );
}

export default TopNav;