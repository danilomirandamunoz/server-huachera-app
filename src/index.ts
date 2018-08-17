import Server from "./server/server";
import router from './routes/router';
import MySQL from './mysql/mysql';

const server = Server.init(8080);
server.app.use("/api",router);

const mysql = new MySQL();

server.start(()=>{
    console.log("servidor corriendo en puerto 3000");
})