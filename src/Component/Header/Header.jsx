import React from 'react';

const Header = () => {
  return (
    <div>
      <header>
        <form action="">
          <input type="text" 
          placeholder='Departure'
          value={departure}
          />
        </form>
      </header>
    </div>
  );
};

export default Header;