const authToken = (state: any) => state.auth?.token;
const getIsLoggedIn = (state: any) => state.auth.isLoggedIn;
const getIsRefreshing = (state: any) => state.auth.isRefreshing;

const authSelector = {
  authToken,
  getIsLoggedIn,
  getIsRefreshing,
};

export default authSelector;
