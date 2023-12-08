// Header.tsx

import React, { useState } from 'react';
import { Drawer } from 'antd';

const Header: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/image/logo.png" alt="" />
      </div>

      <div className="content">
        <a href="">
          <img src="/svg/home.svg" alt="" />
        </a>
        <a href="">
          <img src="/svg/se.svg" alt="" />
        </a>
        <a href="">
          <img src="/svg/faq.svg" alt="" />
        </a>
        <a className="abt" href="">
          Launch
        </a>
        <div className="icon-menu" onClick={showDrawer}>
          <img src="/svg/menu.svg" alt="" />
        </div>
      </div>
      <Drawer
        className="menu"
        title="MENU"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
      >
        <a href="">
          <img src="/svg/home.svg" alt="" />
        </a>
        <a href="">
          <img src="/svg/se.svg" alt="" />
        </a>
        <a href="">
          <img src="/svg/faq.svg" alt="" />
        </a>
        <button className="bt">Launch app</button>
        <button className="bt" onClick={onClose}>
          Close
        </button>
      </Drawer>
    </header>
  );
};

export default Header;
