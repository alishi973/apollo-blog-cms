const jwt = require('jwt');
module.exports = (token) => {
  if (!token) return { isAuth: false, userId: null };
  let decode;
  try {
    decode = jwt.verify(currentToken, process.env.JWT);
  } catch (err) {
    //Refresh Token
    /* if (err.name === 'TokenExpiredError') {
      decode = jwt.decode(currentToken, process.env.JWT);
      const newJWT = jwt.sign({ email: decode.email, id: decode.id }, process.env.JWT, { expiresIn: '15m' });
      res.setHeader('Set-Cookie', newJWT);
    } else {
      req.isAuth = false;
      return next();
    } */
    return { user: null, isAuth: false };
  }
  return { isAuth: true, user: decode.id };
};
