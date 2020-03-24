import React from "react";
import style from './board.module.css';
import Column from './Column';

export default () => {
  return (
    <div className={style.container}>
      <Column />
      <Column />
      <Column />
    </div>
  )
}
