import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AlbumModel } from "../../types";



export type AlbumProps = {
  Album: AlbumModel;
};

function Album({ Album }: AlbumProps) {
  const navigation = useNavigation()

  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback onPress={()=>navigation.navigate('AlbumScreen',{AlbumId:Album.AlbumId})}>
        <Image style={styles.image} source={{ uri: Album.AlbumImageUri }} />
        <Text style={styles.text}>{Album.AlbumArtistHeadLine}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: 150,
    margin:10, 
  },
  image: {
    width: "100%",
    height: 150,
  },
  text: {
    color: "gray",
    marginTop:10
  }
});

export default Album;
