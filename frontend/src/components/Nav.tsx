import fbLogo from '../assets/fbLogo.png'

// import React from 'react'
export const Nav = () => {
    const searchBar = () => {
        return (
            <div id="searchBar">
                <input className='searchInput' type="text" placeholder="Search" />
            </div>
        )
    }

  return (
    <div id="navContainer">
        <section id="navLeft">
            <img src={fbLogo} alt="logo" className='fbLogo' />
            {searchBar()}
        </section>
        <section id="navCenter"></section>
        <section id="navRight"></section>
    </div>
  )
}
