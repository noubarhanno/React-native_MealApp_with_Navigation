import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground } from 'react-native';


const MealItem = props => {

    let TouchableComp = TouchableOpacity;

    if (Platform.OS==='android' && Platform.Version>=21){
        TouchableComp = TouchableNativeFeedback;
    }

     return (
       <View style={styles.mealItem}>
         <TouchableOpacity onPress={props.onSelectMeal}>
           <View>
             <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
               <ImageBackground
                 source={{ uri: props.image }}
                 style={styles.bgImage}
               >
                 <View style={styles.titleContainer}>
                   <Text numberOfLines={1} style={styles.title}>
                     {props.title}
                   </Text>
                 </View>
               </ImageBackground>
             </View>
             <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
               <Text>{props.duration}m</Text>
               <Text>{props.complexity}</Text>
               <Text>{props.affordability}</Text>
             </View>
           </View>
         </TouchableOpacity>
       </View>
     );
    
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    mealItem:{
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems:'center',
        height: '15%'
    },
    bgImage:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title:{
        fontFamily: 'open-sans-bold',
        color: 'white',
        fontSize: 22,
        textAlign: 'center'
    }
    
});

export default MealItem;