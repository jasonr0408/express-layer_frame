import WagersRepository from "../Repositories/WagersRepository";
// 商業邏輯，要寫測試
class WagersService {
    wagersRepository: WagersRepository;

    // 建構子，注入controller
    constructor(wagersRepository: WagersRepository) {
        this.wagersRepository = wagersRepository;
    }

    public getWagersSub(wagersID: number, callback: any) {
        // call repository
        this.wagersRepository.selectWager(wagersID, (result: Object) => {
            return callback(result);
        });
    }
}

export default WagersService