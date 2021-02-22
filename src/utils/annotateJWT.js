const annotateJWTManager = () => {
  let jwt = null;

  const getJwt = () => jwt;

  const setJwt = (sentJwt) => {
    jwt = sentJwt;
  };

  const eraseJwt = () => {
    jwt = null;
    return true;
  };

  return {
    getJwt,
    setJwt,
    eraseJwt,
  };
};

export default annotateJWTManager();
