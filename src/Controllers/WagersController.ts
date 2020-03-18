import { Request, Response } from "express";
import WagersService from "../Services/WagersService";

class WagersController {
    wagersService: WagersService;

    // 建構子，注入controller
    constructor(wagersService: WagersService) {
        this.wagersService = wagersService;
    }

    public get(req: Request, res: Response) {
        console.log(req.method + ' API: get wagers sub');
        // call service
        this.wagersService.getWagersSub(32400, (result: Object) => {
            console.log(result);
            return res.json(result)
        });
    }
}

export default WagersController