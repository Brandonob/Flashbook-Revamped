import { useState } from 'react'
import fbIcon from '../assets/fbIcon.png'
import menuIcon from '../assets/menuIcon.png'
import messageIcon from '../assets/messageIcon.png'
import notificationIcon from '../assets/notificationIcon.png'
import avatarIcon from '../assets/avatarIcon.png'
import thunderIcon from '../assets/thunderIcon.png'
import searchIcon from '../assets/searchIcon.png'
import videoIcon from '../assets/videoIcon.png'
import marketplaceIcon from '../assets/marketplaceIcon.png'
import groupsIcon from '../assets/groupsIcon.png'
import homeIcon from '../assets/homeIcon.png'
import { useLocation, useNavigate } from 'react-router-dom'
// import React from 'react'
export const Nav = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [activeDropdown, setActiveDropdown] = useState('home')

    // Map path to tab name
    const pathToTab: Record<string, string> = {
        '/': 'home',
        '/video': 'video',
        '/marketplace': 'marketplace',
        '/groups': 'groups'
    }

    // Determine active tab from current path
    const activeTab = pathToTab[location.pathname] || 'home'

    const handleTabClick = (tab: string) => {
        // Map tab name to path
        const tabToPath: Record<string, string> = {
            home: '/',
            video: '/video',
            marketplace: '/marketplace',
            groups: '/groups'
        }
        navigate(tabToPath[tab])
    }

    const searchBar = () => {
        return (
            <div id="searchBar">
                <img src={searchIcon} alt="logo" className='searchIcon' />
                <input className='searchInput' type="text" placeholder="Search Flashbook" />
            </div>
        )
    }

  return (
    <div id="navContainer">
        <div id="navLeft">
            <a href="/">
                <img src={fbIcon} alt="logo" className='fbIcon' />
            </a>
            {searchBar()}
        </div>
        <div id="navCenter">
            <div className='navCenterBtns'>
                <section className={`navBtnContainer ${activeTab === 'home' ? 'active' : ''}`}>
                    <button className={`navCenterIcon ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')}>
                        <img src={homeIcon} alt="logo" className='homeIcon' />
                    </button>
                </section>
                <section className={`navBtnContainer ${activeTab === 'video' ? 'active' : ''}`}>
                    <button className={`navCenterIcon ${activeTab === 'video' ? 'active' : ''}`} onClick={() => handleTabClick('video')}>
                        <img src={videoIcon} alt="logo" className='videoIcon' />
                    </button>
                </section>
                <section className={`navBtnContainer ${activeTab === 'marketplace' ? 'active' : ''}`}>
                    <button className={`navCenterIcon ${activeTab === 'marketplace' ? 'active' : ''}`} onClick={() => handleTabClick('marketplace')}>
                        <img src={marketplaceIcon} alt="logo" className='marketplaceIcon' />
                    </button>
                </section>
                <section className={`navBtnContainer ${activeTab === 'groups' ? 'active' : ''}`}>
                    <button className={`navCenterIcon ${activeTab === 'groups' ? 'active' : ''}`} onClick={() => handleTabClick('groups')}>
                        <img src={groupsIcon} alt="logo" className='groupsIcon' />
                    </button>
                </section>
            </div>
        </div>
        <div id="navRight">
            <section className={`navRightIcon ${activeDropdown === 'menu' ? 'active' : ''}`} onClick={() => setActiveDropdown(activeDropdown === 'menu' ? '' : 'menu')}>
                <img src={menuIcon} alt="logo" className='menuIcon' />
                {activeDropdown === 'menu' && (
                    <div className="dropdown">Menu Dropdown</div>
                )}
            </section>
            <section className={`navRightIcon ${activeDropdown === 'messages' ? 'active' : ''}`} onClick={() => setActiveDropdown(activeDropdown === 'messages' ? '' : 'messages')}>
                <img src={messageIcon} alt="logo" className='messageIcon' />
                <img src={thunderIcon} alt="logo" className='thunderIcon' />
                {activeDropdown === 'messages' && (
                    <div className="dropdown">Messages Dropdown</div>
                )}
            </section>
            <section className={`navRightIcon ${activeDropdown === 'notifications' ? 'active' : ''}`} onClick={() => setActiveDropdown(activeDropdown === 'notifications' ? '' : 'notifications')}>
                <img src={notificationIcon} alt="logo" className='notificationIcon' />
                {activeDropdown === 'notifications' && (
                    <div className="dropdown">Notifications Dropdown</div>
                )}
            </section>
            <section className={`navRightIcon ${activeDropdown === 'profile' ? 'active' : ''}`} onClick={() => setActiveDropdown(activeDropdown === 'profile' ? '' : 'profile')}>
                <img src={avatarIcon} alt="logo" className='profileIcon' />
                {activeDropdown === 'profile' && (
                    <div className="dropdown">Profile Dropdown</div>
                )}
            </section>
        </div>
    </div>
  )
}
