var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap-icons/font/bootstrap-icons.css");
require("../styles/tictactoe.css");
var O_png_1 = __importDefault(require("../assets/images/O.png"));
var X_png_1 = __importDefault(require("../assets/images/X.png"));
var initialBoard = Array(9).fill('');
var TicTacToe = function () {
    var _a = (0, react_1.useState)(initialBoard), board = _a[0], setBoard = _a[1];
    var _b = (0, react_1.useState)(true), xIsNext = _b[0], setXIsNext = _b[1];
    var _c = (0, react_1.useState)(''), winner = _c[0], setWinner = _c[1];
    var calculateWinner = function (board) {
        var lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (var i = 0; i < lines.length; i++) {
            var _a = lines[i], a = _a[0], b = _a[1], c = _a[2];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return '';
    };
    var handleClick = function (index) {
        if (board[index] || winner)
            return;
        var newBoard = __spreadArray([], board, true);
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
        var newWinner = calculateWinner(newBoard);
        if (newWinner) {
            setWinner(newWinner);
        }
    };
    var renderSquare = function (index) {
        var imageUrl = '';
        var altText = '';
        if (board[index] === 'X') {
            imageUrl = X_png_1.default;
            altText = 'X';
        }
        else if (board[index] === 'O') {
            imageUrl = O_png_1.default;
            altText = 'O';
        }
        if (index % 2 === 0) {
            return ((0, jsx_runtime_1.jsx)("button", { className: "col-sm square btn btn-secondary text-center", onClick: function () { return handleClick(index); }, children: imageUrl && (0, jsx_runtime_1.jsx)("h2", { className: 'luckiest-guy-regular', children: altText }) }));
        }
        else {
            return ((0, jsx_runtime_1.jsx)("button", { className: "col-sm square btn btn-dark text-center", onClick: function () { return handleClick(index); }, children: imageUrl && (0, jsx_runtime_1.jsx)("h2", { className: 'luckiest-guy-regular', children: altText }) }));
        }
    };
    var resetGame = function () {
        setBoard(initialBoard);
        setWinner('');
        setXIsNext(true);
    };
    var status = winner ? "Winner: ".concat(winner) : "Next Player: ".concat(xIsNext ? 'X' : 'O');
    // Render the board
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container text-center", children: [(0, jsx_runtime_1.jsxs)("div", { className: "row", children: [(0, jsx_runtime_1.jsx)("h1", { className: "honk-tic-tac-toe-title", children: "Tic Tac Toe" }), (0, jsx_runtime_1.jsx)("div", { className: "status", children: status })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid-container col-sm-12", id: "tic-tac-toe-grid", children: [(0, jsx_runtime_1.jsxs)("div", { className: "board-row row", children: [renderSquare(0), renderSquare(1), renderSquare(2)] }), (0, jsx_runtime_1.jsxs)("div", { className: "board-row row", children: [renderSquare(3), renderSquare(4), renderSquare(5)] }), (0, jsx_runtime_1.jsxs)("div", { className: "board-row row", children: [renderSquare(6), renderSquare(7), renderSquare(8)] })] }), (0, jsx_runtime_1.jsx)("div", { className: "row", children: (0, jsx_runtime_1.jsx)("div", { className: "col-sm-3 m-auto pt-2", children: (0, jsx_runtime_1.jsxs)("button", { className: "btn btn-primary", onClick: resetGame, children: [(0, jsx_runtime_1.jsx)("span", { className: "bi bi-controller p-1" }), "Reset Game"] }) }) })] }));
};
exports.default = TicTacToe;
