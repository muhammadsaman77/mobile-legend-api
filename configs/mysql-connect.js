import { createConnection } from "mysql";
import { config } from "dotenv";
config();
const connection = createConnection({
  host: "",
  database: "",
  user: "root",
  password: "",
});

export default connection;
