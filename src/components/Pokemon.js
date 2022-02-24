import { logDOM } from '@testing-library/react';
import React from 'react';
import style from './Pokemon.module.css'

const Pokemon = ({ id, name, image, type,exp}) => {

/*  console.log(sum); */

    return (
        <div className={style.pokicontainer}>

            <div className={style.name}>
                 <h4>{name}</h4>
            </div>

            <div className={style.imagewrapper}>
                <img src={image} alt={name} />
            </div>

            <div className={style.detail_wrapper}>
                
                <h5>Type: {type}</h5>
                <h5>EXP : {exp}</h5>
                
            </div>

        </div>);
};

export default Pokemon;

