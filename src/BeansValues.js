import React, {useState} from 'react';

import {blendData} from './beansdata';
import './blend.css';

function BeansValues(){
    const [blends, setBlends] = useState(blendData);
    const [showMore, setShowMore] = useState (false);

    const removeBlend = (id) => { 
        let newBlends = blends.filter((blend)=> blend.id !==id); 
        setBlends (newBlends)
    }

    const showTextClick = (blend) => { 
        blend.showMore = !blend.showMore
        setShowMore(!showMore)
    }

    return(
        <div>
            <div className='blendContainer'>
                <h1 className='blendTitle'>BEST VALUES {blends.length} BEANS</h1>
            </div>

            {blends.map((blend =>{
                const {id, blendName, description, image, source, showMore} = blend;

                return(
                    <div key={id}>
                        <div className='blendContainer'>
                            <h2 className='blendName'>{blendName}</h2>
                        </div>
                        <div className='containerBlock'> 
                            <div className='leftBlock'>
                                <div className='blendImage'>
                                    <img  className='imageBlend' src = {image} alt='Blend'/>
                                </div>
                                <div className='blendSource'>
                                    <p>{source}</p>
                                </div>
                            </div>
                            <div className='rightBlock'>
                                <div className='blendDescription'>
                                    <p>{showMore ? description: description.substring(0,170)+'...'}
                                    <button className='showMore' onClick = {() => showTextClick(blend) }> {showMore ? 'Show less': 'Show more'}</button>
                                    </p>
                                </div>
                                <div className='Delete'>
                                    <button className='btnBlend' onClick = {() => removeBlend(id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default BeansValues;