// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import MepsPages from './MepsPages';

// const TashkentCoordinates = {
//   latitude: 41.3111,
//   longitude: 69.2401,
// };

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: TashkentCoordinates.latitude,
//           longitude: TashkentCoordinates.longitude,
//           latitudeDelta: 0.02,
//           longitudeDelta: 0.02,
//         }}
//       >
//         <Marker
//           coordinate={TashkentCoordinates}
//           title="Toshkent"
//           description="Oʻzbekiston, 100097"
//         />
//       </MapView>
//       <MepsPages />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default App;