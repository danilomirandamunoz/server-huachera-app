import mysql = require('mysql');

export default class MySQL{

    //patron singleton
    private static _instance: MySQL;

    cnn: mysql.Connection;
    conectado:boolean=false;

    constructor()
    {
        console.log("clase inicializada");
        this.cnn = mysql.createConnection({
            host     : 'localhost',
            user     : 'user-app-hua',
            password : 'user-app-hua',
            database : 'huachera-app'
        });

        this.conectarDB();
    }


    public static get instance()
    {
        return this._instance || (this._instance = new this());
    }

    public static ejecutarQuery (query:string, callback:Function)
    {
        this.instance.cnn.query(query,(err, results: Object[], fields )=>{
            if(err)
            {
                console.log("error Query");
                console.log(err);
                return callback(err);
            }
            if(results.length === 0)
            {
                callback("registro solicitado no existe");
            }else{
                callback(null, results);
            }
            
        });
    }

    private conectarDB()
    {
        this.cnn.connect((err:mysql.MysqlError)=>{
            if(err)
            {
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log("BD online");
        });
    }

}
