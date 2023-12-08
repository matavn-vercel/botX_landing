import { ReactElement } from 'react';

import PublicLayout from '@components//Layout/Public';

function Register() {
  return <div className="home layout-content">register</div>;
}

Register.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Register;
