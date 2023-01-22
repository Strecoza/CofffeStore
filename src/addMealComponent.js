function AddMealComponent ({label, image, calories, ingredients}){
    return(

        <div className="mealCard">
            <div className ="mealContainer">
                <h4 className="mealLabel">{label}</h4>
            </div>
            <div className ="mealContainer">
                <img className ="mealImg" src={image} alt ="Meal"/>
            </div>
            <div className ="mealContainer">
                    <ul>
                        {ingredients.map(ingredient => (
                            <li>{ingredient} </li>
                        ))}
                    </ul>
                    
                    <div>
                        <p className="calories">{calories.toFixed()} calories</p>
                    </div>
            </div>
        </div>
    )
}

export default AddMealComponent;
