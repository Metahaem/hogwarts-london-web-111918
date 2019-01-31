import React from 'react';

import Hog from './Hog';

const HogBrowser = props => {
    return(
        <div className="hogContainer">
            {props.hogs.map((hog,index) => (
                <Hog key={index} hog={hog} />
            ))}
        </div>
    )
}


export default HogBrowser;
