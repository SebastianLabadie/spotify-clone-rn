import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Song } from "../../types";

export type SongListItemProps = {
  song: Song;
};

function SongListItem({ song }: SongListItemProps) {
  return (
    <View style={styles.screen}>
      <Image source={{ uri: song.SongImageUri }} style={styles.image} />
      <View style={styles.right}>
        <Text style={styles.title}>{song.SongTitle}</Text>
        <Text style={styles.artist}>{song.SongArtist}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    margin:10,
  },
  right:{
    justifyContent:'space-around',
    marginLeft:15,

  },
  image: {
    width: 75,
    height: 75,
  },
  title: {
    color: "white",
    fontSize:24,
    
  },
  artist: {
    color: "lightgray",
    fontSize:20,
  },
});
export default SongListItem;
