import { ReactElement } from 'react';

import PublicLayout from '@components//Layout/Public';

import { Button } from 'antd';
import { useAppDispatch } from 'hooks/useStore';
import { handleTest } from 'redux/authentication/slice';
import PrivateLayout from '@components//Layout/Private';

function Home() {
  const dispatch = useAppDispatch();

  return (
    <div className="home layout-content">
      <Button onClick={() => dispatch(handleTest('okelaaaa'))}>click</Button>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

export default Home;
