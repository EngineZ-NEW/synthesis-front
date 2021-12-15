import React, {useEffect} from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'

import {Outlet, useLocation} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'

const Layout = () => {

    const location = useLocation();

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        dispatch(ThemeAction.setMode(themeClass))
    }, [dispatch])

    if (localStorage.getItem("token")) {
        return (
            <div className={`layout ${themeReducer.mode}`}>
                <Sidebar
                    location={location}
                />
                <div className="layout__content">
                    <TopNav/>
                    <div className="layout__content-main">
                        <Outlet/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`layout ${themeReducer.mode}`}>
                <Outlet/>
            </div>
        )
    }
}

export default Layout