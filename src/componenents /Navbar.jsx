import React from 'react';
import { Language, NotificationsNone, Settings } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div>
      <h1>Navbar designs</h1>
      <div>
        <Language />
      </div>
      <div>
        <NotificationsNone />
      </div>
      <div>
        <Settings />
      </div>
    </div>
  );
};

export default Navbar;
