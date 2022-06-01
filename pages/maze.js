import MazeGen from "../components/MazeGen";
import { useState } from 'react'
import Head from 'next/head'
import style from '../styles/Maze.module.css'

const Maze = () => {
  const [counter, setCounter] = useState(1)
  const [hasRun, setHasRun] = useState(false)

  const newMaze = () => {
    let count = counter
    setCounter(count + 1)
  }

  const hasRan = () => {
    setHasRun(!hasRun)
  }

  return (
    <div className={style.mazePage}>
      <Head>
        <title>Maze</title>
      </Head>
      <MazeGen newMaze={newMaze} counter={counter} hasRun={hasRun} hasRan={hasRan}/>
    </div>
  );
};

export default Maze;