import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { AlbumModel } from "../../types";
import Album from "../Album/Album";

export type AlbumCategoryProps = {
  title: string;
  albums: AlbumModel[];
};

function AlbumCategory({ title, albums }: AlbumCategoryProps) {
  return (
    <View style={styles.screen} >
      <Text style={styles.title}>{title}</Text>
      <FlatList
        keyExtractor={(Album) => Album.AlbumId}
        data={albums}
        renderItem={({ item }) => <Album Album={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
      margin:10
  },
  title: {
    color: "white",
    fontSize:26,
    margin:10
  },
});
export default AlbumCategory;
