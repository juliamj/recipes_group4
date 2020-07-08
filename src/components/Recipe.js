import React from 'react';
import marked from 'marked';
//will take markdown as an input and it will output an html string that can be used in jsx


const Recipe = ({ article }) => {
    console.log({ article })
    const { recipename, recipeImage, ingredients, howToNotPrepare } = article.fields
    const postDescription1 = marked(howToNotPrepare)
    return (
        <div className='container m-4 p-4 recipe shadow-sm p-3 mb-5 rounded'>
            <h2 className='pb-4 text-capitalize'>{recipename}</h2>
            <hr />
            {recipeImage && <img className='shadow-sm p-3 rounded w-75' src={recipeImage.fields.file.url} alt={recipename} title={recipename} />}

            <div className="row m-3">  
              {/* d-flex  w-75 p-3 m-3 bg-info p-3 flex-row justify-content-end*/}

                <div className="col-lg-2 mr-1 shadow-sm p-3 rounded description">
                    <h5 className="pt-3 pb-2 text-left">Ingredients</h5>
                    <ul className="list-unstyled">
                        {ingredients.map((ingredient) =>
                            <li className="text-left">{ingredient}</li>
                        )}
                    </ul>
                </div>

                <div className="col-lg-9 ml-1 shadow-sm p-3 rounded description">
                    <h5 className="text-capitalize pt-3 pb-2">How to not prepare</h5>
                    <section dangerouslySetInnerHTML={{ __html: postDescription1 }} />
                </div>

            </div>
        </div>
    )
}

export default Recipe
