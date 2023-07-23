dbAdmin = db.getSiblingDB('admin');
dbAdmin.createUser({
  user: 'root',
  pwd: 'root',
  roles: [{ role: 'readWrite', db: 'bovdb' }],
});
dbAdmin.getUsers()
