const authToken = (state: any) => state.auth?.token;
const getIsLoggedIn = (state: any) => state.auth.isLoggedIn;
const getIsRefreshing = (state: any) => state.auth.isRefreshing;

const getAdminEmail = (state: any) => state.auth.admin?.email;

const authSelector = {
  authToken,
  getIsLoggedIn,
  getIsRefreshing,
  getAdminEmail,
};

export default authSelector;
