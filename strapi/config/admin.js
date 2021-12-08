module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7eba39f4baa41c97ff5c1dc217f9a21b'),
  },
});
