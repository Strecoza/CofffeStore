import React from 'react';
import {CiCoffeeBean} from 'react-icons/ci';


function About(){
    return(
    <div className='about'>
        <img className='about-coffee' src='https://images.unsplash.com/photo-1619167801539-48f33b1f94b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=600' alt='about-coffee'/>
        <div className='about-story'>
            <h2 className='about-title'> The <CiCoffeeBean/>Co.Beans Story</h2>
        
            <p className='about-text'>It all began in 1818 when Cher-in tried his first cup of coffee in small town Frolovo and beloved this hot drink. He began his research around a world to find the best blend.<br/>In 1838 <CiCoffeeBean/>Co.Beans store in the heart of the Europe. He treated his customers with niceness and respect, always paying attention to their needs. He understood that if you care about people, you cannot fail. From its first day, Cher-in was about quality and care and connection.<br/>This is what makes <CiCoffeeBean/>Co.Beans feel so cozy and warm.<br/>We would love you to become a part of our kindness, generosity comunity.</p>
        </div>
    </div>)
}

export default About;