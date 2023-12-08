const selectAuthentication = {
  getAuthenticationToken: (state: any) => state?.AuthenticationSlice,
};
 
export const selectTest = {
  getTest: (state: any) => state?.AuthenticationSlice?.test,
};

export default selectAuthentication;
