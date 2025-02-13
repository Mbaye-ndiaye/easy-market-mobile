// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useRouter } from 'expo-router';

// const modules = [
//   { name: 'Promos', image: require('../../assets/images/promo.png') },
//   { name: 'Vendeurs', image: require('../../assets/images/vendeur.png') },
//   { name: 'Dépenses', image: require('../../assets/images/comptembilite.png'), route: '/AfficherDepense' }
// ];

// const Accueil = () => {
//   const router = useRouter();

//   return (
//     <SafeAreaView>
//       <View>
//         {/* Header */}
//         <View style={styles.header}>
//           <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
//           <Text style={styles.title}>Modules</Text>
//           <View style={styles.icons}>
//             <Ionicons name="notifications-outline" size={28} color="#333" />
//             <FontAwesome name="user-circle" size={28} color="#333" />
//           </View>
//         </View>

//         {/* Modules */}
//         <View style={styles.moduleContainer}>
//           {modules.map((module, index) => (
//             <TouchableOpacity key={index} onPress={() => router.push('/AfficherDepense')}>
//               <View style={styles.card}>
//                 <Image source={module.image} style={styles.image} />
//                 <Text style={styles.text}>{module.name}</Text>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     paddingHorizontal: 10,
//     paddingVertical: 15
//   },
//   logo: {
//     width: 60,
//     height: 60
//   },
//   icons: {
//     flexDirection: 'row',
//     width: 80,
//     justifyContent: 'space-between'
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   moduleContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     // justifyContent: 'center',
//     marginTop: 20,
//     alignItems: 'center',
//     textAlign: 'center',
//     marginLeft: 28
//   },
//   card: {
//     backgroundColor: '#F78F06',
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 170,
//     height: 140,
//     margin: 5
//   },
//   image: {
//     width: 80,
//     height: 80
//   },
//   text: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 5
//   }
// });

// export default Accueil;
