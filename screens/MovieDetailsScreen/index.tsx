import React ,{useState}  from 'react'
import { Image,View ,Pressable} from 'react-native'
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons'; 
import styles from './styles'
import movie from '../../assets/data/movie'
import { Text } from '../../components/Themed'
import {Picker} from '@react-native-picker/picker';
import EpisodeItem from '../../components/EpisodeItem';
const firstSeason = movie.seasons.items[0];
const firstEpisode = movie.seasons.items[0].episodes.items[0]
const MovieDetailsScreen = () =>{
    const [movie, setMovie] = useState<Movie|undefined>(undefined);
    const [seasons, setSeasons] = useState<Season[]>([]);
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    const [currentSeason, setCurrentSeason] = useState<Season|undefined>(undefined);
    const [currentEpisode, setCurrentEpisode] = useState<Episode|undefined>(undefined);

    const seasonNames = seasons ? seasons.map(season => season.name) : [];
    return (
        <View>
            <Image style = {styles.image}source = {{uri: firstEpisode.poster}} />
            
            <View style = {{padding:12}}
            >
                <EpisodeItem episode = {firstEpisode}/>
            <Text style = {styles.title}>{movie.title}</Text>
            <View style={{flexDirection: 'row'}}>
                            <Text style={styles.match}>98% match</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name="hd" size={24} color="white" />
                        </View>
            {/* Play Button */}
            <Pressable onPress={() => { console.warn('Plage')}} style={styles.playButton}>
                            <Text style={styles.playButtonText}>
                                <Entypo name="controller-play" size={16} color="black" />
                                Play
                            </Text>
                        </Pressable>

                        {/* Download Button */}
                        <Pressable onPress={() => { console.warn('Download')}} style={styles.downloadButton}>
                            <Text style={styles.downloadButtonText}>
                                <AntDesign name="download" size={16} color="white" />
                                {' '}
                                Download
                            </Text>
                        </Pressable>
                        <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
                        <Text style={styles.year}>Cast: {movie.cast}</Text>
                        <Text style={styles.year}>Creator: {movie.creator}</Text>

                        {/* Row with icon buttons */}
                        <View style={{flexDirection: 'row', marginTop: 20,}}>
                            <View style={{alignItems: 'center', marginHorizontal: 20}}>
                                <AntDesign name="plus" size={24} color={'white'} />
                                <Text style={{color: 'darkgrey', marginTop: 5}}>My List</Text>
                            </View>

                            <View style={{alignItems: 'center', marginHorizontal: 20}}>
                                <Feather name="thumbs-up" size={24} color="white" />
                                <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
                            </View>

                            <View style={{alignItems: 'center', marginHorizontal: 20}}>
                                <FontAwesome name="send-o" size={24} color="white" />
                                <Text style={{color: 'darkgrey', marginTop: 5 }}>Share</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white'}}></View>

                        <Picker
                                selectedValue={currentSeason.name}
                                onValueChange={(itemValue, itemIndex) => {
                                    setCurrentSeason(seasons[itemIndex])
                                }}
                                style={{color: 'white', width: 130 }}
                                itemStyle={{backgroundColor: 'white'}}
                                dropdownIconColor={'white'}
                            >
                                {seasonNames.map(seasonName => (
                                    <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                                ))}
                            </Picker>  
                            
                           

            
            
        </View>
        </View>
        
    )
    
}

export default MovieDetailsScreen
