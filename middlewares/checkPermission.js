
const checkPermission = (permission) => {
  return async function (req, res, next) {
    const user = await User.findById(req.user.userId);
    const role = await Role.findById(user.role);
    if (role.permissions.indexOf(permission) != -1 || role.permissions.indexOf("all") != -1) {
      next();
    } else {
      logger(401, "Operation Not Allowed", {}, req.user);
      return res.status(401).json({ success: false, message: "Operation Not Allowed" });
    }
  }
}

module.exports = checkPermission;