import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer() {

    const iceCreamCount = useSelector(state => state.iceCream.numOfIceCreams);

    const dispatch = useDispatch();

    return (
        <div>
            <h2> Num of Ice creams - {iceCreamCount}</h2>
            <button type="button" onClick={() => dispatch(buyIceCream())} >Buy Ice Cream</button>
        </div>
    );
}

export default IceCreamContainer