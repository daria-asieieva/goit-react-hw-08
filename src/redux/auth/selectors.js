export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const useAuth = () => ({
  user: selectUser,
  isLoggedIn: selectIsLoggedIn,
  isRefreshing: selectIsRefreshing,
});
