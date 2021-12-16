import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user://null,
  {
    "_id": "61b63091c62b86e73a162c32",
    "username": "pearl",
    "email": "pearlborromeo@yahoo.com",
    "profilePicture": "/assets/profile-pictures/1.jpeg",
    "isAdmin": true,
    "followers": [
        "61b66fd0dc0a8e1982b8de59"
    ],
    "following": [
        "61b95a9b75dbc84fb7664f84"
    ],
    "createdAt": "2021-12-12T17:25:37.879Z",
    "__v": 0,
    "description": "HA?! HATDOG!!!",
    "name": "Lotus Pearl Borromeo",
    "coverPicture": "/assets/posts-image/1.jpeg"
},
  isFetching:false,
  error:false
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{
      user:state.user, 
      isFetching:state.isFetching, 
      error:state.error,
      dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}