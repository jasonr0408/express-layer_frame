import express from 'express';
import WagersController from '../Controllers/WagersController';

class WagersRoute {
    router: express.Router;
    controller: WagersController;

    // 建構子，注入controller
    constructor(controller: WagersController) {
        this.router = express.Router();
        this.controller = controller;
    }

    /**
     * setupRouter
     */
    public setRouter(): express.Router {
        // 在每一個請求被處理之前都會執行的 middleware
        this.router.use(function (req, res, next) {
            // 輸出記錄訊息至終端機
            console.log(req.method, req.url);
            // 繼續路由處理
            next();
        });

        // 第一個route，取細單
        this.router.get('/wagerSub', (req, res) => {
            // call controller
            this.controller.get(req, res)
        }
        );
        // 第二個route
        // 第三個route
        // 第四個route
        // 以次類推...

        return this.router;
    }
}

export default WagersRoute