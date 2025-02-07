import { createContext, useEffect, useReducer } from 'react';

const UserContext = createContext();

const initialState = {
   user: null,
   loading: false,
   error: null,
};

const authReducer = (state, action) => {
   switch (action.type) {
      case 'LOGIN_START':
         return {
            ...state,
            loading: true,
            error: null,
         };
      case 'LOGIN_SUCCESS':
         return {
            ...state,
            user: action.payload,
            loading: false,
            error: null,
         };
      case 'LOGIN_FAILURE':
         return {
            ...state,
            user: null,
            loading: false,
            error: action.payload,
         };
      case 'REGISTER_SUCCESS':
         return {
            ...state,
            loading: false,
            error: null,
         };
      case 'LOGOUT':
         return {
            ...state,
            user: null,
         };
      default:
         return state;
   }
};

const AuthUserContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(authReducer, initialState);

   // Save the user data to localStorage whenever it changes
   useEffect(() => {
      localStorage.setItem('user', JSON.stringify(state.user));
   }, [state.user]);

   return (
      <UserContext.Provider value={{
         user: state.user,
         loading: state.loading,
         error: state.error,
         dispatch,
      }}>
         {children}
      </UserContext.Provider>
   );
};

export { UserContext, AuthUserContextProvider };
