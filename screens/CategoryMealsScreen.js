import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
    return (
      <View style={styles.screen}>
        <Text>The Category Meal Screen</Text>
        <Button title="Go To Meal Detail!" onPress={() => props.navigation.replace('MealDetail')} />
        <Button title="Back" onPress={() => {
          props.navigation.pop();
        }} />
      </View>
    );

    
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

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