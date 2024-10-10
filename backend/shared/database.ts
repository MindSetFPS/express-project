import mysql, { ConnectionOptions } from 'mysql2';

const access: ConnectionOptions = {
  user: 'root',
  database: 'app',
  password: 'password',
};

const mySQLRepository = mysql.createConnection(access);

export default mySQLRepository;