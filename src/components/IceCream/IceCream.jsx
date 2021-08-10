import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './scoop/Scoop';
const IceCream = ({ scoops }) => {
    return (
        <div>
            <div className={classes.icecream}>
              <p className={classes.cone}></p>
              {/* <p>Please start adding scoops</p> */}
              {/* Scoop icecream */}
              {scoops.map((scoop) => (
                <Scoop key={`${scoop}${Math.random()}`} scoop={scoop}/>
              ))}
                
              
              <div className={classes.cherry}></div>
            </div>
          </div>
    )
}

export default IceCream
