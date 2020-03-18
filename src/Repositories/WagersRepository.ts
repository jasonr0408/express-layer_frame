import mysql from 'mysql';
import async from 'async'

// 資料層
class WagersRepository {
    // 建構子
    pool: mysql.Pool;

    // 建構子，注入controller
    constructor(pool: mysql.Pool) {
        this.pool = pool;
    }

    public selectWager(wagersID: number, callback: any) {
        this.pool.getConnection(function (err, connection) {
            if (err) throw err; // not connected!
            connection.query('SELECT * FROM `Wagers` WHERE `WagersID` = ?', wagersID, function (error, results, fields) {
                // When done with the connection, release it.
                connection.release();
                if (error) {
                    // Handle error after the release.
                    throw error;
                } else {
                    // success
                    return callback(results)
                }
            });
        });
    }
}

export default WagersRepository