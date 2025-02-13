import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const commande = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>commande</Text>
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
        color: "white",
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },

})

export default commande
