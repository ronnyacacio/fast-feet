module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5434,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
