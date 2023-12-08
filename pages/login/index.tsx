import { ReactElement } from 'react';

import PublicLayout from '@components//Layout/Public';

function Login() {
  return <div className="home layout-content">Login</div>;
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Login;
