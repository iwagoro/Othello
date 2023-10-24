import { checkStone } from "./checkStone";

export const checkPutPosition = (board: number[][], player: number) => {
    const putList: any = [];
    board.map((item, index) => {
        item.map((item2, index2) => {
            const checkPosition = checkStone(index2, index, player, board);

            if (checkPosition.length > 0) {
                return;
            }

            putList.push([index2, index]);
        });
    });
    return putList;
};
