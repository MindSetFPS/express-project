import { Button, ButtonGroup, ButtonSpinner, ButtonText } from '@/components/ui/button';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface PaymentMethod {
  id: number;
  type: string;
  lastDigits: string;
  expiry: string;
  iconUrl: string;
}

const ShoppingCart: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);
  const paymentMethods: PaymentMethod[] = [
    { id: 1, type: 'Visa', lastDigits: '1234', expiry: '09/2028', iconUrl: 'https://via.placeholder.com/24' },
    { id: 2, type: 'Mastercard', lastDigits: '1234', expiry: '07/2027', iconUrl: 'https://via.placeholder.com/24' },
    { id: 3, type: 'Visa', lastDigits: '5678', expiry: '10/2026', iconUrl: 'https://via.placeholder.com/24' },
  ];

  return (
    <SafeAreaView className="flex-1 flex-row justify-center align-middle items-center mx-auto container bg-gray-100 p-4">
      <View className="bg-white p-4 rounded-lg shadow-md h-min">
        <Text className="text-lg font-semibold mb-2">Choose your payment method</Text>
        <Text className="text-gray-500 mb-4">Update your plan payment details.</Text>
        <View className="space-y-2">
          {paymentMethods.map((method) => (
            <TouchableOpacity
              key={method.id}
              onPress={() => setSelectedMethod(method.id)}
              className={`flex-row items-center p-3 border rounded-md ${selectedMethod === method.id ? 'border-black bg-gray-100' : 'border-gray-300 bg-white'
                }`}
            >
              <Image source={{ uri: method.iconUrl }} className="w-6 h-6 mr-2" />
              <View className="flex-1">
                <Text>{method.type} ending with {method.lastDigits}</Text>
                <Text className="text-gray-400">Exp: {method.expiry}</Text>
              </View>
              <View className={`w-4 h-4 border-2 rounded-full ml-auto flex items-center justify-center ${selectedMethod === method.id ? 'border-black bg-black' : 'border-gray-400 bg-white'
                }`}>
                {selectedMethod === method.id && <View className="w-2 h-2 bg-white rounded-full" />}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex-row justify-between mt-6">
          <Button 
            variant='outline' 
            className='mr-2'
            onPress={() => {
              router.push('addPaymentMethod');
            }}
          >
            Agregar nuevo metodo
          </Button>

            <Button variant='solid' className='text-white'>
              Guardar
            </Button>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCart;
