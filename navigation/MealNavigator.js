import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategeriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Platform } from 'react-native';
import Colors from '../constants/colors';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor:Platform.OS==='android' ?  Colors.primaryColor : 'white'
              },
              headerTintColor: Platform.OS==='android' ?  'white' : Colors.primaryColor
        }
    },
    MealDetail: {
        screen: MealDetailScreen
    }
},{
    // we can remove this key but if nothing added so the default will be the first route
    initialRouteName: 'Categories',
    mode: 'modal',
    defaultNavigationOptions: {
        headerTitle: 'A Screen',
        headerStyle: {
            backgroundColor:Platform.OS==='android' ?  Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS==='android' ?  'white' : Colors.primaryColor
    }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    // this is a tab navigator at the bottom and 
    // we setup the Meals tab to be MealsNavigator which 
    // we create on createStackNavigator which will lead us to 
    // the first screen on the stack so we can export this navigator as 
    // the stack navigator is nested
    Meals: MealsNavigator,
    Favorites: FavoritesScreen
});

export default createAppContainer(MealsFavTabNavigator);










//==========================================//
// this is how you create a navigator in 
// react native we use the same pattern
// in all apps
//==========================================//


//==========================================//
    //we can pass the component to a screen key and we can pass it directly
    // so behind the scene it will be set to screen key name , and we pass it 
    // to a screen key name because we have other configuration we can gve to 
    // the route
//=========================================//


//=========================================//
// react-native-screens to ensure that when you use 
// navigation it will use the native screens in each platform
// on IOS or android or windows so it will help 
// to optamize the performance
//=========================================//
