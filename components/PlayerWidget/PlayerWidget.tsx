import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../../constants/Colors";
import { Song } from "../../types";

const currentSong: Song = {
  SongId: "1",
  SongImageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  SongTitle: "High on You",
  SongArtist: "Helen",
};

function PlayerWidget() {
  return (
    <View style={styles.screen}>
      <Image source={{ uri: currentSong.SongImageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{currentSong.SongTitle}</Text>
          <Text style={styles.artist}>{currentSong.SongArtist}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={30} color="white" />
          <FontAwesome name="play" size={30} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    position: "absolute",
    bottom: 48,
    backgroundColor: "#131313",
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
  },
  rightContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between'
  },
  nameContainer: {
    flexDirection:'row',
    alignItems:'center',
  },
  iconsContainer: {
    flexDirection:'row',
    alignItems:'center',
    width:100,
    justifyContent:'space-around'
  },
  image: {
    width: 75,
    height: 75,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  artist: {
    color: "lightgray",
    fontSize: 18,
  },
});
export default PlayerWidget;
