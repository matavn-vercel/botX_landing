import React from 'react';

import PublicLayout from '@components//Layout/Public';
import Header from '@components//pages/landing/Header';
import Social from '@components//pages/landing/Social';
import Footter from '@components//pages/landing/Footter';

const Landing = () => {
  return (
    <div className="landing">
      <Header />
      <Social />
      <Footter />
    </div>
  );
};

export default Landing;
