import React from 'react'
import Recipe from './Recipe'

//contains all the Posts contains all the posts, which it will receive from contentful

const Recipes = ({recipes}) => {
    return (
        <div>
            {recipes.map((article, index) => <Recipe article={article} key={index} />)}
        </div>
    )
}



export default Recipes


