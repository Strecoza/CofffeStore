import './App.css';
import {useEffect, useState} from 'react';
import video from './food.mp4';
import AddMealComponent from './addMealComponent';

function Catering(){
    const MY_ID="b9ac3af9";
    const MY_KEY="86a994c4157965b2c5eca465fb3e9ede";

    const[mySearch, setMySearch] = useState ('');
    const [myRecipes, setMyRecipes] = useState([]);
    const [wordSubmitted, setWordSubmitted]= useState('carrot');

  useEffect(() =>{
        const getRecipe= async () => {
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
            const data= await response.json();
            setMyRecipes(data.hits);}
        getRecipe()    
        },[wordSubmitted])

    const myRecipesSearch= (e) =>{
        setMySearch(e.target.value)
    }

    const finalSearch = (e) =>{
        e.preventDefault();
        setWordSubmitted(mySearch);
    }

    return(
        <div className="addMeal">
            <div className="addMealContainer">
                <div>
                    <video autoPlay muted loop>
                        <source src={video} type="video/mp4"/>
                    </video>
               
                    <h2 className='title searchTitle'>Add your favorite meal..</h2>
                </div>
           
                <div className="searchMeal">
                    <form onSubmit={finalSearch}>
                        <input className="search" placeholder="Search.." onChange={myRecipesSearch} value={mySearch}/>
                    </form>
                
                    <button className="btn-primary filter">Find
                    </button>
                </div>
            </div>
            <div className="addMealContainer">
                {myRecipes.map((element,index)=>(
                    <AddMealComponent key={index}
                        label={element.recipe.label}
                        image={element.recipe.image}
                        calories={element.recipe.calories}
                        ingredients={element.recipe.ingredientLines}/>

                ))}
            </div>
        </div>
    );
}

export default Catering;