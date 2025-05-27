import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({
    path: "../.env"
});


const sequelize = new Sequelize(process.env.DB_CONNECTION_URI, {
    define: { timestamps: false }
});
/*
const sequelize = new Sequelize("sigescam", "root", "", {
    host: "localhost",
    dialect: "mysql"
  });
  */
 export default sequelize;