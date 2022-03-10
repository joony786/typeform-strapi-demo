module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '84f2a24837cae5037dcafff41832d164'),
  },
});
