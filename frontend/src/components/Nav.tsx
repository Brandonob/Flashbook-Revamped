import fbIcon from '../assets/fbIcon.png'
import menuIcon from '../assets/menuIcon.png'
import messageIcon from '../assets/messageIcon.png'
import notificationIcon from '../assets/notificationIcon.png'
import avatarIcon from '../assets/avatarIcon.png'
import thunderIcon from '../assets/thunderIcon.png'
import searchIcon from '../assets/searchIcon.png'
// import React from 'react'
export const Nav = () => {
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
        <section id="navCenter"></section>
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
