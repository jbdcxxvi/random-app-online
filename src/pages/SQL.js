"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap-icons/font/bootstrap-icons.css");
var SQL = function () {
    // const { Client } = require('pg');
    // let Connected = '';
    // const client = new Client({
    //     user: USER_NAME,
    //     host: API_BASE_URL,
    //     database: DATABASE,
    //     password: PASSWORD,
    //     port: PORT,
    // });
    // client.connect()
    // .then(() => {console.log('Connected to PostgreSQL database'); Connected = 'Connected';})
    // .catch((err: any) => {console.error('Connection error', err); Connected = 'Not Connected'})
    // .finally(() => client.end());
    return ((0, jsx_runtime_1.jsx)("div", { className: "container text-center" }));
};
exports.default = SQL;
