import React from "react";
import style from './Column.module.css';
import Card from './Card';
import { FiPlusSquare } from 'react-icons/fi';

export default ({
  title = 'Title'
}) => {
  return (
    <div className={style.column}>
      <span class={style.title}>{title}
        <FiPlusSquare className={style.addIcon} alt={'das'} />
      </span>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
