import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  let pic = {
    uri: 'https://images.unsplash.com/photo-1570738865522-8eae952075e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  };
  return (
    <View style={styles.container}>
      {/* <Text>Ice Cream</Text> */}
      <Image source={pic} style={styles.image1} />
      <Image source={pic} style={styles.image2} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    overflow: 'auto'
  },
  image1: {
    width: '100%',
    height: '100%'
  },

  image2: {
    width: '100%',
    height: '100%'
  }
});
