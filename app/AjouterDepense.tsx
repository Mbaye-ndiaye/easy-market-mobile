import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

type ExpenseType = 'SALAIRE' | 'TRANSPORT' | 'NOURRITURE' | 'AUTRE' | string;
type PaymentMethod = 'WAVE' | 'ESPECES' | 'CARTE' | 'AUTRE';

interface SelectOption {
  label: string;
  value: ExpenseType | PaymentMethod;
}

const initialExpenseTypes: SelectOption[] = [
  { label: 'SALAIRE', value: 'SALAIRE' },
  { label: 'TRANSPORT', value: 'TRANSPORT' },
  { label: 'NOURRITURE', value: 'NOURRITURE' },
  { label: 'AUTRE', value: 'AUTRE' },
];

const paymentMethods: SelectOption[] = [
  { label: 'WAVE', value: 'WAVE' },
  { label: 'ESPECES', value: 'ESPECES' },
  { label: 'CARTE', value: 'CARTE' },
  { label: 'AUTRE', value: 'AUTRE' },
];

export default function AddExpenseScreen() {
  const [expenseReason, setExpenseReason] = useState('');
  const [amount, setAmount] = useState('');
  const [expenseType, setExpenseType] = useState<ExpenseType>('SALAIRE');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('WAVE');
  const [showExpenseTypeModal, setShowExpenseTypeModal] = useState(false);
  const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(false);
  const [newExpenseType, setNewExpenseType] = useState('');
  const [expenseTypes, setExpenseTypes] = useState(initialExpenseTypes);

  const handleSave = () => {
    console.log('Saving expense...');
  };

  const handleDelete = () => {
    console.log('Deleting expense...');
  };

  const handleAddNewExpenseType = () => {
    if (newExpenseType.trim() !== '') {
      setExpenseTypes([...expenseTypes, { label: newExpenseType, value: newExpenseType }]);
      setExpenseType(newExpenseType);
      setNewExpenseType('');
      setShowExpenseTypeModal(false);
    }
  };

  const Select = ({ 
    value, 
    options, 
    isVisible, 
    onClose, 
    onSelect,
    showWaveIcon = false,
    showNewExpenseTypeInput = false,
  }: { 
    value: string;
    options: SelectOption[];
    isVisible: boolean;
    onClose: () => void;
    onSelect: (value: any) => void;
    showWaveIcon?: boolean;
    showNewExpenseTypeInput?: boolean;
  }) => (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.modalOverlay}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Sélectionner</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.modalCloseButton}>✕</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.modalItem,
                  item.value === value && styles.modalItemSelected,
                ]}
                onPress={() => {
                  onSelect(item.value);
                  if (item.value !== 'AUTRE') {
                    onClose();
                  }
                }}
              >
                {showWaveIcon && item.value === 'WAVE' && (
                  <View style={styles.waveLogoContainer}>
                    <View style={styles.waveLogo} />
                  </View>
                )}
                <Text style={[
                  styles.modalItemText,
                  item.value === value && styles.modalItemTextSelected,
                ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
          {showNewExpenseTypeInput && value === 'AUTRE' && (
            <View style={styles.newExpenseTypeContainer}>
              <TextInput
                style={styles.newExpenseTypeInput}
                value={newExpenseType}
                onChangeText={setNewExpenseType}
                placeholder="Entrez un nouveau type de dépense"
              />
              <TouchableOpacity 
                style={styles.addNewExpenseTypeButton}
                onPress={handleAddNewExpenseType}
              >
                <Text style={styles.addNewExpenseTypeButtonText}>Ajouter</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ajout dépense</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.deleteButtonText}>Supprimer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Enregistrer</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Motif de la dépense</Text>
          <TextInput
            style={styles.input}
            value={expenseReason}
            onChangeText={setExpenseReason}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Montant de la dépense</Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Type de dépense</Text>
          <TouchableOpacity 
            style={styles.dropdown}
            onPress={() => setShowExpenseTypeModal(true)}
          >
            <Text>{expenseType}</Text>
            <Text>▼</Text>
          </TouchableOpacity>
          <Select
            value={expenseType}
            options={expenseTypes}
            isVisible={showExpenseTypeModal}
            onClose={() => setShowExpenseTypeModal(false)}
            onSelect={setExpenseType}
            showNewExpenseTypeInput={true}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Moyen de paiement utilisé</Text>
          <TouchableOpacity 
            style={styles.dropdown}
            onPress={() => setShowPaymentMethodModal(true)}
          >
            <View style={styles.paymentMethod}>
              {paymentMethod === 'WAVE' && (
                <View style={styles.waveLogoContainer}>
                  <View style={styles.waveLogo} />
                </View>
              )}
              <Text>{paymentMethod}</Text>
            </View>
            <Text>▼</Text>
          </TouchableOpacity>
          <Select
            value={paymentMethod}
            options={paymentMethods}
            isVisible={showPaymentMethodModal}
            onClose={() => setShowPaymentMethodModal(false)}
            onSelect={setPaymentMethod}
            showWaveIcon
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Pièce justificative</Text>
          <TouchableOpacity style={styles.importButton}>
            <Text style={styles.importButtonText}>📥 IMPORTER FICHIER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

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
    borderBottomColor: '#eee',
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
    gap: 12,
  },
  deleteButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#dc2626',
  },
  deleteButtonText: {
    color: '#dc2626',
  },
  saveButton: {
    backgroundColor: '#0c4a6e',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  saveButtonText: {
    color: '#fff',
  },
  form: {
    padding: 16,
    gap: 24,
  },
  formGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  waveLogoContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#00b2ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveLogo: {
    width: 16,
    height: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  importButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ddd',
    borderRadius: 4,
    justifyContent: 'center',
  },
  importButtonText: {
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  modalCloseButton: {
    fontSize: 20,
    color: '#666',
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    gap: 8,
  },
  modalItemSelected: {
    backgroundColor: '#f0f9ff',
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  },
  modalItemTextSelected: {
    color: '#0c4a6e',
    fontWeight: '600',
  },
  newExpenseTypeContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  newExpenseTypeInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    marginBottom: 8,
  },
  addNewExpenseTypeButton: {
    backgroundColor: '#0c4a6e',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  addNewExpenseTypeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});