import React, {useState} from 'react';
import Recipe from './Recipe';
import Carousel from 'react-bootstrap/Carousel';

//contains all the Posts, which it will receive from contentful

const Recipes = ({recipes}) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};
  console.log(recipes);

    if (recipes.length > 0) {
    return (
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
            {recipes.map((article, index) => {
              return (
                <Carousel.Item>
                <div key={index}>
                <Recipe article={article} />
                </div>
                </Carousel.Item>
              )})}
        </Carousel>
    )
  } else {
    return <p>Please wait...</p>
  }
}

export default Recipes
