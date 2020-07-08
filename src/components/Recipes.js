import React from 'react';
import Recipe from './Recipe';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//contains all the Posts, which it will receive from contentful

const Recipes = ({recipes}) => {
    console.log(recipes);

    if (recipes.length > 0) {
    return (
        <div>
          <OwlCarousel
            className="owl-theme"
            loop
            nav
            margin={5} >
            {recipes.map((article, index) =>
               <div className='item' key={index}>
                <Recipe article={article} />
                </div>
              )}
          </OwlCarousel>
        </div>
    )
  } else {
    return <p>Please wait...</p>
  }
}

export default Recipes
