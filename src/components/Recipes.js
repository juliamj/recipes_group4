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
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            {recipes.map((article, index) =>
               <div className='carousel-item active' key={index}>
                <Recipe article={article} />
                </div>
              )}
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
    )
  } else {
    return <p>Please wait...</p>
  }
}

export default Recipes
