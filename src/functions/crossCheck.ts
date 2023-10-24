import { gridAmount } from "../provider/env";

export const crossCheck = (board: number[][], x: number, y: number, player: number, dx: number, dy: number) => {
    const change: number[][] = [];
    if (y + dy < 0 || y + dy >= gridAmount || x + dx < 0 || x + dx >= gridAmount) return change;
    const next = board[y + dy][x + dx];
    let _y = dy;
    let _x = dx;
    const total: number[][] = [];

    while (board[y + _y][x + _x] !== player) {
        if (board[y + _y][x + _x] === null) {
            // この位置で正しい石が見つからない場合は無効
            return [];
        }
        total.push([y + _y, x + _x]);
        _y += dy;
        _x += dx;

        if (y + _y < 0 || y + _y >= gridAmount || x + _x < 0 || x + _x >= gridAmount) {
            // ボードの範囲外に出た場合は無効
            return [];
        }
    }

    // 正しい石が見つかった場合、change 配列に total 配列を追加
    change.push(...total);
    return change;
};
