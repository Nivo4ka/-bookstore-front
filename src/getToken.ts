const getToken = () => {
  const isAuthenticated = !!localStorage.user;
  let token = '';
  if (isAuthenticated) {
    token = JSON.parse(localStorage.user).token;
  }
  return token;
};

export default getToken;
