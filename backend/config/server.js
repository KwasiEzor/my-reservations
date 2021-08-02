module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 5000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "ee0a86df5ca89263136d065bd0142fd9"),
    },
  },
});
