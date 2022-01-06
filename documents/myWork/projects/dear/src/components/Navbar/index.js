import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
import { useState } from 'react';

/**
* @author
* @function Navbar

**/

export const Navbar
 = (props) => {


  const [search,setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert('Searched');

  }

  const openSearch = () => {
     setSearch(true);
  }

  const searchClass =search?'searchInput active': 'searchInput';

  return(
    <div className="Navbar">
        <ul className="navMenu">
        <li><NavLink href="/">Home</NavLink></li> 
        <li><NavLink href="/Post">Posts</NavLink></li> 
        <li><NavLink href="/AboutDear">About Dear,</NavLink></li> 
        <li><NavLink href="/ContactDear">Contact Dear Editors,</NavLink></li>  
        </ul>

        <div className='Search'>
          <form onSubmit={submitSearch}>
            <input type='Text' placeholder='Search posts' className={searchClass}/>
            <img onClick={openSearch} className='searchIcon' src='./media/icons/search_icon.png' alt="search"/>
         </form>
        </div>
        

    </div>
   )

 }

 export default Navbar