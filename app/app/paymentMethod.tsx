import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Product {
  id: number;
  name: string;
  info: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface PaymentMethod {
  id: number;
  type: string;
  lastDigits: string;
  expiry: string;
  iconUrl: string;
}

const ShoppingCart: React.FC = () => {
  const [products] = useState<Product[]>([
    { id: 1, name: 'Sweater', info: 'LBB round neck sweater for women', price: 2000, quantity: 1, imageUrl: 'https://via.placeholder.com/80' },
    { id: 2, name: 'Sweater', info: 'LBB round neck sweater for women', price: 2000, quantity: 1, imageUrl: 'https://via.placeholder.com/80' },
    { id: 3, name: 'Sweater', info: 'LBB round neck sweater for women', price: 2000, quantity: 1, imageUrl: 'https://via.placeholder.com/80' },
  ]);

  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

  const paymentMethods: PaymentMethod[] = [
    { id: 1, type: 'Visa', lastDigits: '1234', expiry: '09/2028', iconUrl: 'https://via.placeholder.com/24' },
    { id: 2, type: 'Mastercard', lastDigits: '1234', expiry: '07/2027', iconUrl: 'https://via.placeholder.com/24' },
    { id: 3, type: 'Visa', lastDigits: '5678', expiry: '10/2026', iconUrl: 'https://via.placeholder.com/24' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      <ScrollView>
        <Text className="text-2xl font-bold mb-4">Mefit</Text>

        <View className="flex-row">
          {/* Lista de productos */}
          <View className="w-3/4 space-y-4 pr-4">
            {products.map((product) => (
              <View key={product.id} className="flex-row items-center bg-white p-4 rounded-lg shadow-sm justify-between">
                <Image source={{ uri: product.imageUrl }} className="w-16 h-16 rounded" />
                <View className="flex-1 ml-4">
                  <Text className="font-semibold">{product.name}</Text>
                  <Text className="text-gray-500">{product.info}</Text>
                </View>
                <Text className="font-semibold ml-4">${product.price}</Text>
              </View>
            ))}
          </View>

          {/* Resumen de compra y métodos de pago */}
          <View className="w-1/4 bg-white p-4 rounded-lg shadow-md">
            <Text className="text-lg font-semibold mb-2">Choose your payment method</Text>
            <Text className="text-gray-500 mb-4">Update your plan payment details.</Text>

            {/* Lista de métodos de pago */}
            <View className="space-y-2">
              {paymentMethods.map((method) => (
                <TouchableOpacity
                  key={method.id}
                  onPress={() => setSelectedMethod(method.id)}
                  className={`flex-row items-center p-3 border rounded-md ${
                    selectedMethod === method.id ? 'border-black bg-gray-100' : 'border-gray-300 bg-white'
                  }`}
                >
                  <Image source={{ uri: method.iconUrl }} className="w-6 h-6 mr-2" />
                  <View className="flex-1">
                    <Text>{method.type} ending with {method.lastDigits}</Text>
                    <Text className="text-gray-400">Exp: {method.expiry}</Text>
                  </View>
                  <View className={`w-4 h-4 border-2 rounded-full ml-auto flex items-center justify-center ${
                    selectedMethod === method.id ? 'border-black bg-black' : 'border-gray-400 bg-white'
                  }`}>
                    {selectedMethod === method.id && <View className="w-2 h-2 bg-white rounded-full" />}
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Botones de confirmación */}
            <View className="flex-row justify-between mt-6">
              <TouchableOpacity className="bg-gray-200 py-2 px-4 rounded-lg">
                <Text className="text-center text-black">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-black py-2 px-4 rounded-lg">
                <Text className="text-center text-white">Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShoppingCart;
