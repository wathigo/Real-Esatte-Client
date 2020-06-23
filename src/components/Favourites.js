import React from 'react';
import Carousel from './Carousel';

const Favourites = (props) => {
    const { favourites, addToFavourites } = props;
    console.log(favourites)
    if(favourites.length > 0) {
        return (
            <div className='land-properties-container' id='land-prop'>
                <div className='land-cont'>
                    <h3>FAVOURITE PROPERTIES</h3>
                    <Carousel properties={favourites} addToFavourites={addToFavourites} />
                </div>
            </div>
        )
    } else {
        return '';
    }
}

export default Favourites;