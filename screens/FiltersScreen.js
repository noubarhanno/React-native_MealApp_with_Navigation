import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        trackColor={{ true: Colors.primaryColor }}
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
}


const FiltersScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = () => {
      const appliedFilters = {
        glutenFree: isGlutenFree,
        lactoseFree: isLactoseFree,
        vegan: isVegan,
        isVegetarian: isVegetarian
      };

      console.log(appliedFilters);
    }

    useEffect(() => {
      props.navigation.setParams({save: saveFilters});
    });

    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
        <FilterSwitch
          label="Glueten-free"
          value={isGlutenFree}
          onChange={newValue => setIsGlutenFree(newValue)}
        />
        <FilterSwitch
          label="Lactose-free"
          value={isLactoseFree}
          onChange={newValue => setIsLactoseFree(newValue)}
        />
        <FilterSwitch
          label="vegan"
          value={isVegan}
          onChange={newValue => setIsVegan(newValue)}
        />
        <FilterSwitch
          label="Vegetarian"
          value={isVegetarian}
          onChange={newValue => setIsVegetarian(newValue)}
        />
      </View>
    );
    
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filters',
  headerLeft: (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="Menu" iconName='ios-menu' onPress={() => {
      navData.navigation.toggleDrawer();
    }}></Item>
  </HeaderButtons>
  ),
  headerRight: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="Save" iconName='ios-save' onPress={() => {
      navData.navagation.getParam('save')
    }}></Item>
  </HeaderButtons>
  ),
  }
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center'
    },
    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      margin: 20,
      textAlign: 'center'
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      marginVertical: 15
    }
});

export default FiltersScreen


{/* <Switch value={isGlutenFree} onValueChange={newValue => setIsGlutenFree(newValue)}/> thi is 
happen because the onValueChange gives an argument called newValue which will be the new value of the switch and because the 
newValue is changed but the value is not set so it will go back to the default value , but in our case
we changed the value based on the newValue using state*/}