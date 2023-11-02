const authToken = (state: any) => state.auth?.token;

const authSelector = {
  authToken,
};
export default authSelector;
