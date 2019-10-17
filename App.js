import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    pic: {
      uri: 'https://images.unsplash.com/photo-1570738865522-8eae952075e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    pic: {
      uri: 'https://images.unsplash.com/photo-1570738865522-8eae952075e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    pic: {
      uri: 'https://images.unsplash.com/photo-1570738865522-8eae952075e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
  },
];

function Item({ item }) {
  return (
    <View style={styles.container1}>
      <Image source={item.pic} style={styles.image} />
      {/* <Text style={styles.title}>{item.title}</Text> */}
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  container1: {
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center'
      },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: '100%',
    height: '100%'
  },
});

// export default function App() {
//   let pic = {
//     uri: 'https://images.unsplash.com/photo-1570738865522-8eae952075e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
//   };
//   return (
//     <View style={styles.container}>
//       {/* <Text>Ice Cream</Text> */}
//       <Image source={pic} style={styles.image1} />
//       <Image source={pic} style={styles.image2} />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%'
//   },
//   image1: {
//     width: '100%',
//     height: '100%'
//   },

//   image2: {
//     width: '100%',
//     height: '100%'
//   }
// });
