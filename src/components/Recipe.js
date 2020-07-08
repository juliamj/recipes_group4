import React from 'react'
import marked from 'marked'  //will take markdown as an input and it will output an html string that can be used in jsx


const Recipe = ({ article }) => {
    console.log(article)
    const { recipename, recipeImage, ingredients, howToNotPrepare } = article.fields
    const postDescription1 = marked(howToNotPrepare)
    return (
        <div className='recipe'>
            <h2 className='title'>{recipename}</h2>
            {recipeImage && <img className='recipeImage' src={recipeImage.fields.file.url} alt={recipename} title={recipename} />}
            <ul>
                {ingredients.map((ingredient) => 
                    <li>{ingredient}</li>
                )}
            </ul>
            <section dangerouslySetInnerHTML={{ __html: postDescription1 }} />
        </div>
    )
}


export default Recipe

