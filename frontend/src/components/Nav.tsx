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
// import React from 'react'
export const Nav = () => {
    const [activeTab, setActiveTab] = useState('home')
    
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
            <section className='navCenterIcon'>
                <img src={homeIcon} alt="logo" className='homeIcon' />
            </section>
            <section className='navCenterIcon'>
                <img src={videoIcon} alt="logo" className='videoIcon' />
            </section>
            <section className='navCenterIcon'>
                <img src={marketplaceIcon} alt="logo" className='marketplaceIcon' />
            </section>
            <section className='navCenterIcon'>
                <img src={groupsIcon} alt="logo" className='groupsIcon' />
            </section>
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
