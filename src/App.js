
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var tic_tac_toe_png_1 = __importDefault(require("./assets/images/tic-tac-toe.png"));
var profile_pic_png_1 = __importDefault(require("./assets/images/profile-pic.png"));
var icons8_database_96_png_1 = __importDefault(require("./assets/images/icons8-database-96.png"));
require("./App.css");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap-icons/font/bootstrap-icons.css");
var App = function () {
    console.log('Andito ako');
    return ((0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsxs)("div", { className: "row text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "col-sm-4", children: (0, jsx_runtime_1.jsx)("div", { className: "card mt-4", children: (0, jsx_runtime_1.jsxs)("center", { children: [(0, jsx_runtime_1.jsx)("img", { className: "card-img-top rounded-circle p-2 mt-1 mb-3 ml-1 mr-1", src: profile_pic_png_1.default, alt: "Profile Logo", style: { width: "150px", height: "150px" } }), (0, jsx_runtime_1.jsxs)("div", { className: "card-body", children: [(0, jsx_runtime_1.jsx)("h5", { className: "card-title", children: "Joseph Bryan Dela Cruz" }), (0, jsx_runtime_1.jsx)("p", { className: "card-text", children: "Software Developer" }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "btn btn-primary", to: "https://www.linkedin.com/in/josephbryandelacruz/", target: "_blank", rel: "noopener noreferrer", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi bi-linkedin p-1" }), "LinkedIn"] })] })] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "col-sm-4", children: (0, jsx_runtime_1.jsx)("div", { className: "card mt-4", children: (0, jsx_runtime_1.jsxs)("center", { children: [(0, jsx_runtime_1.jsx)("img", { className: "card-img-top p-2 mt-1 mb-3 ml-1 mr-1", src: tic_tac_toe_png_1.default, alt: "Tic Tac Toe Logo", style: { width: "150px", height: "150px" } }), (0, jsx_runtime_1.jsxs)("div", { className: "card-body", children: [(0, jsx_runtime_1.jsx)("h5", { className: "card-title", children: "Tic Tac Toe" }), (0, jsx_runtime_1.jsx)("p", { className: "card-text", children: "A Simple Tic Tac Toe Game" }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "btn btn-success", to: "/pages/TicTacToe", rel: "noopener noreferrer", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi bi-controller p-1" }), "Play Game"] })] })] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "col-sm-4", children: (0, jsx_runtime_1.jsx)("div", { className: "card mt-4", children: (0, jsx_runtime_1.jsxs)("center", { children: [(0, jsx_runtime_1.jsx)("img", { className: "card-img-top p-2 mt-1 mb-3 ml-1 mr-1", src: icons8_database_96_png_1.default, alt: "DB Logo", style: { width: "150px", height: "150px" } }), (0, jsx_runtime_1.jsxs)("div", { className: "card-body", children: [(0, jsx_runtime_1.jsx)("h5", { className: "card-title", children: "Database Modeling" }), (0, jsx_runtime_1.jsx)("p", { className: "card-text", children: "A Database Model Integration" }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "btn btn-secondary", to: "/pages/SQL", rel: "noopener noreferrer", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi bi-database p-1" }), "Database"] })] })] }) }) })] }) }));
};
exports.default = App;
