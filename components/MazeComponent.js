import React from "react";
import style from '../styles/Maze.module.css'

const MazeComponent = ({
  index,
  gridStyleTop,
  gridStyleBottom,
  gridStyleLeft,
  gridStyleRight,
  gridVis,
  color,
  changeEnd,
  changeStart,
}) => {
  //deep copy so that object.assign doesnt overwrite gridStyleTop
  const newTop = JSON.parse(JSON.stringify(gridStyleTop));
  let styles = Object.assign(
    newTop,
    gridStyleBottom,
    gridStyleLeft,
    gridStyleRight,
    gridVis,
    color
  );

  return (
    <div
      className={style.mazeComponent}
      style={styles}
      onClick={() => {changeStart(index)}}
    ></div>
  );
};

export default MazeComponent;
