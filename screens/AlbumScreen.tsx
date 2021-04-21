import { useRoute } from '@react-navigation/core'
import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import AlbumHeader from '../components/AlbumHeader/AlbumHeader'
import SongListItem from '../components/SongListItem/SongListItem'
import albumDetails from '../data/albumDetails'

function AlbumScreen() {

    const router  = useRoute()
    return (
        <View style={styles.screen} >
            <Text style={styles.title}>ALBUMMM {router.params?.AlbumId}</Text>
            <FlatList
                keyExtractor={(Song)=>Song.SongId}
                data={albumDetails.songs}
                renderItem={({item})=><SongListItem song={item} />}
                ListHeaderComponent={()=><AlbumHeader  album={albumDetails} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{},
    title:{
        color:'white'
    }
})
export default AlbumScreen