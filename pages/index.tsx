import { useAppDispatch } from 'hooks/useStore';
import Header from '@components//pages/landing/Header';
import Social from '@components//pages/landing/Social';
import Footter from '@components//pages/landing/Footter';
function Home() {
  return (
    <div className="landing">
      <Header />
      <Social />
      <Footter />
    </div>
  );
}

export default Home;
