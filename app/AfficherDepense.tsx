import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native';

const AfficherDepense = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
    <View style={styles.page}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/modules')}>
                <Text>←</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Afficher dépense</Text>
              </View>
      <TextInput
        style={styles.input}
        placeholder="Rechercher ici"
      />

      <Text style={styles.dateText}>Aujourd'hui</Text>

      {/* Carte Dépense */}
      <TouchableOpacity style={styles.cartDepense} onPress={() => router.push('/DetailsDepense')}>
        <View style={styles.facture}>
          <Text style={styles.textCart}>Facture novembre SENELEC</Text>
          <Text style={styles.textCart}>2 360F CFA</Text>
        </View>
        <Text style={styles.expenseType}>ELECTRICITÉ</Text>
        <Text style={styles.timeText}>il y a 5 minutes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cartDepense} onPress={() => router.push('/DetailsDepense')}>
        <View style={styles.facture}>
          <Text style={styles.textCart}>Salaire Fatim</Text>
          <Text style={styles.textCart}>100 000F CFA</Text>
        </View>
        <Text style={styles.expenseType}>SALAIRE</Text>
        <Text style={styles.timeText}>il y a 5 minutes</Text>
      </TouchableOpacity>

      {/* Bouton Ajouter */}
      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/AjouterDepense')}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    // flex: 1,
    padding: 15,
    height: "100%"
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    fontSize: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    margin: "auto",
  },
  header: {
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
  },
  cartDepense: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
  },
  facture: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  textCart: {
    fontWeight: "bold",
    fontSize: 16,
  },
  expenseType: {
    backgroundColor:  "#3333",
    width: 150,
    color: "black",
    padding: 3,
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 5,
  },
  timeText: {
    marginTop: 5,
    fontSize: 12,
    color: "#555",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#F78F06",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
});

export default AfficherDepense;
