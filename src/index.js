"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./routes/router"));
const mysql_1 = __importDefault(require("./mysql/mysql"));
const server = server_1.default.init(8080);
server.app.use("/api", router_1.default);
const mysql = new mysql_1.default();
server.start(() => {
    console.log("servidor corriendo en puerto 3000");
});
