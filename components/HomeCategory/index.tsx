import * as React from 'react';
import { StyleSheet,Image,Text, View,FlatList ,Pressable} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { useNavigation } from '@react-navigation/native';
import { RootTabScreenProps } from '../../types';
import styles from "./styles"
import categories from '../../assets/data/categories';
interface HomeCategoryProps {
    category:{
        id:string,
    title : string,
    movies :{
        id:string,
        poster :string,
    }[]
    }
    

}

const HomeCategory =(props:HomeCategoryProps) => {
    const {category} = props;
    const navigation = useNavigation();

    const onMoviePress = (movie) => {
        navigation.navigate('MovieDetailsScreen', { id: movie.id })
    }
  return (
    <>
        <Text style ={styles.title}>{category.title}</Text>
        
       <FlatList
       data =  {category.movies}
       renderItem ={({item}) => (
        <Pressable onPress={() => onMoviePress(item)}>
        <Image style={styles.image} source={{ uri: item.poster }} />
    </Pressable>
        
       )}
       horizontal
       showsHorizontalScrollIndicator = {false}
       
       />

     
    </>
  );
}

export default HomeCategory;