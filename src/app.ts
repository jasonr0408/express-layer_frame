import express from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';
import WagersController from './Controllers/WagersController';
import WagersRoute from './Routes/WagersRoute';
import WagersService from "./Services/WagersService";
import WagersRepository from "./Repositories/WagersRepository";

// 環境變數啟動，因為是nodejs要用.env方式比較安全
dotenv.config();

// mysql 連線池
const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: 3388,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    connectTimeout: 3000,
    // timezone: "8"
});

const app: express.Application = express();
const wagersRepository: WagersRepository = new WagersRepository(pool);
const wagersService: WagersService = new WagersService(wagersRepository);
const wagersController: WagersController = new WagersController(wagersService);
const wagersRoute: WagersRoute = new WagersRoute(wagersController);

// 預設值
app.get('/', (req: any, res: any) => {
    console.log('Health Check Request');
    res.status(200).end();
});

// 載入route
app.use('/wager', wagersRoute.setRouter());
// 可以載入不同種類的routes
// 可以載入不同種類的routes
// 可以載入不同種類的routes

// 監聽埠
app.listen(3000, function () {
    console.log('success listen at port:3000');
});