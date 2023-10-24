import { checkStone } from "./checkStone";

export const putStone = (y: number, x: number, player: number, board: number[][]) => {
    if (board[y][x] !== null) {
        console.log("すでに石が置かれています");
        return board;
    }

    const willBeReturned = checkStone(x, y, player, board);

    if (willBeReturned.length === 0) {
        console.log("置けません");
        return board;
    }

    for (let i = 0, l = willBeReturned.length; i < l; i++) {
        board[willBeReturned[i][0]][willBeReturned[i][1]] = player;
    }
    return board;
};
