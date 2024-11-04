import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Briefcase, Home } from 'lucide-react-native';

const AddShippingAddress: React.FC = () => {
  const [addressType, setAddressType] = useState<string>('Labor');

  const handleSaveAddress = () => {
    Alert.alert("Guardar dirección", "La dirección se ha guardado correctamente.");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 p-6">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20 }}>
        <View className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
          <Text className="text-xl font-semibold mb-6 text-center">Agregar Dirección de Envío</Text>

          {/* Campos de dirección en una cuadrícula */}
          <View className="grid grid-cols-2 gap-4">
            <View>
              <Text className="text-gray-700 mb-1">Name</Text>
              <TextInput placeholder="Name" className="border border-gray-300 rounded-md px-3 py-2" />
            </View>

            <View>
              <Text className="text-gray-700 mb-1">Zip Code</Text>
              <TextInput placeholder="Zip Code" className="border border-gray-300 rounded-md px-3 py-2" />
            </View>

            <View>
              <Text className="text-gray-700 mb-1">State</Text>
              <TextInput placeholder="State" className="border border-gray-300 rounded-md px-3 py-2" />
            </View>

            <View>
              <Text className="text-gray-700 mb-1">Town</Text>
              <TextInput placeholder="Town" className="border border-gray-300 rounded-md px-3 py-2" />
            </View>

            <View>
              <Text className="text-gray-700 mb-1">Cologne</Text>
              <TextInput placeholder="Cologne" className="border border-gray-300 rounded-md px-3 py-2" />
            </View>

            <View>
              <Text className="text-gray-700 mb-1">Number</Text>
              <TextInput placeholder="Number" className="border border-gray-300 rounded-md px-3 py-2" />
            </View>

            <View>
              <Text className="text-gray-700 mb-1">Street</Text>
              <TextInput placeholder="Street" className="border border-gray-300 rounded-md px-3 py-2" />
            </View>

            <View>
              <Text className="text-gray-700 mb-1">Interior No.</Text>
              <TextInput placeholder="Interior No." className="border border-gray-300 rounded-md px-3 py-2" />
            </View>

            <View>
              <Text className="text-gray-700 mb-1">Street 1</Text>
              <TextInput placeholder="Street 1" className="border border-gray-300 rounded-md px-3 py-2" />
            </View>

            <View>
              <Text className="text-gray-700 mb-1">Street 2</Text>
              <TextInput placeholder="Street 2" className="border border-gray-300 rounded-md px-3 py-2" />
            </View>
          </View>

          {/* Tipo de dirección */}
          <View className="my-4">
            <Text className="text-gray-700 mb-2">¿Es tu trabajo o tu casa?</Text>
            <View className="flex-row space-x-4">
              <TouchableOpacity
                className={`flex-row items-center px-4 py-2 rounded-full border ${
                  addressType === 'Labor' ? 'border-black bg-gray-100' : 'border-gray-300'
                }`}
                onPress={() => setAddressType('Labor')}
              >
                <Briefcase
                  className={`mr-2 ${addressType === 'Labor' ? 'text-black' : 'text-gray-400'}`}
                />
                <Text className={addressType === 'Labor' ? 'text-black' : 'text-gray-400'}>
                  Labor
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`flex-row items-center px-4 py-2 rounded-full border ${
                  addressType === 'Residential' ? 'border-black bg-gray-100' : 'border-gray-300'
                }`}
                onPress={() => setAddressType('Residential')}
              >
                <Home
                  className={`mr-2 ${addressType === 'Residential' ? 'text-black' : 'text-gray-400'}`}
                />
                <Text className={addressType === 'Residential' ? 'text-black' : 'text-gray-400'}>
                  Residential
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Campo de teléfono */}
          <View className="mb-4">
            <Text className="text-gray-700 mb-1">Phone Number</Text>
            <TextInput placeholder="Phone Number" className="border border-gray-300 rounded-md px-3 py-2" />
          </View>

          {/* Botón de guardar */}
          <TouchableOpacity 
            onPress={handleSaveAddress} 
            className="bg-black py-3 rounded-md shadow-md mt-6"
          >
            <Text className="text-white text-center font-semibold">Guardar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddShippingAddress;
