import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const categorie = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>categorie</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    test: {
        fontSize: 30,
        color: "white",
        fontWeight: 'bold',
        marginBottom: 10,
    },

})
export default categorie
