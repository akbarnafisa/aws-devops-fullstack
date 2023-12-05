import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "my_db",
  password: "mysecretpassword",
  port: 5432,
});

export default pool;
