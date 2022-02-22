import MazeComponent from "./MazeComponent";
import React, { useState } from "react";
import _ from "lodash";
import style from "../styles/Maze.module.css";

/* Goals:
    make some DB to save your mazes/solutions and use API to do so
*/
const green = "#F4D78E";
const red = "#b53737";
const pink = "#57b97b";
const lightblue = "#636B70";
const white = "#FFFFFF";

// allocate grid
let gridItems = [
  {
    id: 0,
    gridStyleTop: {},
    gridStyleBottom: {},
    gridStyleRight: {},
    gridStyleLeft: {},
    gridVis: {},
    background: {},
  },
];

// create shuffled array of integers for maze generation
let arrOfInts = [];
for (let i = 0; i < 1800; i++) {
  arrOfInts[i] = i;
}
let n = 1800;
let j;
let temp;
for (let i = 0; i < 1799; i++) {
  j = Math.floor(Math.random() * (n - i)) + i;
  temp = arrOfInts[j];
  arrOfInts[j] = arrOfInts[i];
  arrOfInts[i] = temp;
}

const MazeGen = ({ newMaze, counter, hasRun, hasRan }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [button2Disabled, setButton2Disabled] = useState(false);
  const [button3Disabled, setButton3Disabled] = useState(true);
  const [solveVis, setSolveVis] = useState({ visibility: "hidden" });
  const [start, setStart] = useState("false");
  const [end, setEnd] = useState("false");
  let visitedList = new Map();
  let current;
  let randomOf4;
  let ender;

  // create the maze helper
  const huntAndKill = (currentCell) => {
    let randArr = [0, 1, 2, 3];
    visitedList.set(currentCell.id, currentCell.id);
    while (randArr.length !== 0) {
      randomOf4 = randArr[Math.floor(Math.random() * randArr.length)];
      if (
        //checking if maze can go up
        currentCell.id > 59 &&
        randomOf4 === 0 &&
        !visitedList.has(currentCell.id - 60)
      ) {
        //remove borders between two cells and update visit list and current cell
        gridItems[currentCell.id].gridStyleTop = { borderTop: 0 };
        gridItems[currentCell.id - 60].gridStyleBottom = { borderBottom: 0 };
        currentCell = gridItems[currentCell.id - 60];
        huntAndKill(currentCell);
      } else if (
        //checking if maze can go down
        currentCell.id < 1739 &&
        randomOf4 === 1 &&
        !visitedList.has(currentCell.id + 60)
      ) {
        //remove borders between two cells and update visit list and current cell
        gridItems[currentCell.id].gridStyleBottom = { borderBottom: 0 };
        gridItems[currentCell.id + 60].gridStyleTop = { borderTop: 0 };
        currentCell = gridItems[currentCell.id + 60];
        huntAndKill(currentCell);
      } else if (
        //checking if maze can go left
        currentCell.id % 60 !== 0 &&
        randomOf4 === 2 &&
        !visitedList.has(currentCell.id - 1)
      ) {
        //remove borders between two cells and update visit list and current cell
        gridItems[currentCell.id].gridStyleLeft = { borderLeft: 0 };
        gridItems[currentCell.id - 1].gridStyleRight = { borderRight: 0 };
        currentCell = gridItems[currentCell.id - 1];
        huntAndKill(currentCell);
      } else if (
        //checking if maze can go right
        (currentCell.id % 60 !== 59 || currentCell.id === 0) &&
        randomOf4 === 3 &&
        !visitedList.has(currentCell.id + 1)
      ) {
        //remove borders between two cells and update visit list and current cell
        gridItems[currentCell.id].gridStyleRight = { borderRight: 0 };
        gridItems[currentCell.id + 1].gridStyleLeft = { borderLeft: 0 };
        currentCell = gridItems[currentCell.id + 1];
        huntAndKill(currentCell);
      } else {
        //if chosen path isnt viable remove path option and try again
        randArr.splice(randomOf4, 1);
      }
      return;
    }
  };

  // create the maze
  if (!hasRun) {
    for (let i = 0; i < 1800; i++) {
      gridItems[i] = {
        id: i,
        gridStyleTop: { borderTop: "1px solid black" },
        gridStyleRight: { borderRight: "1px solid black" },
        gridStyleLeft: { borderLeft: "1px solid black" },
        gridStyleBottom: { borderBottom: "1px solid black" },
        gridVis: { visibility: "hidden" },
        background: { backgroundColor: white },
      };
    }

    //begin generation (hunt and kill algorithm)
    current = gridItems[Math.floor(Math.random() * 1800)];
    huntAndKill(current);

    // begin scanning for new currentcells
    while (visitedList.size < 1800) {
      for (let i = 0; i < 1800; i++) {
        let randArr = [0, 1, 2, 3];
        ender = 1;
        while (ender !== 0) {
          randomOf4 = randArr[Math.floor(Math.random() * randArr.length)];
          //find unvisited cell that has visited cell adjacent to the right
          if (
            !visitedList.has(i) &&
            randomOf4 === 0 &&
            visitedList.has(i + 1) &&
            (i % 60 !== 59 || i === 0)
          ) {
            gridItems[i].gridStyleRight = { borderRight: 0 };
            gridItems[i + 1].gridStyleLeft = { borderLeft: 0 };
            current = gridItems[i];
            huntAndKill(current);
          }
          //find unvisited cell that has visited cell adjacent to the left
          else if (
            !visitedList.has(i) &&
            randomOf4 === 1 &&
            visitedList.has(i - 1) &&
            i % 60 !== 0
          ) {
            gridItems[i - 1].gridStyleRight = { borderRight: 0 };
            gridItems[i].gridStyleLeft = { borderLeft: 0 };
            current = gridItems[i];
            huntAndKill(current);
          }
          //find unvisited cell that has visited cell adjacent to the top
          else if (
            !visitedList.has(i) &&
            randomOf4 === 2 &&
            visitedList.has(i - 60) &&
            i > 59
          ) {
            gridItems[i].gridStyleTop = { borderTop: 0 };
            gridItems[i - 60].gridStyleBottom = { borderBottom: 0 };
            current = gridItems[i];
            huntAndKill(current);
          }
          //find unvisited cell that has visited cell adjacent to the bottom
          else if (
            !visitedList.has(i) &&
            randomOf4 === 3 &&
            visitedList.has(i + 60) &&
            i < 1739
          ) {
            gridItems[i].gridStyleBottom = { borderBottom: 0 };
            gridItems[i + 60].gridStyleTop = { borderTop: 0 };
            current = gridItems[i];
            huntAndKill(current);
          } else {
            //if chosen path isnt viable remove path and try again
            randArr.splice(randomOf4, 1);
          }
          ender = 0;
        }
      }
    }
    hasRan();
  }

  // solve the maze
  const [display, setDisplay] = useState(gridItems);
  const depthSearch = (index, endPoint) => {
    // if you can go up -> go up and try again
    // if you can go (...) -> go (...) and try again
    // if cant go anywhere -> return until you can
    // if you are at the end -> return that youre at the end until you hit the first call
    // color everything you encounter lightblue
    // upon finding the end color cells pink on the way back

    //are you at the end?
    if (index === endPoint) {
      return true;
    } // can you go right?

    // set some var based on whether the endpoint > startpoint + 60x ,
    // end of startpoint row < endpoint < startpoint + 60x, endpoint = startpoint + 60x,
    // enpoint < startpoint - 60x, startpoint - 60x < endpoint < end or endpoint row

    if (
      _.isEqual(gridItems[index].gridStyleRight, { borderRight: 0 }) &&
      _.isEqual(
        gridItems[index + 1].background,
        { backgroundColor: white } ||
          (_.isEqual(gridItems[index].gridStyleRight, { borderRight: 0 }) &&
            _.isEqual(gridItems[index + 1].background, {
              backgroundColor: red,
            }))
      )
    ) {
      // set background and go right
      gridItems[index].background = { backgroundColor: lightblue };
      if (depthSearch(index + 1, endPoint) === true) {
        gridItems[index].background = { backgroundColor: pink };
        return true;
      }
    } // can you go down?
    if (
      (_.isEqual(gridItems[index].gridStyleBottom, { borderBottom: 0 }) &&
        _.isEqual(gridItems[index + 60].background, {
          backgroundColor: white,
        })) ||
      (_.isEqual(gridItems[index].gridStyleBottom, { borderBottom: 0 }) &&
        _.isEqual(gridItems[index + 60].background, { backgroundColor: red }))
    ) {
      // set background and go down
      gridItems[index].background = { backgroundColor: lightblue };
      if (depthSearch(index + 60, endPoint) === true) {
        gridItems[index].background = { backgroundColor: pink };
        return true;
      }
    } // can you go up
    if (
      (_.isEqual(gridItems[index].gridStyleTop, { borderTop: 0 }) &&
        _.isEqual(gridItems[index - 60].background, {
          backgroundColor: white,
        })) ||
      (_.isEqual(gridItems[index].gridStyleTop, { borderTop: 0 }) &&
        _.isEqual(gridItems[index - 60].background, { backgroundColor: red }))
    ) {
      // set background and go up
      gridItems[index].background = { backgroundColor: lightblue };
      if (depthSearch(index - 60, endPoint) === true) {
        gridItems[index].background = { backgroundColor: pink };
        return true;
      }
    }
    // can you go left?
    if (
      (_.isEqual(gridItems[index].gridStyleLeft, { borderLeft: 0 }) &&
        _.isEqual(gridItems[index - 1].background, {
          backgroundColor: white,
        })) ||
      (_.isEqual(gridItems[index].gridStyleLeft, { borderLeft: 0 }) &&
        _.isEqual(gridItems[index - 1].background, { backgroundColor: red }))
    ) {
      // set background and go left
      gridItems[index].background = { backgroundColor: lightblue };
      if (depthSearch(index - 1, endPoint) === true) {
        gridItems[index].background = { backgroundColor: pink };
        return true;
      }
    }
    gridItems[index].background = { backgroundColor: lightblue };
    return false;
  };

  //animate maze draw-in
  const changeVis = () => {
    setButtonDisabled(true);
    setButton2Disabled(true);
    setButton3Disabled(true);
    let index = 0;
    console.log("click");
    const interval = setInterval(() => {
      gridItems = gridItems.map((i) =>
        // i.id === index ||
        // i.id === index + 900 ||
        // i.id === index + 450 ||
        // i.id === index + 1350 ||
        // i.id === index + 225 ||
        // i.id === index + 1125 ||
        // i.id === index + 675 ||
        // i.id === index + 1575
        //   ?
        i.id === arrOfInts[index] ||
        i.id === arrOfInts[index + 1] ||
        i.id === arrOfInts[index + 2] ||
        i.id === arrOfInts[index + 3] ||
        i.id === arrOfInts[index + 4] ||
        i.id === arrOfInts[index + 5] ||
        i.id === arrOfInts[index + 6] ||
        i.id === arrOfInts[index + 7] ||
        i.id === arrOfInts[index + 8] ||
        i.id === arrOfInts[index + 9] ||
        i.id === arrOfInts[index + 10] ||
        i.id === arrOfInts[index + 11] ||
        i.id === arrOfInts[index + 12] ||
        i.id === arrOfInts[index + 13] ||
        i.id === arrOfInts[index + 14] ||
        i.id === arrOfInts[index + 15]
          ? {
              ...i,
              gridVis: { visibility: "visible" },
            }
          : i
      );
      setDisplay(gridItems);
      index += 16;
      if (index >= 1800) {
        clearInterval(interval);
        setSolveVis({ visibility: "visible" });
        setButton2Disabled(false);
        setButton3Disabled(false);
      }
    }, 1);
    return () => {
      clearInterval(interval);
    };
  };

  // solve the maze and then display the solution
  const displaySolve = (begin, stop) => {
    setButton3Disabled(true);
    for (let i = 0; i < 1800; i++) {
      gridItems[i].background = { backgroundColor: white };
    }
    if (stop === "false") {
      stop = 1799;
      setEnd(1799);
    }
    if (begin === "false") {
      begin = 0;
      setStart(0);
    }
    depthSearch(begin, stop);
    gridItems[begin].background = { backgroundColor: green };
    gridItems[stop].background = { backgroundColor: red };
    let temp = gridItems.slice();
    setDisplay(temp);
  };

  // create new maze
  const updateMaze = () => {
    newMaze();
    hasRan();
    setButton3Disabled(true);
    setSolveVis({ visibility: "hidden" });
    setButtonDisabled(false);
    setStart("false");
    setEnd("false");
    let temp = gridItems.splice();
    setDisplay(temp);
    changeVis();
  };

  // update start and endpoints
  const changeStart = (key) => {
    if (start !== "false" && start === end) {
      gridItems[key].background = { backgroundColor: white };
      let temp = gridItems.slice();
      setDisplay(temp);
      setStart("false");
      setEnd("false");
    }
    if (start !== "false" && end !== "false") {
      if (_.isEqual(gridItems[key].background, { backgroundColor: green })) {
        gridItems[key].background = { backgroundColor: white };
        let temp = gridItems.slice();
        setDisplay(temp);
        setStart("false");
      }
      if (_.isEqual(gridItems[key].background, { backgroundColor: red })) {
        gridItems[key].background = { backgroundColor: white };
        let temp = gridItems.slice();
        setDisplay(temp);
        setEnd("false");
      }
      setButton3Disabled(false);
      return;
    }
    if (start !== "false" && end === "false") {
      if (_.isEqual(gridItems[key].background, { backgroundColor: green })) {
        gridItems[key].background = { backgroundColor: white };
        let temp = gridItems.slice();
        setDisplay(temp);
        setStart("false");
      } else {
        gridItems[key].background = { backgroundColor: red };
        let temp = gridItems.slice();
        setDisplay(temp);
        setEnd(key);
      }
    }
    if (end !== "false" && start === "false") {
      if (_.isEqual(gridItems[key].background, { backgroundColor: red })) {
        gridItems[key].background = { backgroundColor: white };
        let temp = gridItems.slice();
        setDisplay(temp);
        setEnd("false");
        setButton3Disabled(false);
        return;
      } else {
        gridItems[key].background = { backgroundColor: green };
        let temp = gridItems.slice();
        setDisplay(temp);
        setStart(key);
      }
    }
    if (start === "false") {
      gridItems[key].background = { backgroundColor: green };
      let temp = gridItems.slice();
      setDisplay(temp);
      setStart(key);
    }
    setButton3Disabled(false);
  };

  return (
    <div>
      <div className={style.maze}>
        {display.map((d) => (
          <MazeComponent
            key={d.id}
            index={d.id}
            gridStyleTop={d.gridStyleTop}
            gridStyleBottom={d.gridStyleBottom}
            gridStyleLeft={d.gridStyleLeft}
            gridStyleRight={d.gridStyleRight}
            gridVis={d.gridVis}
            color={d.background}
            changeStart={changeStart}
          />
        ))}
      </div>
      {/* <button
        className={style.mazeButton}
        onClick={() => changeVis()}
        disabled={buttonDisabled}
      >
        Generate Maze
      </button> */}
      <br />
      <div className={style.btnContainer}>
        <button
          className={style.mazeButton}
          // id={style.newBtn}
          onClick={() => updateMaze()}
          disabled={button2Disabled}
        >
          Generate Maze
        </button>
        {/* <br /> */}
        <button
          className={style.solveButton}
          // style={solveVis}
          onClick={() => displaySolve(start, end)}
          disabled={button3Disabled}
        >
          Solve Maze
        </button>
      </div>
      <div className={style.textContainer}>
        <div className={style.mazeLegend}>
          <li className={style.legendText}>
            <div
              className={style.tutorialColor}
              style={{ backgroundColor: green, border: "1px solid black" }}
            ></div>
            Startpoint
          </li>
          <li className={style.legendText}>
            <div
              className={style.tutorialColor}
              style={{ backgroundColor: red, border: "1px solid black" }}
            ></div>
            Endpoint
          </li>
          <li className={style.legendText}>
            <div
              className={style.tutorialColor}
              style={{ backgroundColor: lightblue, border: "1px solid black" }}
            ></div>
            Searched area
          </li>
          <li className={style.legendText}>
            <div
              className={style.tutorialColor}
              style={{ backgroundColor: pink, border: "1px solid black" }}
            ></div>
            Solution path
          </li>
        </div>
        <div className={style.mazeTutorial}>
          This app creates{" "}
          <i>
            <a
              className="link"
              href="https://www.baeldung.com/cs/maze-generation#:~:text=A%20maze%20where%20every%20point,is%20called%20a%20perfect%20maze."
              target="_blank"
              rel="noopener noreferrer"
            >
              perfect mazes
            </a>
          </i>
          . The maze generation is based off of the pseudo-code for the{" "}
          <i>
            <a
              className="link"
              href="https://people.cs.ksu.edu/~ashley78/wiki.ashleycoleman.me/index.php/Hunt_and_Kill_Algorithm.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hunt and Kill
            </a>
          </i>{" "}
          algorithm. To solve the maze, click the red <i>Solve Maze button</i>.
          By default the startpoint{" "}
          <div
            className={style.tutorialColor}
            style={{ backgroundColor: green, border: "1px solid black" }}
          ></div>{" "}
          is the top left corner of the maze, and the endpoint{" "}
          <div
            className={style.tutorialColor}
            style={{ backgroundColor: red, border: "1px solid black" }}
          ></div>{" "}
          is the bottom right corner of the maze. You can change the start and
          end points by clicking the start and end points in the maze and
          placing them somewhere else. You can then show the new solution by
          clicking the <i>Solve Maze</i> button again. In the displayed
          solution, the{" "}
          <div
            className={style.tutorialColor}
            style={{ backgroundColor: lightblue, border: "1px solid black" }}
          ></div>{" "}
          cells represent areas that the pathfinding algorithm searched that
          were not part of the solution. the{" "}
          <div
            className={style.tutorialColor}
            style={{ backgroundColor: pink, border: "1px solid black" }}
          ></div>{" "}
          cells represent the solution path. When you want a new maze click{" "}
          <i>Generate Maze</i>.
        </div>
      </div>
    </div>
  );
};

export default MazeGen;
