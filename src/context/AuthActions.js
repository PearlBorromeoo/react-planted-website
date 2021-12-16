export const LoginStart = (userCredentials) => ({
  type:"LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type:"LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (error) => ({
  type:"LOGIN_FAILURE",
  payload:error,
});

export const follow = (userID) => ({
  type: "FOLLOW",
  payload:userID,
});

export const unfollow = (userID) => ({
  type: "UNFOLLOW",
  payload:userID,
});