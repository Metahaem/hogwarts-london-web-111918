import React from 'react';

const Hog = ({hog}) => {
    return(
        <div className="singleHog">
                <div className="hogImg">
                
                </div>
                <div className="hogName">
                    <p>{hog.name}</p>
                </div>
            </div>
    )
}



export default Hog;
