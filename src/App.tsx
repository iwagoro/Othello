import React, { useState, useEffect } from "react";
import { useOthelloData } from "./provider/BoardProvider";
import { checkStone } from "./functions/checkStone";
import { putStone } from "./functions/putStone";
import { gridAmount } from "./provider/env";

function App() {
    let initialBoard = Array(gridAmount)
        .fill(null)
        .map(() => Array(6).fill(null));
    initialBoard[gridAmount / 2 - 1][gridAmount / 2] = 1;
    initialBoard[gridAmount / 2 - 1][gridAmount / 2 - 1] = 0;
    initialBoard[gridAmount / 2][gridAmount / 2] = 0;
    initialBoard[gridAmount / 2][gridAmount / 2 - 1] = 1;
    const [board, setBoard] = useState(initialBoard);
    const [grid, setGrid] = useState<number[][]>([]);
    const [player, setPlayer] = useState(1);

    const onClick = (index2: number, index: number, player: number, board: number[][], flag: any) => {
        if (flag.length === 0) return;
        const newBoard = putStone(index, index2, player, board);
        newBoard[index][index2] = player;
        setBoard(newBoard);
        setPlayer(player === 1 ? 0 : 1);
    };

    useEffect(() => {
        setGrid([]);
        const newGrid: any = [];
        board.forEach((item: number[], index: number) => {
            const row = item.map((item2: number, index2: number) => {
                let flag = checkStone(index2, index, player, board);

                return (
                    <div key={`${index}-${index2}`} style={{ width: "100%", height: "auto", aspectRatio: "1/1", backgroundColor: item2 === null ? "black" : item2 === 1 ? "red" : "blue", color: "white" }} onClick={() => onClick(index2, index, player, board, flag)}>
                        {flag.length !== 0 ? "○" : item2 === null ? "" : item2 === 1 ? "1" : "0"}
                    </div>
                );
            });
            newGrid.push(row);
        });
        setGrid(newGrid);
    }, [player]);

    return (
        <div className="App" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoRows: "1fr", gap: "5px" }}>
            {grid}
        </div>
    );
}

export default App;
