const userModel = require('../../modules/auth/user.model');
const { verifyToken } = require('../utils/auth.util');
async function checkAuth(req, res, next) {
  try {
    const authorization = req?.headers?.authorization;
    const [bearer, token] = authorization.split(' ');
    if (bearer && bearer.toLowerCase() === 'bearer') {
      if (token) {
        const verifyResult = verifyToken(token);
        const user = await userModel.findOne({
          username: verifyResult.username,
        });
        req.isAuthenticated = !!user;
        if (!user)
          throw {
            status: 401,
            type: 'Unauthorized',
            message: 'User authorization failed please try again',
          };
        req.user = {
          id: user._id,
          username: user.username,
        };
        return next();
      }
      throw {
        status: 401,
        type: 'Unauthorized',
        message: 'User authorization failed please login and try again',
      };
    }
    throw {
      status: 401,
      type: 'Unauthorized',
      message: 'User authorization failed please login and try again',
    };
  } catch (error) {
    next(error);
  }
}

module.exports = {
  checkAuth,
};
