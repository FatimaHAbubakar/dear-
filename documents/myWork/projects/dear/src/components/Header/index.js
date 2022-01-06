import React from 'react';
import './style.css';
/**
* @author
* @function Header
**/

const Header  = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href='a'>Home</a>
            <a href='a'>About Dear,</a>
            <a href='a'>Contact Dear Editors,</a>
        </nav>
        
        <div className='Search'>
          <form >
            <input type='Text' placeholder='Search posts' />
            <img className='searchIcon' src='./media/icons/search_icon.png' alt="search"/>
         </form>
        </div>
    </header>
   )

 }
 export default Header