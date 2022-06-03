import React, { FC } from "react";
import { Cell } from "../models/Cell";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";

interface CellProps {
  currentPlayer: Player | null;
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({
  cell,
  selected,
  click,
  currentPlayer,
}) => {
  const currentCheck = (): string => {
    if (cell.figure && currentPlayer?.color === cell?.figure.color)
      return `current`;
    else if (cell.figure) return "next";
    else return "";
  };

  return (
    <div
      className={[
        "cell",
        currentCheck(),
        cell.available && !cell.figure ? "available" : "",
        cell.color,
        selected ? "selected" : "",
      ].join(" ")}
      onClick={() => click(cell)}
      style={{ background: cell.available && cell.figure ? "red" : "" }}
    >
      {cell.available && !cell.figure && <div className={"available"} />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div>
  );
};

export default CellComponent;
