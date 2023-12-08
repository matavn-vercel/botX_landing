import { withTranslation } from 'next-i18next';

const Layout = ({ children }: any) => {
  return (
    <div>
      Public Layout
      <div>{children}</div>
    </div>
  );
};

export default withTranslation('common')(Layout);
