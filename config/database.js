module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '0.0.0.0'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'postgres'),
        username: env('DATABASE_USERNAME', 'strapiec'),
        password: env('DATABASE_PASSWORD', 'strapiec@13579'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
