import { createSlice } from '@reduxjs/toolkit';

export interface Authentication {
  authenticationToken: string;
  test:string
}

const initialState: Authentication = {
  authenticationToken: '',
  test : ''
};

export const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    handleLogin: (state: Authentication, action: any) => {
      const { token } = action.payload;
      return {
        ...state,
        authenticationToken: token,
      };
    },
    handleTest : (state: Authentication, action: any) =>{
      return {
        ...state, test : action.payload
      }
    }
  },
});

export const { handleLogin,handleTest } = AuthenticationSlice.actions;

export const namespace = 'AuthenticationSlice';

export default AuthenticationSlice.reducer;
