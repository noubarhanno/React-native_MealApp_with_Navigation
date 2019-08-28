import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CategoriesScreen from "../screens/CategeriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from '../screens/FiltersScreen';
import { Platform, Text } from "react-native";
import Colors from "../constants/colors";

const defaultStackNavOptions = {
  headerTitle: "A Screen",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white"
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {}
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primaryColor : "white"
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor
      }
    },
    MealDetail: {
      screen: MealDetailScreen
    }
  },
  {
    initialRouteName: "Categories",
    mode: "modal",
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS==='android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondaryColor,
      tabBarLabel: Platform.OS==='android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites'
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {fontFamily: 'open-sans-bold'},
          activeTintColor: Colors.secondaryColor
        }
      });

  const FilterNavigator = createStackNavigator({
    Filters: FilterScreen
  },{
    // navigationOptions: {
    //   drawerLabel: 'Filters'
    // }
    defaultNavigationOptions: defaultStackNavOptions
  })

const MainNavigator = createDrawerNavigator({
  MealsFavs: {screen: MealsFavTabNavigator, navigationOptions: {
    drawerLabel: 'Meals'
  }},
  Filters: FilterNavigator
},{
  contentOptions: {
    activeTintColor: Colors.secondaryColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
});

export default createAppContainer(MainNavigator);

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
