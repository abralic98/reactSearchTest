import React from "react";

const Recipe = ({title,calories,image,key,ingredients}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <p>calories: {calories}</p>
            <img src={image} alt="" />
            <p>{ingredients.map(ingredient=>(
                <li>{ingredient.text}</li>
            ))}</p>
        </div>
    );
}

export default Recipe;