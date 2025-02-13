import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

interface ExpenseDetailProps {
  onBack: () => void;
  onDelete: () => void;
  onSave: () => void;
}

export const ExpenseDetail: React.FC<ExpenseDetailProps> = ({
  onBack,
  onDelete,
  onSave
}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Détail dépense</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Supprimer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSave} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Enregistrer</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Expense Reason */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Motif de la dépense</Text>
          <View style={styles.input}>
            <Text>Salaire de Fatim</Text>
          </View>
        </View>

        {/* Amount */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Montant de la dépense</Text>
          <View style={styles.input}>
            <Text>100 000 FCFA</Text>
          </View>
        </View>

        {/* Expense Type */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Type de dépense</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text>SALAIRE</Text>
            <Feather name="chevron-down" size={20} color="#000" style={styles.dropdownIcon} />
          </TouchableOpacity>
        </View>

        {/* Payment Method */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Moyen de paiement utilisé</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Image 
              source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-08%20at%2012.51.30%20PM%20(2)-nihty6C7GR7VhQt9jFuofDAcwzudpA.jpeg' }}
              style={styles.waveIcon}
            />
            <Text>WAVE</Text>
            <Feather name="chevron-down" size={20} color="#000" style={styles.dropdownIcon} />
          </TouchableOpacity>
        </View>

        {/* Supporting Document */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Pièce justificative</Text>
          <TouchableOpacity style={styles.importButton}>
            <Text style={styles.importButtonText}>IMPORTER FICHIER</Text>
          </TouchableOpacity>
          
          <View style={styles.filePreview}>
            <View style={styles.fileInfo}>
              <Text style={styles.fileName}>Capture ecran wave.pdf</Text>
              <Text style={styles.fileSize}>200 KB</Text>
            </View>
            <TouchableOpacity>
              <MaterialIcons name="visibility" size={24} color="#F90" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  deleteButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  deleteButtonText: {
    color: '#FF0000',
  },
  saveButton: {
    backgroundColor: '#003366',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  saveButtonText: {
    color: '#FFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  formGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    padding: 12,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    padding: 12,
  },
  dropdownIcon: {
    marginLeft: 'auto',
  },
  waveIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 12,
  },
  importButton: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#F90',
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  importButtonText: {
    color: '#F90',
    fontWeight: '600',
  },
  filePreview: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8F0',
    padding: 16,
    borderRadius: 4,
  },
  fileInfo: {
    flex: 1,
  },
  fileName: {
    fontSize: 14,
    color: '#333',
  },
  fileSize: {
    fontSize: 12,
    color: '#666',
  },
});

export default ExpenseDetail;
