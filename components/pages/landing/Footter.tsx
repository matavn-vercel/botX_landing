import React from 'react';

const Footter: React.FC = () => {
  return (
    <div className="footter">
      <div className="logo">
        <div className="img">
          <img src="/image/logo.png" alt="" />
          <div className="text">
            <div>Home</div>
            <div>Services</div>
            <div>FAQ</div>
          </div>
        </div>
        <div className="appp">
          <a className="tele" href="https://t.me/XSpeeder">
            <img src="/image/tele.png" alt="" />
          </a>
          <a className="tw" href="https://twitter.com/XSpeedershop">
            <img src="/image/tw.png" alt="" />
          </a>
          <a className="zalo" href="https://zalo.me/g/dsugwp477">
            <img src="/image/zalo.png" alt="" />
          </a>
        </div>
      </div>
      <div className="privaci">
        <div className="left">
          <img src="/image/text.png" alt="" />
        </div>
        <div className="right">
          <img src="/image/textt.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footter;
