import React from 'react';
import {useEffect, useState} from 'react';
import { FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import {reviewData} from './reviewdata';

import './App.css';


function Review(){
    const [people, setPeople] = useState(reviewData);
    const [currentIndex, setcurrentIndex] = useState(0);

/*
useEffect(() => {
    const lastIndex= people.length-1;
    if (currentIndex<0){
        setcurrentIndex(lastIndex)
    }
    if (currentIndex>lastIndex){
        setcurrentIndex(0)
    }
}, [currentIndex])
 */ 

 const previousReview = () => {
    setcurrentIndex((currentIndex =>{
        currentIndex--;
        if(currentIndex<0){
            return reviewData.length-1;
        }
        return currentIndex;
    }))
 }
 const nextReview = () => {
    setcurrentIndex((currentIndex =>{
        currentIndex++;
        if(currentIndex > reviewData.length-1 ){
            currentIndex = 0;
        }
        return currentIndex;
    }))
 }

 useEffect(() => {
    let slider = setInterval(() => setcurrentIndex(nextReview => nextReview + 1), 4000);
    return () => {
        clearInterval (slider);   
    }
 }, [reviewData.length-1]);
 
return (
    <section className='section'>
        <div >
            <h2 className='title review'> Reviews</h2>
        </div>
        <div className = "section-center">
            {people.map((person, personIndex) =>{
                const {id,  image, personName, reviewText} = person;

                let position = 'nextSlide';
                if (personIndex === currentIndex){
                    position = 'activeSlide';
                }
                if (personIndex === currentIndex - 1||(currentIndex === 0 && personIndex === people.length - 1)) {
                    position = 'lastSlide';
                }

                return(
                    <article className = {position} key = {id}>
                        <img className = 'person-img' src= {image} alt = 'person' width = '250px' height = '350px'/>
                        <h3 className = 'name'>{personName}</h3>
                        <p className='text'>{reviewText}</p>
                    </article>
                )
            })}

            <button className ='prev' onClick = {previousReview}>
                <FiChevronLeft/>
            </button>
            <button className ='next' onClick = {nextReview}>
                <FiChevronRight/>
            </button>
        </div>
    </section>
)
}

export default Review;