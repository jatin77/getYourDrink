import React from 'react';
import './header.css';

function Header(props) {
  let searchInput = null;

  const searchClicked = () => {
    searchInput.focus();
  };

  return (
    <header>
      <div className='logo'>
        <p>
          drunkIn
          <span className='logo-heart'>
            <i className=' fas fa-heart' />
          </span>
        </p>
      </div>
      <div className='search-box'>
        <div className='search-icon'>
          <i className='fas fa-search' onClick={searchClicked} />
        </div>
        <div className='search-input'>
          <input
            ref={input => (searchInput = input)}
            type='text'
            placeholder='Search by ingredient'
            value={props.inputSearchText}
            onChange={props.onSearch}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
