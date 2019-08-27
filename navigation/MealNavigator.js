import { createStackNavigator, createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategeriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    //==========================================//
    //we can pass the component to a screen key and we can pass it directly
    // so behind the scene it will be set to screen key name , and we pass it 
    // to a screen key name because we have other configuration we can gve to 
    // the route
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    //=========================================//
    MealDetail: {
        screen: MealDetailScreen
    }
});

export default createAppContainer(MealsNavigator);


//==========================================//
// this is how you create a navigator in 
// react native we use the same pattern
// in all apps
//==========================================//