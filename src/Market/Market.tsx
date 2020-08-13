import React from "react";
import Board from "../MarketConfigs/1830";
import Space from "./Space";

export default function Market() {
  return (
    <div className="grid grid-rows-11 grid-flow-col">
      {Board.map((row) => row.map((space) => <Space value={space} />))}
    </div>
  );
}
