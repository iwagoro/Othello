import React, { useState } from "react";
import { useOthelloData } from "../provider/BoardProvider";
import { crossCheck } from "./crossCheck";

export const checkStone = (x: number, y: number, player: number, board: number[][]) => {
    const directions = [
        [0, 1], // 右
        [0, -1], // 左
        [-1, 0], // 上
        [1, 0], // 下
        [-1, -1], // 左上
        [1, 1], // 左下
        [-1, 1], // 右上
        [1, -1], // 右下
    ];

    const change: number[][] = [];
    directions.map((item) => {
        const result = crossCheck(board, x, y, player, item[0], item[1]);
        change.push(...result);
    });
    return change;
};
