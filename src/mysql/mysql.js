"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log("clase inicializada");
        this.cnn = mysql.createConnection({
            host: 'mysql7001.site4now.net',
            user: 'a3b08e_hu',
            password: '16568057KKk',
            database: 'db_a3b08e_hu'
        });
        // this.cnn = mysql.createConnection({
        //     host     : 'localhost',
        //     user     : 'root',
        //     password : '',
        //     database : 'db_a3b08e_hu'
        // });
        // this.conectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this.instance.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.log("error Query");
                console.log(err);
                return callback(err);
            }
            if (results.length === 0) {
                callback("registro solicitado no existe");
            }
            else {
                callback(null, results);
            }
        });
    }
    conectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log("BD online");
        });
    }
}
exports.default = MySQL;
