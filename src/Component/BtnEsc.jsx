import React  from 'react';
import style from './Canvas.module.css';
export let BtnEsc =(props)=>{
    return(
        <button className={style.btnReset}  onClick={() => {props.resetPointArr() }}>Закончить</button>
    )
}