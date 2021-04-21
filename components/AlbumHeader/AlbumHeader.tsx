import React, { useEffect } from 'react'
import {View,StyleSheet,Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AlbumDetailModel } from '../../types'
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AlbumHeaderProps={
    album:AlbumDetailModel
}

const storeData = async (value:any) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
      console.log('saving error')
    }
  }

function AlbumHeader({album}:AlbumHeaderProps) {


    useEffect(() => {
        storeData('pepe')
    }, [])

    return (
        <View style={styles.screen}>
            <Image  source={{uri:album.AlbumImageUri}} style={styles.image} />
            <Text style={styles.name}>{album.AlbumName}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By: {album.Albumby} -</Text>
                <Text style={styles.likes}>{album.AlbumNumberOfLikes} Likes</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.btnPlay}>
                    <Text style={styles.playText}>Play </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        alignItems:'center',
        padding:20,
    },
    image:{
        width:200,
        height:200
    },
    title:{
        color:'red'
    },
    name:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        marginVertical:10
    },
    creatorContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
    },
    creator:{
        color:'lightgray',
        margin:5,
        fontSize:18
    },
    likes:{
        color:'lightgray',
        margin:5,
        fontSize:18
    },
    btnPlay:{
        backgroundColor:'#1CD05D',
        height:60,
        width:170,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',

    },
    playText:{
        color:'lightgray',
        fontSize:20,
        fontWeight:'bold'
    }
})
export default AlbumHeader