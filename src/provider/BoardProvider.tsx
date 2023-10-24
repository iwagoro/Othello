import React, { useState, useEffect, createContext, useContext } from "react";
import { gridAmount } from "./env";

const othelloContext = createContext({} as any);

export const BoardProvider = ({ children }: { children: React.ReactNode }) => {
    let initialBoard = Array(gridAmount)
        .fill(null)
        .map(() => Array(6).fill(null));
    initialBoard[gridAmount / 2 - 1][gridAmount / 2] = 1;
    initialBoard[gridAmount / 2 - 1][gridAmount / 2 - 1] = 0;
    initialBoard[gridAmount / 2][gridAmount / 2] = 0;
    initialBoard[gridAmount / 2][gridAmount / 2 - 1] = 1;
    const [board, setBoard] = useState(initialBoard);

    const value = {
        board,
        setBoard,
    };

    return <othelloContext.Provider value={value}>{children}</othelloContext.Provider>;
};

export const useOthelloData = () => useContext(othelloContext);
