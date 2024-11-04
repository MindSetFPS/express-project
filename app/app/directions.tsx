import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '@/components/ui/icon';
import { Home, MoreVertical, ArrowRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const AddressScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleEditLocation = () => {
    Alert.alert('Editar', 'Función para editar la ubicación');
  };

  const handleManageShippingAddresses = () => {
    Alert.alert('Gestionar mis domicilios de envíos', 'Función para gestionar domicilios');
  };

  const handleUseForSales = () => {
    Alert.alert('Usar para ventas', 'Función para usar esta dirección en ventas');
  };

  const handleDeleteAddress = () => {
    Alert.alert('Eliminar', 'Función para eliminar la dirección');
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 p-4">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20 }}>
        
        {/* Card de dirección */}
        <View className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex-row items-start mb-6 mt-4">
          <Icon as={Home} size="lg" className="text-gray-700 mr-3" />
          <View className="flex-1">
            <Text className="text-black text-lg font-semibold">Calle 10 NS</Text>
            <Text className="text-gray-500">Postal code 97470 - Yucatán - Tixkokob</Text>
            <Text className="text-gray-500 mb-2">Juanita Lucia Mendosa - 9993257774</Text>

            <TouchableOpacity onPress={handleEditLocation}>
              <Text className="text-blue-600 font-medium">Edit location data and times</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <Icon as={MoreVertical} size="lg" className="text-gray-500" />
          </TouchableOpacity>
        </View>

        {/* Modal de opciones */}
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={toggleModal}
        >
          <TouchableOpacity style={styles.modalOverlay} onPress={toggleModal}>
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.option} onPress={handleEditLocation}>
                <Text style={styles.optionText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={handleManageShippingAddresses}>
                <Text style={styles.optionText}>Gestionar mis domicilios de envíos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={handleUseForSales}>
                <Text style={styles.optionText}>Usar para ventas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={handleDeleteAddress}>
                <Text style={styles.optionText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>

        {/* Botón para agregar dirección */}
        <TouchableOpacity onPress={() => navigation.navigate('addanAddress')} className="flex-row items-center mt-4">
          <Text className="text-blue-600 font-medium mr-2">Add address</Text>
          <Icon as={ArrowRight} size="sm" className="text-blue-600" />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 250,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 10,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
});

export default AddressScreen;
