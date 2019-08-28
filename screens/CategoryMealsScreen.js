import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    return (
      <MealList listData={displayedMeals} navigation={props.navigation}/>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;













//====================================================//
    // we can use props.navigation.push('MealDetail') and 
    // it will do the same behavior of navigate but with 
    // one important difference is when you are on Categories
    // Screen and navigate to Categories screen actually 
    // nothing will happen but if you push actually the component
    // will reload and you will see like you navigate to 
    // different screen
//====================================================//

//====================================================//
// goBack and pop will do the same which will take you to
// the previous screen
//====================================================//

//====================================================//
// replace will remove the current screen from the stack
// and replace it with the one you navigate to 
// then you cannot back to it
//====================================================//


//=============================================//
// the component it self is javascript options
// where you can pass an options to it which can be 
// (means the options) a javascript object 
// or function if we need to access the props and 
// we are out of the object definition where
// the props is passed

// CategoryMealsScreen.navigationOptions = (navigationData) => {
//   const catId = navigationData.navigation.getParam('categoryId');

//   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

//   return {
//     headerTitle: selectedCategory.title,
//     headerStyle: {
//       backgroundColor:Platform.OS==='android' ?  Colors.primaryColor : 'white'
//     },
//     headerTintColor: Platform.OS==='android' ?  'white' : Colors.primaryColor
//   };
// };
//=============================================//