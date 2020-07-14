import React from 'react';
import marked from 'marked';
//will take markdown as an input and it will output an html string that can be used in jsx


const Recipe = ({ article }) => {
    console.log({ article })
    const { recipename, recipeImage, ingredients, howToNotPrepare } = article.fields
    const postDescription1 = marked(howToNotPrepare)
    return (
        <div className='container mt-4 p-5 recipe shadow-sm border border-dark rounded-circle'>
            <h2 className='pb-2 pt-2 text-capitalize d-flex justify-content-center'>{recipename}</h2>
            {/* <hr /> */}
            <div className="d-flex justify-content-center">

            {recipeImage && <img className='shadow-sm p-3 bg-light border  rounded w-75' src={recipeImage.fields.file.url} alt={recipename} title={recipename} />}
            </div>

            <div className="row m-3 d-flex justify-content-center">  
                <div className="ingredients col-lg-3 mr-1 shadow-sm p-3 border  rounded">
                    <h5 className="pt-3 pb-2 text-left">Ingredients</h5>
                    <ul className="list-unstyled">
                        {ingredients.map((ingredient) =>
                            <li className="text-left pb-2 pl-3">{ingredient}</li>
                        )}
                    </ul>
                </div>

                <div className="col-lg-8 ml-1 shadow-sm p-3 border  rounded description">
                    <h5 className="text-capitalize pt-3 pb-2">How to not prepare</h5>
                    <section dangerouslySetInnerHTML={{ __html: postDescription1 }} />
                </div>

            </div>
        </div>
    )
}

export default Recipe
