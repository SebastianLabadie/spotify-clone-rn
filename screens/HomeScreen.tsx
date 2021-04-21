import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import Album from "../components/Album/Album";
import AlbumCategory from "../components/AlbumCategory/AlbumCategory";
import { Text, View } from "../components/Themed";

import albumCategories from "../data/albumCategories";
import { AlbumModel } from "../types";

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      // value previously stored
      console.log('value: ',value)
    }
  } catch(e) {
    // error reading value
    console.log('error home: ')
  }
}

export default function TabOneScreen() {
  getData()

  React.useEffect(() => {
   getData()
  }, [])

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(albumCategory) => albumCategory.id}
        data={albumCategories}
        renderItem={({ item }) => <AlbumCategory  title={item.title} albums={item.albums} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
