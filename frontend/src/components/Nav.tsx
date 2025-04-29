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
        <section id="navLeft">
            <img src={fbIcon} alt="logo" className='fbIcon' />
            {searchBar()}
        </section>
        <section id="navCenter">
            <div className='navCenterBtns'>
                <button className={`navCenterIcon ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')}>
                    <img src={homeIcon} alt="logo" className='homeIcon' />
                </button>
                <button className={`navCenterIcon ${activeTab === 'video' ? 'active' : ''}`} onClick={() => handleTabClick('video')}>
                    <img src={videoIcon} alt="logo" className='videoIcon' />
                </button>
                <button className={`navCenterIcon ${activeTab === 'marketplace' ? 'active' : ''}`} onClick={() => handleTabClick('marketplace')}>
                    <img src={marketplaceIcon} alt="logo" className='marketplaceIcon' />
                </button>
                <button className={`navCenterIcon ${activeTab === 'groups' ? 'active' : ''}`} onClick={() => handleTabClick('groups')}>
                    <img src={groupsIcon} alt="logo" className='groupsIcon' />
                </button>
            </div>
        </section>
        <section id="navRight">
            <section className='navRightIcon'>
                <img src={menuIcon} alt="logo" className='menuIcon' />
            </section>
            <section className='navRightIcon'>
                <img src={messageIcon} alt="logo" className='messageIcon' />
                <img src={thunderIcon} alt="logo" className='thunderIcon' />
            </section>
            <section className='navRightIcon'>
                <img src={notificationIcon} alt="logo" className='notificationIcon' />
            </section>
            <section className='navRightIcon'>
                <img src={avatarIcon} alt="logo" className='profileIcon' />
            </section>
        </section>
    </div>
  )
}
