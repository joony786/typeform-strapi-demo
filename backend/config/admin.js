module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd73be4638c2bab35dad2574da9581435'),
  },
});
