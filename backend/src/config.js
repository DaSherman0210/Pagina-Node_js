import {config} from "dotenv";

config();

export default {
    host:process.env.host,
    database:process.env.DATABASE,
    user:process.env.USER,
    password:process.env.PASSWORD
}