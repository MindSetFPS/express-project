import { ConnectionOptions } from "mysql2/promise";

// If backend connection fails
// https://www.notion.so/Proyecto-Integrador-bf781a0e8800499499a1ff6e52a49b9f?pvs=4#12f072f408468011a100ceaad972ad6a

const connection : ConnectionOptions = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: parseInt(process.env.PORT || '3306'),
    database: process.env.MYSQL_DATABASE,
    rowsAsArray: true,
}

export default connection;