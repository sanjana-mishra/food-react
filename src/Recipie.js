import React from 'react';
import style from './recipie.module.css';


const Recipie = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipie}>
            <h1>{title}</h1>
            <ul className={style.list}>
                {ingredients.map(ingredient => (
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ul>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipie;