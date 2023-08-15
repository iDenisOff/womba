import { Sequelize, SequelizeOptions } from "sequelize-typescript";

import { dbUser, dbPassword, dbName } from "../env";
import Comment from "../models/Comment";
import Post from "../models/Post";
import Reaction from "../models/Reaction";
import Reply from "../models/Reply";
import Theme from "../models/Theme";
import User, { userBeforeCreate } from "../models/User";

const sequelizeOptions: SequelizeOptions = {
    database: dbName,
    dialect: "postgres",
    host: "localhost",
    logging: true,
    models: [User, Comment, Post, Reaction, Reply, Theme],
    password: dbPassword,
    username: dbUser
};

const connection = new Sequelize(sequelizeOptions);

userBeforeCreate();

export default connection;
