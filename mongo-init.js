// Create user
dbAdmin = db.getSiblingDB('admin');
dbAdmin.createUser({
  user: 'root',
  pwd: 'root',
  roles: [{ role: 'readWrite', db: 'bov_database' }],
});
