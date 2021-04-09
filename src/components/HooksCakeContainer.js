import React from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyCake } from '../redux';

export const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()


    return (
        <div>
            <h2>Num of Cakes:- {numOfCakes} </h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}

