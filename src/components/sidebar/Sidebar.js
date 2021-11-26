import React from 'react';
import './sidebar.css';
import logo from '../../assets/images/logo.png'
import logo_white from '../../assets/images/logo_white.png'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const SidebarItem = props => {
    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}/>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Sidebar = props => {
    const themeReducer = useSelector(state => state.ThemeReducer)
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <i />
                <img src={themeReducer.mode === 'theme-mode-light' ? logo : logo_white} alt="company logo"/>
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    );
};

export default Sidebar;
