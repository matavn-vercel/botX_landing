const getImageAbsoluteUrl = (url: any) => {
  if (!url) {
    return '';
  }

  return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_SITE_URL}${url}`;
};

export { getImageAbsoluteUrl };
